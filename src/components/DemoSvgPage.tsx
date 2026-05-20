import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { type DemoExpansion, type DemoPageData, getDemoPage } from "../lib/demoPages";

type DemoSvgPageProps = {
  page: DemoPageData;
};

function DemoSvgPage({ page }: DemoSvgPageProps) {
  const [expanded, setExpanded] = useState<DemoExpansion | null>(null);
  const contentStartTop = page.contentStartTop ?? 0;
  const visibleHotspots = getVisibleHotspots(page, contentStartTop);
  const visibleExpansions = getVisibleExpansions(page, contentStartTop);

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
      <div className="demo-page" style={{ aspectRatio: `${page.width} / ${page.height * (1 - contentStartTop / 100)}` }}>
        {contentStartTop > 0 ? (
          <svg
            className="demo-svg demo-surface-media"
            viewBox={`0 ${(page.height * contentStartTop) / 100} ${page.width} ${
              page.height * (1 - contentStartTop / 100)
            }`}
            preserveAspectRatio="xMidYMin meet"
            role="img"
            aria-label={page.alt}
          >
            <image href={page.src} width={page.width} height={page.height} />
          </svg>
        ) : (
          <img
            src={page.src}
            alt={page.alt}
            width={page.width}
            height={page.height}
            className="demo-svg demo-surface-media"
          />
        )}

        {visibleHotspots.map((hotspot) => {
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

        {visibleExpansions.map((expansion) => (
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
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      if (!introRef.current) {
        return;
      }

      const rect = introRef.current.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = Math.min(Math.max(-rect.top / travel, 0), 1);
      setViewport({ width: window.innerWidth, height: window.innerHeight });
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

  const pageDisplayWidth = Math.min(viewport.width, 1530);
  const pageLeft = Math.max((viewport.width - pageDisplayWidth) / 2, 0);
  const finalLeft = pageLeft + pageDisplayWidth * (crop.left / 100);
  const finalTop = pageDisplayWidth * ((page.height * crop.top) / 100 / page.width);
  const finalWidth = pageDisplayWidth * (crop.width / 100);
  const finalHeight = pageDisplayWidth * ((page.height * crop.height) / 100 / page.width);
  const headerOpacity = Math.min(Math.max((progress - 0.72) / 0.28, 0), 1);
  const headerHotspots = getHeaderHotspots(page, crop.top);

  const frameStyle = {
    left: `${interpolate(0, finalLeft, progress)}px`,
    top: `${interpolate(0, finalTop, progress)}px`,
    width: `${interpolate(viewport.width, finalWidth, progress)}px`,
    height: `${interpolate(viewport.height, finalHeight, progress)}px`,
    borderRadius: `${progress * 30}px`,
    boxShadow: `0 ${progress * 28}px ${progress * 70}px rgba(3, 8, 15, ${progress * 0.2})`,
  } as CSSProperties;

  return (
    <section ref={introRef} className="demo-hero-intro">
      <div className="demo-hero-sticky">
        <div
          className="demo-hero-header"
          style={{
            left: `${pageLeft}px`,
            width: `${pageDisplayWidth}px`,
            opacity: headerOpacity,
          }}
        >
          <svg
            className="demo-hero-header-svg"
            viewBox={`0 0 ${page.width} ${(page.height * crop.top) / 100}`}
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
          >
            <image href={page.src} width={page.width} height={page.height} />
          </svg>
          {headerHotspots.map((hotspot) => {
            const style = {
              left: `${hotspot.left}%`,
              top: `${(hotspot.top / crop.top) * 100}%`,
              width: `${hotspot.width}%`,
              height: `${(hotspot.height / crop.top) * 100}%`,
            };
            const key = `intro-${hotspot.href}-${hotspot.label}`;

            return (
              <Link key={key} to={hotspot.href} aria-label={hotspot.label} className="demo-hotspot" style={style}>
                <span className="sr-only">{hotspot.label}</span>
              </Link>
            );
          })}
        </div>
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

function interpolate(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function getHeaderHotspots(page: DemoPageData, headerBottomTop: number) {
  return page.hotspots.filter((hotspot) => hotspot.top + hotspot.height <= headerBottomTop + 0.3);
}

function getVisibleHotspots(page: DemoPageData, contentStartTop: number) {
  if (contentStartTop <= 0) {
    return page.hotspots;
  }

  return page.hotspots
    .map((hotspot) => adjustVerticalSurfaceItem(hotspot, page.height, contentStartTop))
    .filter((hotspot): hotspot is typeof page.hotspots[number] => Boolean(hotspot));
}

function getVisibleExpansions(page: DemoPageData, contentStartTop: number) {
  if (contentStartTop <= 0) {
    return page.expansions;
  }

  return page.expansions
    .map((expansion) => adjustVerticalSurfaceItem(expansion, page.height, contentStartTop))
    .filter((expansion): expansion is typeof page.expansions[number] => Boolean(expansion));
}

function adjustVerticalSurfaceItem<T extends { top: number; height: number }>(
  item: T,
  pageHeight: number,
  contentStartTop: number,
) {
  const cropY = pageHeight * (contentStartTop / 100);
  const cropHeight = pageHeight - cropY;
  const itemTop = pageHeight * (item.top / 100);
  const itemBottom = itemTop + pageHeight * (item.height / 100);

  if (itemBottom <= cropY) {
    return null;
  }

  const adjustedTop = ((Math.max(itemTop, cropY) - cropY) / cropHeight) * 100;
  const adjustedHeight = ((itemBottom - Math.max(itemTop, cropY)) / cropHeight) * 100;

  return {
    ...item,
    top: adjustedTop,
    height: adjustedHeight,
  };
}

export function DemoRoute() {
  const { page: pageParam } = useParams();
  const page = getDemoPage(pageParam);

  if (!page) {
    return <Navigate to="/demo1" replace />;
  }

  return <DemoSvgPage page={page} />;
}
