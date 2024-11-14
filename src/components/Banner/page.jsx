//Components
import Parallax from "./parallax";
import ImageLoader from "@/components/ImageLoader/page";
import Title from "./title";

// Styles
import styles from "./banner.module.css";
import Foreground from "./foreground";

//Render
export default function Banner({ data, type }) {
  return (
    <section>
      <div className={styles.container}>
        <Parallax type="background">
          <ImageLoader data={data.imgBanner[0]} type={type} loading={"eager"} />
        </Parallax>
        <Parallax type="text" className={styles.parallax}>
          <Title data={data} />
        </Parallax>
        {type === "home" && <Foreground className={styles.img} color={data.colorBG} />}
      </div>
    </section>
  );
}
