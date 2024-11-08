import ImageDynamic from "../ImageDynamic/page";
import getImage from "@/util/getImage";

// Render
export default async function ImageLoader({ url, alt, styles, loading }) {
  const { base64, color, width, height } = await getImage(url);

  return <ImageDynamic data={{ url, alt, width, height }} styles={styles} loading={loading} />;
}
