"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Parallax({ children, type = null, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundYProgress = useTransform(scrollYProgress, [0, 1], ["0", "50%"]);
  const textYProgress = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  if (type === "background") {
    return (
      <motion.div ref={ref} {...props} style={{ y: backgroundYProgress }}>
        {children}
      </motion.div>
    );
  }

  if (type === "text") {
    return (
      <motion.div ref={ref} {...props} style={{ y: textYProgress }}>
        {children}
      </motion.div>
    );
  }
}

export function CardParallax({ children, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transformYProgress = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.div
      ref={ref}
      {...props}
      style={{
        y: transformYProgress,
      }}
    >
      {children}
    </motion.div>
  );
}
