//Components
import Paragraph from "@/components/Text/Paragraph/page";
import ImgType from "@/components/ImgType/page";

//Styles
import Introduction from "@/components/Introduction/page";

// Render
export default function Detail({ data }) {
  // console.log(data);

  return <>{data.map((item, index) => (item.name === "text" ? <Introduction key={index} data={item} /> : <ImgType key={index} data={item} />))}</>;
}
