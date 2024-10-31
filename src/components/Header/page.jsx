"use client";

import { useRouter, usePathname } from "next/navigation";

// Styles
import styles from "./header.module.css";

//Components
import * as Icon from "@/components/Icons/page";
import { TransitionBack } from "@/utils/TransitionLink";

export default function Header() {
  const pathname = usePathname();
  // console.log(pathname);

  // If Everything else
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
