import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function GoogleMap() {
  return (
    <AspectRatio ratio={16 / 5}>
      <Image
        src={"/map.png"}
        alt="map"
        fill={true}
        className="object-cover object-center"
      />
    </AspectRatio>
  );
}
