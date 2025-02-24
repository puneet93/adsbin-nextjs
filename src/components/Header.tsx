import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./UserDropdown";
import LangDropdown from "./LangDropdown";

export default function Header() {
  return (
    <div className="bg-adsbin-green-500 fixed top-0 w-full z-20 md:z-30">
      {/*<div className="h-1.5 bg-[#415B41] absolute top-0 left-0 w-full"></div>*/}
      <div className="py-3 md:px-12 px-5 flex items-center">
        <Link href={"/"} className="md:ml-0 ml-10 md:block hidden">
          <Image src={"/Logo.svg"} alt="Logo" width={139} height={28} />
        </Link>

        <LangDropdown />
        
        <UserDropdown />
      </div>
    </div>
  );
}
