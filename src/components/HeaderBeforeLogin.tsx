import Image from "next/image";
import Link from "next/link";

export default function HeaderBeforeLogin() {
  return (
    <div className="bg-adsbin-green-500 w-full z-30">
      <div className="h-1.5 bg-adsbin-evergreens z-30 absolute top-0 left-0 w-full"></div>
      <div className="py-7 md:px-12 px-5 flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/Logo.svg"} alt="Logo" width={139} height={28} />
        </Link>
      </div>
    </div>
  );
}
