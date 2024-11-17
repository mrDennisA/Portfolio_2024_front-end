import Image from "next/image";

import { motion } from "framer-motion";

// Utils
import useMouse from "@/utils/useMouse";

import styles from "./modal.module.css";
import { lazy } from "react";

export function Modal({ modal, projects }) {
  const { active, index } = modal;

  const { x, y } = useMouse();

  const animation = {
    initial: { opacity: 0, x: x - 112.5, y: y - 200, transition: { opacity: { duration: 0.3 }, duration: 0.15 } },
    enter: { opacity: 1, x: x - 112.5, y: y - 200, transition: { opacity: { duration: 0.3 }, duration: 0.15, type: "tween" } },
    closed: { opacity: 0, x: x - 112.5, y: y - 200, transition: { opacity: { duration: 0.3 }, duration: 0.15 } },
  };

  return (
    <motion.div className={styles.modalContainer} variants={animation} initial="initial" animate={active ? "enter" : "closed"}>
      {/* <div className={styles.modalSlider}> */}

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
      {/* </div> */}
    </motion.div>
  );
}
