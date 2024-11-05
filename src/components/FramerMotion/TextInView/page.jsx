"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextInView({ children, color, styles = "" }) {
  // Framer Motion
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0.8"],
  });

  const transformYProgress = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <motion.div
      ref={ref}
      className={styles}
      style={{
        y: transformYProgress,
        backgroundColor: color,
      }}
    >
      {children}
    </motion.div>
  );
}
