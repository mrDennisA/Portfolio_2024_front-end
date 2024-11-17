//Components
import { MouseHover, WhileHover } from "./card-utils";
import { TransitionLink } from "@/components/TransitionLink/page";

//Componentgs
import ImageLoader from "@/components/ImageLoader/page";

// Styles
import styles from "./card.module.css";

// Render
export default function Card({ index, data }) {
  const slug = data.slugClient + "/" + data.slugTitle;
  const number = index + 1;

  return (
    <>
      <MouseHover className={styles.border} index={index} color={data.colorBG}>
        <TransitionLink className={styles.container} href={"/project/" + slug} color={data.colorBG}>
          <div className={styles.img}>
            <ImageLoader data={data.imgCard} />
            <div className={styles.imgNumber}>{number.toString().padStart(2, "0")}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.number}>{number.toString().padStart(2, "0")}</div>
            <div className={styles.description}>
              <div className={styles.title}>
                <span className={"h2"}>{data.client}</span>
                <h4>{data.title}</h4>
              </div>
              <div className={styles.service}>
                {data.detail[0].service.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </TransitionLink>
      </MouseHover>
    </>
  );
}
