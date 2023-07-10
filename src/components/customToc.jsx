import { useEffect } from "react";
import tocbot from "tocbot";
export default function CustomTableOfContents() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h2, h3",
      headingsOffset: 100,
      scrollSmoothOffset: -100,
    });
    return () => {
      console.log("tocbot.destroy()");
      tocbot.destroy();
    };
  }, []);
  return (
    <div>
      <span>Table of Contents</span>
      <div className="js-toc"></div>
    </div>
  );
}
