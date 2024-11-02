import { getPlaiceholder } from "plaiceholder";

export default async function getImage(src) {
  try {
    const res = await fetch(src);
    const buffer = await res.arrayBuffer();
    const {
      base64,
      metadata: { height, width },
    } = await getPlaiceholder(Buffer.from(buffer));

    return { base64, img: { src, height, width } };
  } catch (error) {
    console.log(error);
  }
  return <div>getImage</div>;
}
