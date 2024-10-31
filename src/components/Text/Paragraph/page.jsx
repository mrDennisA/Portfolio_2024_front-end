"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

//Styles
import styles from "./paragraph.module.css";

export default function Paragraph({ data }) {
  // const names =
  //   "I have held several different roles in a variety of environments, designing for a wide range of mediums including 'web and UX design, 3D visualization, product design, print, photography, animation, advertising, social media, and digital marketing.'";

  // console.log(names);

  // const re = /'(.*?)'/;
  // const nameList = names.split(re).filter((e) => e);

  // console.log(nameList);

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
