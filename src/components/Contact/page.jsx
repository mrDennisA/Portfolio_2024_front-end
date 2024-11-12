"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

//Styles
import styles from "./contact.module.css";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default function Contact({ data }) {
  const ref = useRef();
  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.5"],
  });

  const { scrollYProgress: scrollYProgressLink } = useScroll({
    target: ref,
    offset: ["start 0.5", "start 0"],
  });

  const words = data.description.split(" ");

  return (
    <section className={styles.section}>
      <div ref={ref} className="quote">
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <Word key={index} progress={scrollYProgressText} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
      <div className={styles.contactLink}>
        {data.links.map((item, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Link key={index} className={styles.link} href={item.url}>
              <span className={styles.shadow}>{item.title}</span>
              <motion.span className={styles.span} style={{ opacity: useTransform(scrollYProgressLink, [start, end], [0, 1]) }}>
                {item.title}
              </motion.span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
