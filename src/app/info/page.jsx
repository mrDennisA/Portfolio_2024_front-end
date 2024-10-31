import Link from "next/link";

// Styles
import styles from "./info.module.css";

// Components
import { ThemeToggle } from "@/contexts/themeContext";
import Banner from "@/components/Banner/page";
import Paragraph from "@/components/Text/Paragraph/page";

// API
import { INFO_URL } from "@/constants/api";

// GetData
async function getData() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch(INFO_URL, { next: { revalidate: 0 } });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

//Render
export default async function Info() {
  const data = await getData();

  const List = ({ data, theme = "" }) => {
    return (
      <section className={styles.listContainer + " " + theme}>
        <h3 className="h2">{data.title}</h3>
        <div className={styles.listPosition}>
          <div></div>
          <div className={styles.listItem}>
            {data.list.map((item, index) => {
              return (
                <ul key={index}>
                  {item.map((skill, index) => {
                    return (
                      <li key={index} className={styles.dash}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  const Table = ({ data, theme = "" }) => {
    return (
      <section className={styles.listContainer + " " + theme}>
        <h3 className="h2">{data.title}</h3>
        <table className={styles.table}>
          <tbody className={styles.tableBody}>
            {data.list
              .slice(0)
              .reverse()
              .map((item, index) => {
                return (
                  <tr key={index} className={styles.tableRow}>
                    <td className={styles.tableCell}>
                      <span>{item.fromDate}</span>
                      <span>{" - "}</span>
                      <span>{item.toDate}</span>
                    </td>
                    <td className={styles.tableCell}>
                      <span>{item.title}</span>
                      <h4>{item.description}</h4>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    );
  };

  return (
    <>
      {/* <ThemeToggle data={data.colorBG}> */}
      <Banner img={data.imgBanner} title={data.title} client={data.client} />
      <section className={styles.container}>
        <div>
          <h2>{data.detail.title}</h2>
          <Paragraph data={data.detail.description} />
        </div>
        <div className={styles.contactContainer}>
          <h2>{data.contact.description}</h2>
          <div className={styles.contactLink}>
            {data.contact.links.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <List data={data.expertise} theme="themeLight" />
      <Table data={data.experience} />
      <Table data={data.education} theme="themeLight" />
      {/* </ThemeToggle> */}
    </>
  );
}
