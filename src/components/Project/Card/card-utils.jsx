"use client";

import { motion } from "framer-motion";

//Componets
import { colorBG } from "@/utils/theme";
import { useState } from "react";
import { ModalToggle } from "@/utils/modal";

export function MouseHover({ children, index, color, ...props }) {
  const [toggle, setToggle] = useState({ active: false, index: 0 });

  const handleMouseEnter = (e) => {
    const body = document.querySelector("body");
    const bannerMask = document.getElementById("bannerMask");

    // setToggle(() => ({ active: true, index }));
    body.style.backgroundColor = color;
    bannerMask.style.fill = color;
  };

  const handleMouseLeave = (e) => {
    const body = document.querySelector("body");
    const bannerMask = document.getElementById("bannerMask");

    // setToggle(() => ({ active: false, index }));
    body.style.backgroundColor = colorBG;
    bannerMask.style.fill = colorBG;
  };

  return (
    <ModalToggle toggle={toggle}>
      <motion.div
        {...props}
        whileHover={{ padding: "1rem 0", transition: { type: "spring" } }}
        onHoverStart={handleMouseEnter}
        onHoverEnd={handleMouseLeave}
        onMouseEnter={() => setToggle({ active: true, index })}
        onMouseMove={() => setToggle({ active: true, index })}
        onMouseLeave={() => setToggle({ active: false, index })}
      >
        {children}
      </motion.div>
    </ModalToggle>
  );
}
