import Image from "next/image";

//Components
import { TransitionLink } from "@/components/TransitionLink/page";

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
