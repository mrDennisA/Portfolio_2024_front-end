// Component
import { ChildrenInView, PerantInView } from "@/components/FramerMotion/AnimationInView/page";
import Card from "../Card/page";

// Styles
import styles from "./list.module.css";

// API
import { PROJECTS_URL } from "@/constants/api";
import ScrollinView from "@/components/FramerMotion/ScrollInView/page";
import ScrollHorizontal from "@/components/FramerMotion/ScrollHorizontal/page";

// GetData
async function getData() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch(PROJECTS_URL, { next: { revalidate: 0 } });
    const data = await res.json();

    return data.reverse();
  } catch (error) {
    console.log(error);
  }
}

// Render
export default async function ProjectList() {
  const projects = await getData();

  return (
    <ScrollHorizontal>
      {projects.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
    </ScrollHorizontal>
  );
}
