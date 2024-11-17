import Image from "next/image";

import { motion } from "framer-motion";

// Utils
import useMouse from "@/utils/useMouse";

import styles from "./modal.module.css";

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
              style={{ opacity: index === modal_index ? 1 : 0, transition: "opacity .3s ease" }}
              src={item.imgCard.url}
              width={400}
              height={400}
              alt="image"
            />
          </div>
        );
      })}
      {/* </div> */}
    </motion.div>
  );
}
