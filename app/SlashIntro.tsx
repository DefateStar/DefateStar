"use client";

import { useEffect, useState } from "react";

export default function SlashIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      return;
    }

    document.documentElement.classList.add("intro-active");
    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove("intro-active");
      setVisible(false);
    }, 2200);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="slash-intro" aria-hidden="true">
      <div className="slash-intro__mask slash-intro__mask--up"></div>
      <div className="slash-intro__mask slash-intro__mask--down"></div>
      <div className="slash-intro__brand">
        <strong>DEFATE STAR</strong>
        <span>LOADING / PORTFOLIO</span>
      </div>
      <div className="slash-intro__blade"><i></i></div>
    </div>
  );
}
