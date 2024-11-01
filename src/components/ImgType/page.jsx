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
  const ImgProp = ({ src, alt }) => {
    return (
      <ScrollinView styles={styles.parallax}>
        <DynamicImage url={BASE_URL + src} alt={alt} />
      </ScrollinView>
    );
  };

  if (data.type === "single") {
    return (
      <section className={styles.single}>
        {data.img.map((item, index) => (
          <ImgProp key={index} src={item.url} alt={item.alt} />
        ))}
      </section>
    );
  }

  if (data.type === "list") {
    return (
      <section className={styles.list}>
        {data.img.map((item, index) => (
          <ImgProp key={index} src={item.url} alt={item.alt} />
        ))}
      </section>
    );
  }

  if (data.type === "grid") {
    return (
      <section className={styles.grid}>
        {data.img.map((item, index) => (
          <ImgProp key={index} src={item.url} alt={item.alt} />
        ))}
      </section>
    );
  }
}
