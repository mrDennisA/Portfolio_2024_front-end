"use client";

import { colorBG } from "@/utils/theme";

export function MouseHover({ children, color, ...props }) {
  const handleMouseOver = (e) => {
    const body = document.querySelector("body");
    const bannerMask = document.getElementById("bannerMask");
    body.style.backgroundColor = color;
    bannerMask.style.fill = color;
  };

  const handleMouseLeave = (e) => {
    const body = document.querySelector("body");
    const bannerMask = document.getElementById("bannerMask");
    body.style.backgroundColor = colorBG;
    bannerMask.style.fill = colorBG;
  };

  return (
    <div {...props} onMouseMove={handleMouseOver} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
