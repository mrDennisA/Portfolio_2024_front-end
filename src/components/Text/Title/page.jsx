"use client";

import { motion } from "framer-motion";

//Styles
import styles from "./title.module.css";

export default function Title({ data }) {
  const { client, title, color } = data;

  const clientPerantVariants = {
    initial: { opacity: 0 },
    animate: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const titlePerantVariants = {
    initial: { opacity: 0 },
    animate: (i = 2) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const childVariants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const clientWords = client.split(" ");
  const titleWords = title.split(" ");

  return (
    <div className={styles.title} style={{ color: `${color}` }}>
      <motion.div className={styles.words} variants={clientPerantVariants} initial="initial" animate="animate">
        {clientWords.map((word, index) => {
          return (
            <motion.span key={index} className={styles.client} variants={childVariants} style={{ marginRight: "0.5rem" }}>
              {word}
            </motion.span>
          );
        })}
      </motion.div>
      <motion.h1 className={styles.words} variants={titlePerantVariants} initial="initial" animate="animate">
        {titleWords.map((word, index) => {
          return (
            <motion.span key={index} variants={childVariants} style={{ marginRight: "0.5rem" }}>
              {word}
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
}
