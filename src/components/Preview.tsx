import Image from "next/image";

export default function Preview() {
  return (
    <>
      <Image
        src="/Preview.png"
        alt="Preview"
        width={1920}
        height={424}
        className="block"
      />
    </>
  );
}
