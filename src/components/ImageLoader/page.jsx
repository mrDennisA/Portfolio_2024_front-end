import ImageDynamic from "../ImageDynamic/page";
import getImage from "@/util/getImage";

// Render
export default async function ImageLoader({ src, alt = "", styles = "", priority }) {
  const { base64, img } = await getImage(src);

  return <ImageDynamic data={{ src, alt, base64, img, styles, priority }} />;
}
