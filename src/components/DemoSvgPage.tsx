import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { type DemoExpansion, type DemoPageData, getDemoPage } from "../lib/demoPages";

type DemoSvgPageProps = {
  page: DemoPageData;
};

function DemoSvgPage({ page }: DemoSvgPageProps) {
  const [expanded, setExpanded] = useState<DemoExpansion | null>(null);

  useEffect(() => {
    document.title = `${page.title} Demo | Dinesh CPA`;
  }, [page.title]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setExpanded(null);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [expanded]);

  return (
    <main className="demo-shell">
      {page.heroIntro ? <HeroIntro page={page} crop={page.heroIntro} /> : null}
      <div className="demo-page" style={{ aspectRatio: `${page.width} / ${page.height}` }}>
        <img src={page.src} alt={page.alt} width={page.width} height={page.height} className="demo-svg" />

        {page.hotspots.map((hotspot) => {
          const style = {
            left: `${hotspot.left}%`,
            top: `${hotspot.top}%`,
            width: `${hotspot.width}%`,
            height: `${hotspot.height}%`,
          };
          const key = `${hotspot.href}-${hotspot.label}-${hotspot.left}-${hotspot.top}`;

          if (hotspot.href.startsWith("mailto:")) {
            return (
              <a key={key} href={hotspot.href} aria-label={hotspot.label} className="demo-hotspot" style={style}>
                <span className="sr-only">{hotspot.label}</span>
              </a>
            );
          }

          return (
            <Link key={key} to={hotspot.href} aria-label={hotspot.label} className="demo-hotspot" style={style}>
              <span className="sr-only">{hotspot.label}</span>
            </Link>
          );
        })}

        {page.expansions.map((expansion) => (
          <button
            key={expansion.label}
            type="button"
            className="demo-expansion-hit"
            style={
              {
                "--expansion-left": `${expansion.left}%`,
                "--expansion-top": `${expansion.top}%`,
                "--expansion-width": `${expansion.width}%`,
                "--expansion-height": `${expansion.height}%`,
              } as CSSProperties
            }
            onClick={() => setExpanded(expansion)}
            aria-label={`Expand ${expansion.label}`}
          >
            <span>Expand</span>
          </button>
        ))}
      </div>

      {expanded ? (
        <div className="demo-modal" role="dialog" aria-modal="true" aria-label={expanded.label}>
          <button
            type="button"
            className="demo-modal-backdrop"
            onClick={() => setExpanded(null)}
            aria-label="Close expanded view"
          />
          <div className="demo-modal-panel">
            <div className="demo-modal-header">
              <div>
                <p className="demo-modal-kicker">Expanded view</p>
                <h1>{expanded.label}</h1>
              </div>
              <button type="button" className="demo-modal-close" onClick={() => setExpanded(null)}>
                Close
              </button>
            </div>
            <div
              className="demo-expanded-frame"
              style={{
                aspectRatio: `${page.width * expanded.width} / ${page.height * expanded.height}`,
              }}
            >
              <img
                src={page.src}
                alt=""
                className="demo-expanded-svg"
                style={
                  {
                    width: `${10000 / expanded.width}%`,
                    transform: `translate(-${expanded.left}%, -${expanded.top}%)`,
                  } as CSSProperties
                }
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function HeroIntro({ page, crop }: { page: DemoPageData; crop: DemoExpansion }) {
  const introRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      if (!introRef.current) {
        return;
      }

      const rect = introRef.current.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = Math.min(Math.max(-rect.top / travel, 0), 1);
      setProgress(nextProgress);
      frame = 0;
    }

    function scheduleUpdate() {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateProgress);
    }

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const frameStyle = {
    left: `${progress * 7.3}vw`,
    top: `${progress * 8.2}svh`,
    width: `${100 - progress * 14.6}vw`,
    height: `${100 - progress * 44}svh`,
    borderRadius: `${progress * 30}px`,
    boxShadow: `0 ${progress * 28}px ${progress * 70}px rgba(3, 8, 15, ${progress * 0.2})`,
  } as CSSProperties;

  return (
    <section ref={introRef} className="demo-hero-intro" aria-hidden="true">
      <div className="demo-hero-sticky">
        <div className="demo-hero-frame" style={frameStyle}>
          <svg
            className="demo-hero-crop"
            viewBox={`${(page.width * crop.left) / 100} ${(page.height * crop.top) / 100} ${
              (page.width * crop.width) / 100
            } ${(page.height * crop.height) / 100}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <image href={page.src} width={page.width} height={page.height} />
          </svg>
        </div>
      </div>
    </section>
  );
}

export function DemoRoute() {
  const { page: pageParam } = useParams();
  const page = getDemoPage(pageParam);

  if (!page) {
    return <Navigate to="/demo1" replace />;
  }

  return <DemoSvgPage page={page} />;
}
