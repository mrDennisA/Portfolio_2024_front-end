import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

import ImageDynamic from "../ImageDynamic/page";

//Get Plaiceholder
async function getImage(src) {
  try {
    const res = await fetch(src);
    const buffer = await res.arrayBuffer();
    const {
      base64,
      color,
      metadata: { height, width },
    } = await getPlaiceholder(Buffer.from(buffer));

    return { base64, color, img: { src, height, width } };
  } catch (error) {
    console.log(error);
  }
}

// Render
export default async function ImageLoader({ src, alt = "", styles = "" }) {
  const { base64, img } = await getImage(src);

  return <ImageDynamic data={{ src, alt, base64, img, styles }} />;
}
