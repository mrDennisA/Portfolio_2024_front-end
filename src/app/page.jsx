//Components
import { ThemeToggle } from "@/utils/themeContext";
import Banner from "@/components/Banner/page";
import Introduction from "@/components/Introduction/page";
import Contact from "@/components/Contact/page";
import ProjectList from "@/components/Project/List/page";
import Info from "@/components/Info/page";

// Utils
import ModalContextProvider from "@/utils/modalContext";

// API
import { HOME_URL, PROJECTS_URL } from "@/constants/api";
import { revalidate } from "@/utils/revalidate";

// GetData
async function getHomeData() {
  try {
    const res = await fetch(HOME_URL, { next: { revalidate: revalidate } });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getProjectsData() {
  try {
    const res = await fetch(PROJECTS_URL, { next: { revalidate: revalidate } });
    const data = await res.json();

    return data.reverse();
  } catch (error) {
    console.log(error);
  }
}

// Render
export default async function Home() {
  const homePromise = getHomeData();
  const projectsPromise = getProjectsData();
  const [homeData, projectsData] = await Promise.all([homePromise, projectsPromise]);

  return (
    <>
      <ThemeToggle data={homeData.colorBG}>
        <ModalContextProvider data={projectsData}>
          <Banner data={homeData} type="home" />
          <Introduction data={homeData.detail} />
          <Contact data={homeData.contact} />
          <ProjectList data={projectsData} />
          <Info data={homeData} />
        </ModalContextProvider>
      </ThemeToggle>
    </>
  );
}
