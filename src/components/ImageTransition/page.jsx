"use client";

import Image from "next/image";
import { useState } from "react";

// Image Transition
export default function ImageTransition({ data, loading, type = "img", ...props }) {
  const [imgLoading, setImgLoading] = useState(true);
  const { url, alt, width, height } = data;

  const styleImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: imgLoading ? 0 : 1,
    transition: "opacity .3s ease",
  };

  const styleHome = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: imgLoading ? 0 : 1,
    transition: "opacity 2s ease 0.3s",
  };

  const styleProject = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: imgLoading ? 0 : 1,
    transform: imgLoading ? "rotate(2deg) scale(1.1)" : "rotate(0) scale(1)",
    transition: "transform 2s ease 0.3s, opacity 2s ease 0.3s",
  };

  return (
    <Image
      {...props}
      src={url}
      alt={alt}
      width={width}
      height={height}
      quality={100}
      loading={loading}
      sizes="(max-width: 1280px)100vw"
      style={(type === "img" && styleImg) || (type === "home" && styleHome) || (type === "project" && styleProject)}
      onLoad={() => setImgLoading(false)}
    />
  );
}
