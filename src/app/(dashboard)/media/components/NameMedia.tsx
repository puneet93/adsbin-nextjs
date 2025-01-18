import Image from "next/image";

export default function NameMedia() {
  return (
    <div className="flex items-center gap-2.5 min-w-42">
      <div className="sm:block hidden">
        <Image src={"/image-1.png"} alt={"Title"} width="47" height="44" />
      </div>
      <div>
        <h4 className="text-adsbin-evergreens text-base font-bold">
          Fall Season
        </h4>
        <p className="text-xsm font-normal">2 Files</p>
      </div>
    </div>
  );
}
