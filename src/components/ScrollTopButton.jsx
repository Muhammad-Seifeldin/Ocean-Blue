import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 2000);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hidden lg:flex fixed right-10 bottom-1/3 z-50 bg-turquoise-horizon text-pearl-white w-12 h-12 rounded-full shadow-lg items-center justify-center hover:bg-deep-ocean transition-colors duration-300 text-xl"
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;