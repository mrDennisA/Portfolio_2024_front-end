//Styles
import styles from "./introduction.module.css";

export default function Introduction({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {data.title && <h2 className={styles.title}>{data.title}</h2>}
        {data.service && (
          <div className={styles.service}>
            {data.service.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </div>
        )}
        <div className={styles.paragraph}>
          {data.description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
