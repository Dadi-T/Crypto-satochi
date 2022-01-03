import Description from "../components/Description";
import BodyImage from "../components/BodyImage";
import Image from "next/image";
import { image } from "../interfaces/image";
export default function Body() {
  const images: image[] = [
    {
      url: "Cop",
      width: 263.19,
      height: 351.63,
    },
    {
      url: "Monkey",
      width: 284.25,
      height: 284.25,
    },
    {
      url: "WhiteHair",
      width: 172.66,
      height: 300.04,
    },
    {
      url: "Leopard",
      width: 374.79,
      height: 374.79,
    },
  ];
  return (
    <div className="flex justify-center p-24 ">
      <div className=" flex flex-wrap flex-services">
        {/* {images.map((imageData: image) => {
          return <BodyImage imageData={imageData} />;
          
        })} */}
        <div>
          <Image
            src={`/${images[0].url}.png`}
            width={images[0].width}
            height={images[0].height}
          />
        </div>
        <div className="place-self-end ml-4">
          <Image
            src={`/${images[1].url}.png`}
            width={images[1].width}
            height={images[1].height}
          />
        </div>
        <div className="ml-4">
          <Image
            src={`/${images[2].url}.png`}
            width={images[2].width}
            height={images[2].height}
          />
        </div>
        <div className="ml-4">
          <Image
            src={`/${images[3].url}.png`}
            width={images[3].width}
            height={images[3].height}
          />
        </div>
      </div>
      <Description />
    </div>
  );
}
