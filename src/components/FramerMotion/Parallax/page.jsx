"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children, type = null, styles }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundYProgress = useTransform(scrollYProgress, [0, 1], ["0", "50%"]);
  const textYProgress = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  if (type === "background") {
    return (
      <motion.div ref={ref} className={styles} style={{ y: backgroundYProgress }}>
        {children}
      </motion.div>
    );
  }

  if (type === "text") {
    return (
      <motion.div ref={ref} className={styles} style={{ y: textYProgress }}>
        {children}
      </motion.div>
    );
  }
}

export function ParallaxCard({ children, styles }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    console.log(ref.current);
  }, []);

  const backgroundYProgress = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  return (
    <motion.div ref={ref} className={styles} style={{ x: backgroundYProgress }}>
      {children}
    </motion.div>
  );
}
