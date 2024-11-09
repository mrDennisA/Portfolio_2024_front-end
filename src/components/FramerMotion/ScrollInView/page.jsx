"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollInView({ children, styles = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", ".66 1"],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const transformYProgress = useTransform(scrollYProgress, [0, 1], [200, 0]);

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
