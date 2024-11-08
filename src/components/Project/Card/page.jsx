import Image from "next/image";

//Components
import { TransitionLink } from "@/components/TransitionLink/page";

//URL
import { BASE_URL } from "@/constants/api";

// Styles
import styles from "./card.module.css";
import TextInView from "@/components/FramerMotion/TextInView/page";
import ImageLoader from "@/components/ImageLoader/page";

// Render
export default async function Card({ data }) {
  const slug = data.slugClient + "/" + data.slugTitle;

  return (
    <div className={styles.container}>
      <TransitionLink href={"/project/" + slug}>
        <div className={styles.imgContainer}>
          <ImageLoader data={data.imgCard} />
        </div>
        {/* <TextInView styles={styles.description} color={data.colorBG}> */}
        <div className={styles.description}>
          <span className={styles.client}>{data.client}</span>
          <h3 className={styles.title}>{data.title}</h3>
        </div>
        {/* </TextInView> */}
      </TransitionLink>
    </div>
  );
}
