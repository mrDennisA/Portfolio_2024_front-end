//Components
import { MouseHover } from "./card-utils";
import { TransitionLink } from "@/components/TransitionLink/page";

// Styles
import styles from "./card.module.css";

// Render
export default function Card({ index, data }) {
  const slug = data.slugClient + "/" + data.slugTitle;
  const number = index + 1;

  return (
    <>
      <TransitionLink href={"/project/" + slug} color={data.colorBG}>
        <MouseHover className={styles.container} color={data.colorBG}>
          <div className={styles.number}>{number.toString().padStart(2, "0")}</div>
          <div className={styles.description}>
            <div className={`h2 ${styles.client}`}>{data.client}</div>
            <h4 className={styles.title}>{data.title}</h4>
          </div>
          <div className={styles.service}>
            {data.detail[0].service.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </MouseHover>
      </TransitionLink>
    </>
  );
}
