import wait from "@/util/wait";
import styles from "./loadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>loading...</h1>
      </div>
    </section>
  );
}
