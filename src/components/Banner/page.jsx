import Image from "next/image";

//Components
import Parallax from "../FramerMotion/Parallax/page";
import Title from "../Text/Title/page";

// Styles
import styles from "./banner.module.css";

export default function Banner({ img, color = "", title, client }) {
  return (
    <section className={styles.container}>
      <Parallax type="background" styles={styles.parallax}>
        <Image
          src={img[0].url}
          blurDataURL={img[0].blurUrl}
          alt={img[0].alt}
          priority
          placeholder="blur"
          quality={100}
          fill
          sizes="(max-width: 1200px)100vw"
          style={{ objectFit: "cover" }}
        />
      </Parallax>
      <Parallax type="text" styles={styles.parallax}>
        <Title client={client} title={title} color={color} />
      </Parallax>
      {img[1] && (
        <Image
          className={styles.img}
          src={img[1].url}
          blurDataURL={img[1].blurUrl}
          alt={img[1].alt}
          priority
          placeholder="blur"
          quality={100}
          fill
          sizes="(max-width: 1200px)100vw"
          style={{ objectFit: "cover" }}
        />
      )}
    </section>
  );
}
