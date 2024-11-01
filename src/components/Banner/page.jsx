import Image from "next/image";

//Components
import Parallax from "../FramerMotion/Parallax/page";
import Title from "../Text/Title/page";
import DynamicImage from "../DynamicImage/page";

//URL
import { BASE_URL } from "@/constants/api";

// Styles
import styles from "./banner.module.css";

export default function Banner({ data }) {
  const { imgBanner, color, title, client } = data;

  return (
    <section className={styles.container}>
      <Parallax type="background" styles={styles.parallax}>
        <DynamicImage url={BASE_URL + imgBanner[0].url} alt={imgBanner[0].alt} />
      </Parallax>
      <Parallax type="text" styles={styles.parallax}>
        <Title client={client} title={title} color={color} />
      </Parallax>
      {imgBanner[1] && <DynamicImage styles={styles.img} url={BASE_URL + imgBanner[1].url} alt={imgBanner[1].alt} />}
    </section>
  );
}
