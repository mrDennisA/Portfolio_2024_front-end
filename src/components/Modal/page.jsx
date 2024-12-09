import Image from "next/image";
import { motion } from "framer-motion";

// Utils
import useMouse from "@/utils/useMouse";

//Styles
import styles from "./modal.module.css";

export function Modal({ modal, projects }) {
  const { active, index } = modal;

  const { x, y } = useMouse();

  const imageStats = {
    left: -112.5,
    top: -200,
    transition: { duration: 0.15, x: { duration: 0.05, type: "tween" }, y: { duration: 0.05, type: "tween" } },
  };

  const image = {
    initial: { opacity: 0, x: x, y: y, left: imageStats.left, top: imageStats.top, transition: imageStats.transition },
    enter: { opacity: 1, x: x, y: y, left: imageStats.left, top: imageStats.top, transition: imageStats.transition },
    closed: { opacity: 0, x: x, y: y, left: imageStats.left, top: imageStats.top, transition: imageStats.transition },
  };

  return (
    <>
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
    </>
  );
}
