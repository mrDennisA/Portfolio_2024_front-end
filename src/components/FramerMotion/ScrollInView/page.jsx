"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollInView({ children, styles = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const transformYProgress = useTransform(scrollYProgress, [0, 0.2, 1], [200, 0, 0]);

  return (
    <motion.div
      ref={ref}
      className={styles}
      style={{
        opacity: opacityProgress,
        y: transformYProgress,
      }}
    >
      {children}
    </motion.div>
  );
}

export function CardInView({ children, styles = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 1, 0]);
  const transformYProgress = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [200, 0, 0, -200]);

  return (
    <motion.div
      ref={ref}
      className={styles}
      style={{
        opacity: opacityProgress,
        y: transformYProgress,
      }}
    >
      {children}
    </motion.div>
  );
}
