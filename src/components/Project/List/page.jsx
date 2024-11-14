// Component

import Card from "../Card/page";

// Styles
import styles from "./list.module.css";

// API
import { PROJECTS_URL } from "@/constants/api";
import { revalidate } from "@/utils/revalidate";

// // GetData
// async function getData() {
//   try {
//     const res = await fetch(PROJECTS_URL, { next: { revalidate: revalidate } });
//     const data = await res.json();

//     return data.reverse();
//   } catch (error) {
//     console.log(error);
//   }
// }

// Render
export default async function ProjectList({ data }) {
  // const projects = await getData();

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Works</h3>
      {/* <ScrollHorizontal> */}
      <div className={styles.container}>
        {data.map((item, index) => {
          return <Card key={index} index={index} data={item} />;
        })}
      </div>
      {/* </ScrollHorizontal> */}
    </section>
  );
}
