"use client";

import { motion } from "framer-motion";

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
    <motion.div className={styles} variants={fadeInAnimationVariants} initial="initial" animate="animate" viewport={{ once: true, amount: 0 }}>
      {children}
    </motion.div>
  );
}
