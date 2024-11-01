import Image from "next/image";

import { getImage } from "@/utils/getImage";

export default async function DynamicImage({ url, alt = "", styles = "" }) {
  const { base64, img } = await getImage(url);
  return (
    <Image
      className={styles}
      {...img}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
      priority
      quality={100}
      sizes="(max-width: 1280px)100vw"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
