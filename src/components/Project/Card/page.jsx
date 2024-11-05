import Image from "next/image";

//Components
import { TransitionLink } from "@/components/TransitionLink/page";

//URL
import { BASE_URL } from "@/constants/api";

// Styles
import styles from "./card.module.css";
import TextInView from "@/components/FramerMotion/TextInView/page";

// Render
export default function Card({ data }) {
  const slug = data.slugClient + "/" + data.slugTitle;

  return (
    <div className={styles.container}>
      <TransitionLink href={"/project/" + slug}>
        <div className={styles.imgContainer}>
          <Image
            src={BASE_URL + data.imgCard.url}
            alt={data.imgCard.alt}
            fill
            priority
            quality={100}
            sizes="(max-width: 1280px)100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <TextInView styles={styles.description} color={data.colorBG}>
          {/* <div className={styles.description} style={{ backgroundColor: data.colorBG }}> */}
          <span className={styles.client}>{data.client}</span>
          <h3 className={styles.title}>{data.title}</h3>
          {/* </div> */}
        </TextInView>
      </TransitionLink>
    </div>
  );
}
