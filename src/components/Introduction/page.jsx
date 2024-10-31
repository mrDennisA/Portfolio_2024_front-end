//Components
import Paragraph from "../Text/Paragraph/page";

//Styles
import styles from "./introduction.module.css";

export default function Introduction({ data }) {
  return (
    <section className={styles.section}>
      <h2>{data.title}</h2>
      <Paragraph data={data.description} />
    </section>
  );
}
