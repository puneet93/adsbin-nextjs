import Image from "next/image";
import Link from "next/link";

export default function HeaderBeforeLogin() {
  return (
    <div className="bg-adsbin-green-500 w-full z-20">
      <div className="h-1.5 bg-adsbin-evergreens absolute top-0 left-0 w-full"></div>
      <div className="py-8 md:px-[50px] px-5 flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/Logo.svg"} alt="Logo" width={139} height={28} />
        </Link>
      </div>
    </div>
  );
}
