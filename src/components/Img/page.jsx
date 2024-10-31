import Image from "next/image";

//Components
import ScrollinView from "@/components/FramerMotion/ScrollInView/page";

//Styles
import styles from "./img.module.css";

//Render
export default function Img({ data }) {
  const ImgProp = ({ src, alt }) => {
    return (
      <ScrollinView styles={styles.parallax}>
        <Image src={src} alt={alt} quality={100} width={1200} height={1200} sizes="(max-width: 1200px)100vw" style={{ width: "100%", height: "auto" }} />
      </ScrollinView>
    );
  };

  if (data.type === "single") {
    return (
      <section className={styles.container}>
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
