import Image from "next/image";

import getImage from "@/util/getImage";

// Render
export default async function ImageLoader({ data, loading, ...props }) {
  const { url, alt } = data;
  const { base64, color, width, height } = await getImage(url);

  return (
    <Image
      {...props}
      src={url}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      quality={85}
      sizes="(max-width: 1280px)100vw"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
