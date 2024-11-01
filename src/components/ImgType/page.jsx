import Image from "next/image";

//Components
import ScrollinView from "@/components/FramerMotion/ScrollInView/page";
import DynamicImage from "../DynamicImage/page";

//URL
import { BASE_URL } from "@/constants/api";

//Styles
import styles from "./img.module.css";

//Render
export default function ImgType({ data }) {
  return (
    <section className={styles[data.type]}>
      {data.img.map((item, index) => (
        <ScrollinView key={index} styles={styles.parallax}>
          <Image
            src={BASE_URL + item.url}
            alt={item.alt}
            priority
            quality={100}
            width={1280}
            height={1280}
            sizes="(max-width: 1280px)100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* <DynamicImage url={BASE_URL + src} alt={alt} /> */}
        </ScrollinView>
      ))}
    </section>
  );
}
