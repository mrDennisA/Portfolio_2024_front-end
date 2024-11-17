import Image from "next/image";

import { motion } from "framer-motion";

// Utils
import useMouse from "@/utils/useMouse";

import styles from "./modal.module.css";
import { lazy } from "react";

export function Modal({ modal, projects }) {
  const { active, index } = modal;

  const { x, y } = useMouse();

  const image = {
    initial: { opacity: 0, x: x - 112.5, y: y - 200, transition: { opacity: { duration: 0.3 }, duration: 0.08 } },
    enter: { opacity: 1, x: x - 112.5, y: y - 200, transition: { opacity: { duration: 0.3 }, duration: 0.08, type: "tween" } },
    closed: { opacity: 0, x: x - 112.5, y: y - 200, transition: { opacity: { duration: 0.3 }, duration: 0.08 } },
  };

  const cursor = {
    initial: { opacity: 0, x: x - 32, y: y - 32, transition: { opacity: { duration: 0.2 }, duration: 0.04 } },
    enter: { opacity: 1, x: x - 32, y: y - 32, transition: { opacity: { duration: 0.2 }, duration: 0.04, type: "tween" } },
    closed: { opacity: 0, x: x - 32, y: y - 32, transition: { opacity: { duration: 0.2 }, duration: 0.04 } },
  };

  const cursorLabel = {
    initial: { opacity: 0, x: x - 32, y: y - 32, transition: { opacity: { duration: 0.1 }, duration: 0.02 } },
    enter: { opacity: 1, x: x - 32, y: y - 32, transition: { opacity: { duration: 0.1 }, duration: 0.02, type: "tween" } },
    closed: { opacity: 0, x: x - 32, y: y - 32, transition: { opacity: { duration: 0.1 }, duration: 0.02 } },
  };

  return (
    <>
      <div>
        <motion.div className={styles.modalContainer} variants={image} initial="initial" animate={active ? "enter" : "closed"}>
          {projects.map((item, modal_index) => {
            return (
              <div key={modal_index} className={styles.modal} style={{ backgroundColor: item.colorBG }}>
                <Image
                  src={item.imgCard.url}
                  alt={item.imgCard.alt}
                  width={540}
                  height={540}
                  quality={85}
                  loading="lazy"
                  sizes="(max-width: 540px)100vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: index === modal_index ? 1 : 0, transition: "opacity .3s ease" }}
                />
              </div>
            );
          })}
        </motion.div>
        <motion.div className={styles.cursor} variants={cursor} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div className={styles.cursorLabel} variants={cursorLabel} initial="initial" animate={active ? "enter" : "closed"}>
          view
        </motion.div>
      </div>
    </>
  );
}
