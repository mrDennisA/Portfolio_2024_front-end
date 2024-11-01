import Image from "next/image";

//Components
import { TransitionLink } from "@/components/TransitionLink/page";
import { ParallaxCard } from "@/components/FramerMotion/Parallax/page";
import DynamicImage from "@/components/DynamicImage/page";

//URL
import { BASE_URL } from "@/constants/api";

// Styles
import styles from "./card.module.css";

// Render
export default function Card({ data }) {
  const slug = data.slugClient + "/" + data.slugTitle;

  return (
    <div className={styles.container}>
      <TransitionLink href={"/project/" + slug}>
        <div className={styles.img}>
          <DynamicImage url={BASE_URL + data.imgCard.url} alt={data.imgCard.alt} />
        </div>

        {/* <div className={styles.description}>
            <div className={styles.client}>{data.client}</div>
            <h3>
              {data.title.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h3>
          </div> */}
      </TransitionLink>
    </div>
  );
}
