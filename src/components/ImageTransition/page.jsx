"use client";

import Image from "next/image";
import { useState } from "react";

// Image Transition
export default function ImageTransition({ data, loading, transition = false, ...props }) {
  const [imgLoading, setImgLoading] = useState(true);
  const { url, alt, width, height } = data;

  return (
    <Image
      {...props}
      src={url}
      alt={alt}
      width={width}
      height={height}
      quality={85}
      loading={loading}
      sizes="(max-width: 1280px)100vw"
      style={
        transition
          ? {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: imgLoading ? 0 : 1,
              transform: imgLoading ? "rotate(2deg) scale(1.1)" : "rotate(0) scale(1)",
              transition: "2s ease .6s",
            }
          : { width: "100%", height: "100%", objectFit: "cover" }
      }
      onLoad={() => setImgLoading(false)}
    />
  );
}
