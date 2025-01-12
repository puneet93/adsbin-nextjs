import Image from "next/image";

export default function User() {
  return (
    <div className="flex items-center gap-2.5 min-w-60">
      <div>
        <Image
          src={"/image-1.png"}
          alt={"Title"}
          width="47"
          height="44"
          className="rounded-full"
        />
      </div>
      <div>
        <p className="font-normal truncate">Amanda van Hesteren</p>
        <h4 className="text-adsbin-evergreens text-base font-bold">
          DKPD Media
        </h4>
      </div>
    </div>
  );
}
