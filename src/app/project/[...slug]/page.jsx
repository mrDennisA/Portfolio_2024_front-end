import { Suspense } from "react";

// Components
import { ThemeToggle } from "@/context/themeContext";
import Banner from "@/components/Banner/page";
import Detail from "@/components/Project/Detail/page";
import LoadingScreen from "@/components/LoadingScreen/page";

// API
import { PROJECTS_URL } from "@/constants/api";

// GetData
async function getData(params) {
  try {
    const res = await fetch(PROJECTS_URL, { next: { revalidate: 60 } }); // invalidate every hour
    const data = await res.json();

    const project = data.find((item) => {
      const slugItem = item.slugClient + "/" + item.slugTitle;
      const slugParams = params.slug[0] + "/" + params.slug[1];

      return slugItem === slugParams;
    });

    return project;
  } catch (error) {
    console.log(error);
  }
}

// Render
export default async function Project({ params }) {
  const data = await getData(params);

  return (
    <>
      {/* <ThemeToggle data={data.colorBG}> */}
      {/* <LoadingScreen /> */}
      <Banner data={data} />
      <Detail data={data.detail} />
      {/* </ThemeToggle> */}
    </>
  );
}
