//Components
import Introduction from "@/components/Introduction/page";
import ScrollinView from "@/components/FramerMotion/ScrollInView/page";
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
              <ScrollinView key={index2} styles={styles.parallax}>
                <ImageLoader data={img} />
              </ScrollinView>
            ))}
          </section>
        )
      )}
    </>
  );
}
