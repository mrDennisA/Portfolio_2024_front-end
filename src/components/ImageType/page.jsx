import Image from "next/image";

//Components
import ScrollinView from "@/components/FramerMotion/ScrollInView/page";
import ImageLoader from "../ImageLoader/page";

//Styles
import styles from "./img.module.css";

//Render
export default function ImgType({ data }) {
  return (
    <section className={styles[data.type]}>
      {data.img.map((item, index) => (
        <ScrollinView key={index} styles={styles.parallax}>
          <ImageLoader url={item.url} alt={item.alt} />
        </ScrollinView>
      ))}
    </section>
  );
}
