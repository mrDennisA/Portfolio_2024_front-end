"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageDynamic({ data }) {
  const [isImageLoading, setImageLoading] = useState(false);

  const { src, alt, base64, img, styles, loading = "lazy" } = data;

  return (
    <Image
      className={styles}
      src={src}
      alt={alt}
      // placeholder="blur"
      // blurDataURL={base64}
      width={img.width}
      height={img.height}
      loading={loading}
      // quality={100}
      sizes="(max-width: 1280px)100vw"
      // style={{ width: "100%", height: "100%", objectFit: "cover" }}
      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: isImageLoading ? 1 : 0, transition: "opacity 0.3s ease" }}
      onLoad={() => setImageLoading(true)}
    />
  );
}
