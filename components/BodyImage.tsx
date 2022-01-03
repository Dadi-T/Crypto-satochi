import Image from "next/image";
import { image } from "../interfaces/image";

export default function BodyImage({ imageData }: { imageData: image }) {
  return (
    <div>
      {imageData && (
        <Image
          src={`/${imageData.url}.png`}
          width={imageData.width}
          height={imageData.height}
        />
      )}
    </div>
  );
}
