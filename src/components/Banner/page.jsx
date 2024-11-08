//Components
import Parallax from "@/components/FramerMotion/Parallax/page";
import Title from "@/components/Text/Title/page";

// Styles
import styles from "./banner.module.css";
import ImageDynamic from "../ImageDynamic/page";

export default function Banner({ data }) {
  const { imgBanner, color, title, client } = data;

  return (
    <section className={styles.container}>
      <Parallax type="background" styles={styles.parallax}>
        <ImageDynamic data={imgBanner[0]} loading={"eager"} />
      </Parallax>
      <Parallax type="text" styles={styles.parallax}>
        <Title client={client} title={title} color={color} />
      </Parallax>
      {imgBanner[1] && <ImageDynamic styles={styles.img} data={imgBanner[1]} loading={"eager"} />}
    </section>
  );
}
