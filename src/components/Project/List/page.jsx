// Component
import Card from "../Card/page";

// Styles
import styles from "./list.module.css";

// Render
export default function ProjectList({ data }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Works</h3>
      <div className={styles.container}>
        {data.map((item, index) => {
          return <Card key={index} index={index} data={item} />;
        })}
      </div>
    </section>
  );
}
