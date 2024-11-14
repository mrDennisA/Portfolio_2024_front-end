"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

//Util
import { LenisContext } from "@/utils/lenis";

export const TransitionLink = ({ children, href = "", color, ...props }) => {
  const router = useRouter();
  const lenis = useContext(LenisContext);

  const handleTransition = async (e) => {
    e.preventDefault();

    lenis.stop();
    router.push(href);
    lenis.start();
  };

  return (
    <Link {...props} href={href} onMouseDown={handleTransition} prefetch={true}>
      {children}
    </Link>
  );
};

export const TransitionBack = ({ children, href = "", ...props }) => {
  const router = useRouter();
  const lenis = useContext(LenisContext);

  const handleTransition = async (e) => {
    e.preventDefault();

    lenis.stop();
    router.back();
    lenis.start();
  };

  return (
    <Link {...props} href={href} onMouseDown={handleTransition}>
      {children}
    </Link>
  );
};
