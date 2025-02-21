import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function GoogleMap() {
  return (
    <>
     <div className={'md:hidden'}>
         <AspectRatio ratio={4 / 3.5}>
             <Image
                 src={"/map.png"}
                 alt="map"
                 fill={true}
                 className="object-cover object-center"
             />
         </AspectRatio>
     </div>
        <div className={'hidden md:block'}>
            <AspectRatio ratio={16 / 5}>
                <Image
                    src={"/map.png"}
                    alt="map"
                    fill={true}
                    className="object-cover object-center"
                />
            </AspectRatio>
        </div>
    </>
  );
}
