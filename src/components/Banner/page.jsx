//Components
import Parallax from "./parallax";
import ImageLoader from "@/components/ImageLoader/page";
import Title from "@/components/Text/Title/page";

// Styles
import styles from "./banner.module.css";

//Render
export default function Banner({ data, type }) {
  return (
    <section className={styles.container}>
      <Parallax type="background">
        <ImageLoader data={data.imgBanner[0]} type={type} loading={"eager"} />
      </Parallax>
      <Parallax type="text" className={styles.parallax}>
        <Title data={data} />
      </Parallax>
      {data.imgBanner[1] && <ImageLoader className={styles.img} data={data.imgBanner[1]} loading={"eager"} />}
    </section>
  );
}
