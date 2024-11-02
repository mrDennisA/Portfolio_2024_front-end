import Image from "next/image";

import getImage from "@/util/getImage";

export default async function ImageLoader({ src, alt = "", styles = "" }) {
  const { base64, img } = await getImage(src);

  return (
    <Image
      className={styles}
      src={src}
      alt={alt}
      // placeholder="blur"
      // blurDataURL={base64}
      // width={img.width}
      // height={img.height}
      fill
      quality={100}
      sizes="(max-width: 1280px)100vw"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
