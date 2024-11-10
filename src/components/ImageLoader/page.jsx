import Image from "next/image";

import getImage from "@/util/getImage";
import ImageAnimate from "../ImageAnimate/page";

// Render
export default async function ImageLoader({ data, loading, transition, ...props }) {
  const { url, alt } = data;
  const { base64, color, width, height } = await getImage(url);

  return <ImageAnimate {...props} data={{ url, alt, width, height }} transition={transition} loading={loading} />;
}
