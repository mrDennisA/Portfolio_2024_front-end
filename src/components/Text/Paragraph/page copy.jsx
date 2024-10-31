//Styles
import styles from "./paragraph.module.css";

export default function Paragraph({ data }) {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
