// Styles
import ScrollInView from "../FramerMotion/ScrollInView/page";
import styles from "./info.module.css";

//Render
export default function Info({ data }) {
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
      <ScrollInView>
        <List data={data.expertise} />
      </ScrollInView>
      <ScrollInView>
        <Table data={data.experience} theme="themeLight" />
      </ScrollInView>
      <ScrollInView>
        <Table data={data.education} />
      </ScrollInView>
    </>
  );
}
