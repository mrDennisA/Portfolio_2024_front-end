"use client";

import Image from "next/image";
import { useState } from "react";

// Image Transition
export default function ImageTransition({ data, loading, transition = null, ...props }) {
  const [imgLoading, setImgLoading] = useState(true);
  const [styles, setStyles] = useState({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  });

  const { url, alt, width, height } = data;

  const styles = () => {
    if (transition === "home") {
      return {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: imgLoading ? 0 : 1,
        transition: "opacity 2s ease 0.3s",
      };
    }

    if (transition === "project") {
      return {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: imgLoading ? 0 : 1,
        transform: imgLoading ? "rotate(2deg) scale(1.1)" : "rotate(0) scale(1)",
        transition: "transform 2s ease 0.3s, opacity 2s ease 0.3s",
      };
    }

    return {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };
  };

  // if (transition === "home") {
  //   return (
  //     <Image
  //       {...props}
  //       src={url}
  //       alt={alt}
  //       width={width}
  //       height={height}
  //       quality={85}
  //       loading={loading}
  //       sizes="(max-width: 1280px)100vw"
  //       style={{
  //         width: "100%",
  //         height: "100%",
  //         objectFit: "cover",
  //         opacity: imgLoading ? 0 : 1,
  //         transition: "opacity 2s ease 0.3s",
  //       }}
  //       onLoad={() => setImgLoading(false)}
  //     />
  //   );
  // }

  // if (transition === "project") {
  //   return (
  //     <Image
  //       {...props}
  //       src={url}
  //       alt={alt}
  //       width={width}
  //       height={height}
  //       quality={85}
  //       loading={loading}
  //       sizes="(max-width: 1280px)100vw"
  //       style={{
  //         width: "100%",
  //         height: "100%",
  //         objectFit: "cover",
  //         opacity: imgLoading ? 0 : 1,
  //         transform: imgLoading ? "rotate(2deg) scale(1.1)" : "rotate(0) scale(1)",
  //         transition: "transform 2s ease 0.3s, opacity 2s ease 0.3s",
  //       }}
  //       onLoad={() => setImgLoading(false)}
  //     />
  //   );
  // }

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
      style={styles}
      onLoad={() => setImgLoading(false)}
    />
  );
}
