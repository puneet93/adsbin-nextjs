import Image from "next/image";

export default function InfoHeader({
  label,
  title,
  content,
  logo
}: {
  label: string;
  title: string;
  content: string;
  logo?: boolean;
}) {
  return (
    <>
      <div className="flex flex-col gap-2.5 p-5">
        {logo && (
          <Image src="/Logo-dark.svg" alt="logo" width={190} height={59} />
        )}
        {label && (
          <h6 className="uppercase text-adsbin-grey-1000 tracking-widest text-xsm font-bold">
            # {label}
          </h6>
        )}
        <h1
          className={`text-adsbin-evergreens tracking-tight text-4xl font-normal font-outfit`}
        >
          {title}
        </h1>
        <p className="text-base tracking-wider text-adsbin-grey-1000">
          {content}
        </p>
      </div>
      <hr className="border-adsbin-grey-100 my-5" />
    </>
  );
}
