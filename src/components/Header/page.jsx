"use client";

import { useRouter, usePathname } from "next/navigation";

// Styles
import styles from "./header.module.css";

//Components
import * as Icon from "@/components/Icons/page";
import { TransitionBack } from "@/components/TransitionLink/page";

export default function Header() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {pathname != "/" && (
          <TransitionBack className={styles.back} href="">
            <Icon.Arrow />
          </TransitionBack>
        )}
      </div>
    </header>
  );
}
