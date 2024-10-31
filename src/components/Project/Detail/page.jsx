//Components
import Paragraph from "@/components/Text/Paragraph/page";
import Img from "@/components/Img/page";

//Styles
import Introduction from "@/components/Introduction/page";

// Render
export default function Detail({ data }) {
  // console.log(data);

  return <>{data.map((item, index) => (item.name === "text" ? <Introduction key={index} data={item} /> : <Img key={index} data={item} />))}</>;
}
