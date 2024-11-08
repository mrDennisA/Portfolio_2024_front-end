"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageDynamic({ data, styles = "", loading = "lazy" }) {
  const [isImageLoading, setImageLoading] = useState(false);

  const { url, alt, width, height, base64, color } = data;

  return (
    <Image
      className={styles}
      src={url}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      // placeholder="blur"
      // blurDataURL={base64}
      sizes="(max-width: 1280px)100vw"
      // style={{ width: "100%", height: "100%", objectFit: "cover" }}
      // style={{ width: "100%", height: "100%", objectFit: "cover", filter: isImageLoading ? "blur(0px)" : "blur(4px)", transition: "filter 0.3s ease" }}
      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: isImageLoading ? 1 : 0, transition: "opacity 0.3s ease" }}
      onLoad={() => setImageLoading(true)}
    />
  );
}
