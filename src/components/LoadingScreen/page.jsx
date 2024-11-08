import styles from "./loadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <svg className={styles.svg} viewBox="0 0 56 56">
          <circle className={styles.circle} cx="28" cy="28" r="26" />
        </svg>
      </div>
    </section>
  );
}
