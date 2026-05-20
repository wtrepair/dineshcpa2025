import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DineshCPA from "./components/DineshCPA";
import BlogPage1 from "./components/BlogPage1";
import BlogPage2 from "./components/BlogPage2";
import BlogPage3 from "./components/BlogPage3";
import { DemoRoute } from "./components/DemoSvgPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DineshCPA />} />
      <Route path="/demo1" element={<DemoRoute />} />
      <Route path="/demo1/:page" element={<DemoRoute />} />
      <Route path="/blog/1" element={<BlogPage1 />} />
      <Route path="/blog/2" element={<BlogPage2 />} />
      <Route path="/blog/3" element={<BlogPage3 />} />
    </Routes>
  );
}
export default App;
