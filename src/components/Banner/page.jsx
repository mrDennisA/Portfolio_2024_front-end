//Components
import { Parallax } from "@/components/FramerMotion/Parallax/page";
import Title from "@/components/Text/Title/page";

// Styles
import styles from "./banner.module.css";
import ImageLoader from "../ImageLoader/page";

export default function Banner({ data, transition }) {
  return (
    <section className={styles.container}>
      <Parallax type="background" className={styles.parallax}>
        <ImageLoader data={data.imgBanner[0]} transition={transition} loading={"eager"} />
      </Parallax>
      <Parallax type="text" className={styles.parallax}>
        <Title data={data} />
      </Parallax>
      {data.imgBanner[1] && <ImageLoader className={styles.img} data={data.imgBanner[1]} transition={transition} loading={"eager"} />}
    </section>
  );
}
