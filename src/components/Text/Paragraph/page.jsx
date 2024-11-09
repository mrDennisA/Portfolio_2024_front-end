"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

//Styles
import styles from "./paragraph.module.css";

export default function Paragraph({ data }) {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
