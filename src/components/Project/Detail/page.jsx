//Components
import ImgType from "@/components/ImageType/page";

//Styles
import Introduction from "@/components/Introduction/page";

// Render
export default function Detail({ data }) {
  // console.log(data);

  return <>{data.map((item, index) => (item.name === "text" ? <Introduction key={index} data={item} /> : <ImgType key={index} data={item} />))}</>;
}
