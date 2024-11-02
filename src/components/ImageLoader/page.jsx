import Image from "next/image";

import getImage from "@/util/getImage";
import InView from "../FramerMotion/InView/page";

export default async function ImageLoader({ src, alt = "", styles = "" }) {
  const { base64, color, img } = await getImage(src);

  return (
    <InView color={color.hex}>
      <Image
        className={styles}
        src={img.src}
        alt={alt}
        // placeholder="blur"
        // blurDataURL={base64}
        width={img.width}
        height={img.height}
        quality={100}
        sizes="(max-width: 1280px)100vw"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </InView>
  );
}
