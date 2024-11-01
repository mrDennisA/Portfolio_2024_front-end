"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

import { AppContext } from "@/contexts/context";

// Time
const time = 150;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();
  const lenis = useContext(AppContext);

  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");
    await sleep(time);
    lenis.stop();

    router.push(href);

    lenis.start();
    await sleep(time);
    body?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export const TransitionBack = ({ children, href, ...props }) => {
  const router = useRouter();
  const lenis = useContext(AppContext);

  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");
    await sleep(time);
    lenis.stop();

    router.back();

    lenis.start();
    await sleep(time);
    body?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
