//Components
import Introduction from "@/components/Introduction/page";
import { ScrollInView } from "@/components/FramerMotion/ScrollInView/page";
import ImageLoader from "@/components/ImageLoader/page";

//Styles
import styles from "./detail.module.css";

// Render
export default function Detail({ data }) {
  // console.log(data);

  return (
    <>
      {data.map((item, index) =>
        item.name === "text" ? (
          <Introduction key={index} data={item} />
        ) : (
          <section key={index} className={styles[item.type]}>
            {item.img.map((img, index2) => (
              // <ScrollInView key={index2}>
              <ImageLoader key={index2} data={img} />
              // </ScrollInView>
            ))}
          </section>
        )
      )}
    </>
  );
}
