import Image from "next/image";

export default function LangDropdown() {
  return (
    <button className="px-2 md:px-5 flex flex-col items-center gap-2 text-white text-xs font-semibold">
        <Image src={'/USA.svg'} alt={'USA'} width={32} height={24} />
        <span>English</span>
    </button>
  );
}
