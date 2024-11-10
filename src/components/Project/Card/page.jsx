import Image from "next/image";

//Components
import { TransitionLink } from "@/components/TransitionLink/page";

//URL

// Styles
import styles from "./card.module.css";
import ImageLoader from "@/components/ImageLoader/page";
import { ArrowSmall } from "@/components/Icons/page";

// Render
export default async function Card({ data }) {
  const slug = data.slugClient + "/" + data.slugTitle;
  // console.log(data.colorBG);

  return (
    <TransitionLink className={styles.container} href={"/project/" + slug}>
      <div className={styles.imgContainer}>
        <ImageLoader data={data.imgCard} />
      </div>
      <div className={styles.description}>
        <div className={styles.clientContainer}>
          <span className={styles.client}>{data.client}</span>
          {/* <span className={styles.arrow}>
            <ArrowSmall />
          </span> */}
        </div>
        <h3 className={styles.title}>{data.title}</h3>
      </div>
    </TransitionLink>
  );
}
