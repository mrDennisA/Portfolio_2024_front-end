"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

//Styles
import styles from "./scrollHorizontal.module.css";

export default function ScrollHorizontal({ children }) {
  const targetRef = useRef(null);
  const parentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [parentWidth, setParentWidth] = useState(0);
  const [childWidth, setChildWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setParentWidth(() => parentRef.current.clientWidth - targetRef.current.clientWidth);
      setChildWidth(() => parentRef.current.firstChild.clientWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [targetRef, parentRef, childWidth]);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${parentWidth}px`]);
  const padding = `0 calc(50vw - (${childWidth}px / 2))`;

  return (
    <section ref={targetRef} className={styles.section}>
      <div className={styles.sticky}>
        <motion.div ref={parentRef} className={styles.container} style={{ x, padding: padding }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
