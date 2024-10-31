"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimationInView({ children, styles = "", index = 0 }) {
  const stagger = 0.2;
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: stagger * index, type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div className={styles} variants={fadeInAnimationVariants} initial="initial" animate="animate" viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}

export function PerantInView({ children, styles = "" }) {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <motion.div className={styles} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: " 0% 0px -200px 0px" }}>
      {children}
    </motion.div>
  );
}

export function ChildrenInView({ children, styles = "" }) {
  const item = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div className={styles} variants={item}>
      {children}
    </motion.div>
  );
}
