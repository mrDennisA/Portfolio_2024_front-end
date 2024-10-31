import Image from "next/image";

// Styles
import styles from "./card.module.css";
import { TransitionLink } from "@/utils/TransitionLink";
import { ParallaxCard } from "@/components/FramerMotion/Parallax/page";

// Render
export default function Card({ data }) {
  const slug = data.slugClient + "/" + data.slugTitle;

  return (
    <div className={styles.container}>
      <TransitionLink href={"/project/" + slug}>
        <ParallaxCard styles={styles.img}>
          <Image
            src={data.imgCard.url}
            blurDataURL={data.imgCard.blurUrl}
            alt={data.imgCard.alt}
            priority
            placeholder="blur"
            quality={100}
            width={1080}
            height={1080}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </ParallaxCard>

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
