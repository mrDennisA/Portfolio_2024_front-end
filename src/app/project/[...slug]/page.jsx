import { Suspense } from "react";

// Components
import { ThemeToggle } from "@/context/themeContext";
import Banner from "@/components/Banner/page";
import Detail from "@/components/Project/Detail/page";
import LoadingScreen from "@/components/LoadingScreen/page";

// API
import { PROJECTS_URL } from "@/constants/api";
import { revalidate } from "@/utils/revalidate";

//GetParams
export async function generateStaticParams() {
  const res = await fetch(PROJECTS_URL, { next: { revalidate: revalidate } }); // invalidate every hour
  const data = await res.json();

  return data.map((item) => ({
    slug: [item.slugClient, item.slugTitle],
  }));
}

// GetData
async function getData(slug) {
  try {
    const res = await fetch(PROJECTS_URL, { next: { revalidate: revalidate } }); // invalidate every hour
    const data = await res.json();

    const project = data.find((item) => {
      const slugItem = item.slugClient + "/" + item.slugTitle;
      const slugParams = slug[0] + "/" + slug[1];

      return slugItem === slugParams;
    });

    return project;
  } catch (error) {
    console.log(error);
  }
}

// Render
export default async function Project({ params }) {
  const data = await getData(params.slug);

  return (
    <>
      <ThemeToggle data={data.colorBG}>
        {/* <LoadingScreen /> */}
        <Banner data={data} transition={true} />
        <Detail data={data.detail} />
      </ThemeToggle>
    </>
  );
}
