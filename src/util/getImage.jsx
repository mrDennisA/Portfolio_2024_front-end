import { getPlaiceholder } from "plaiceholder";

//Get Plaiceholder
export default async function getImage(src) {
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
