import ImageDynamic from "../ImageDynamic/page";
import getImage from "@/util/getImage";

// Render
export default async function ImageLoader({ data, styles, loading }) {
  const { url, alt } = data;
  const { base64, color, width, height } = await getImage(url);

  return <ImageDynamic data={{ url, alt, width, height, base64, color }} styles={styles} loading={loading} />;
}
