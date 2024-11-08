import { getPlaiceholder } from "plaiceholder";

//Get Plaiceholder
export default async function getImage(url) {
  try {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    const {
      base64,
      color,
      metadata: { width, height },
    } = await getPlaiceholder(Buffer.from(buffer));

    return { base64, color, width, height };
  } catch (error) {
    console.log(error);
  }
}
