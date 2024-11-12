import Image from "next/image";

import getImage from "@/utils/getImage";
import ImageTransition from "@/components/ImageTransition/page";

// Render
export default async function ImageLoader({ data, loading, type, ...props }) {
  const { url, alt } = data;
  const { base64, color, width, height } = await getImage(url);

  return <ImageTransition {...props} data={{ url, alt, width, height }} type={type} loading={loading} />;
}
