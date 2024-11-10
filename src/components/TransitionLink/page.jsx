"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

//Contexts
import { AppContext } from "@/context/context";
import wait from "@/utils/wait";

//Util

// Time
const time = 150;

export const TransitionLink = ({ children, href = "", color, ...props }) => {
  const router = useRouter();
  const lenis = useContext(AppContext);

  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");
    // body.style.backgroundColor = color;
    // body?.classList.add("page-transition");
    // await wait(time);

    lenis.stop();
    router.push(href);
    lenis.start();

    body.style.backgroundColor = color;
    // await wait(time);
    // body?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onMouseDown={handleTransition} prefetch={true}>
      {children}
    </Link>
  );
};

export const TransitionBack = ({ children, href = "", ...props }) => {
  const router = useRouter();
  const lenis = useContext(AppContext);

  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body.style.backgroundColor = "";
    // const body = document.querySelector("body");
    // body?.classList.add("page-transition");
    // await wait(time);

    lenis.stop();
    router.back();
    lenis.start();

    // await wait(time);
    // body?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onMouseDown={handleTransition}>
      {children}
    </Link>
  );
};
