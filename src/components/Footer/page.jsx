import Link from "next/link";

//Styles
import styles from "./footer.module.css";

//Components
import * as Icon from "@/components/Icons/page";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="mailto: dennis.alekseev@gmail.com">
        <Icon.Mail />
      </Link>
      <Link href="https://www.linkedin.com/in/dennis-alekseev/" target="_blank">
        <Icon.LinkedIn />
      </Link>
      <Link href="https://github.com/mrDennisA" target="_blank">
        <Icon.Github />
      </Link>
    </footer>
  );
}
