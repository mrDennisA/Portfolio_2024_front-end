import { getPlaiceholder } from "plaiceholder";

import { BASE_URL } from "@/constants/api";

//Get Plaiceholder
export default async function getImage(url) {
  try {
    const res = await fetch(BASE_URL + url);
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
