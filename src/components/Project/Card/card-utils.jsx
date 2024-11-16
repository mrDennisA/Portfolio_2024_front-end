"use client";

import { motion } from "framer-motion";

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
    <motion.div
      {...props}
      whileHover={{ y: ".5rem", transition: { type: "spring", damping: 12, stiffness: 100 } }}
      onHoverStart={handleMouseOver}
      onHoverEnd={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
