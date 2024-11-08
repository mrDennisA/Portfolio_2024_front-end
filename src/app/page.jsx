//Components
import { ThemeToggle } from "@/context/themeContext";
import Banner from "@/components/Banner/page";
import Introduction from "@/components/Introduction/page";
import Contact from "@/components/Contact/page";
import ProjectList from "../components/Project/List/page";

// API
import { HOME_URL } from "@/constants/api";

// GetData
async function getData() {
  try {
    const res = await fetch(HOME_URL, { next: { revalidate: 60 } }); // invalidate every hour
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

// Render
export default async function Home() {
  const data = await getData();

  return (
    <>
      {/* <ThemeToggle data={data.colorBG}> */}
      <Banner data={data} />
      <Introduction data={data.detail} />
      <Contact data={data.contact} />
      <ProjectList />
      {/* </ThemeToggle> */}
    </>
  );
}
