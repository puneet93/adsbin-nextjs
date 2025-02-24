import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export default function Information({
  children,
  label,
  title,
  content,
  goBack,
  align = "",
  titleIcon
}: {
  children?: React.ReactNode;
  label: string;
  title: string | boolean;
  content: string;
  goBack: boolean;
  align?: string;
  titleIcon?: React.ReactNode;
}) {
  return (
    <div
      className={`px-5 pt-5 md:pb-5 pb-14 grid md:grid-cols-2 md:gap-2.5 gap-5 md:mb-5 mb-2.5 bg-adsbin-grey-100/50 ${
        align === "top" ? "items-start" : "items-center"
      }`}
    >
      <div className="flex flex-col items-start gap-2.5 max-w-xl md:pr-8 w-full">
        {goBack && (
          <Button
            variant={"ghost"}
            className="p-0 h-auto !bg-transparent tracking-tight text-base text-adsbin-grey-1000 font-bold"
          >
            <ArrowLeft color="#000" /> Go back
          </Button>
        )}
        {label && (
          <h6 className="uppercase text-adsbin-grey-1000 tracking-widest text-xsm font-bold">
            # {label}
          </h6>
        )}
        <div className="flex gap-2.5 items-center">
          {titleIcon}
          <h1
            className={`text-adsbin-evergreens tracking-tight text-4xl font-normal font-outfit`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <p className="text-base tracking-wider text-adsbin-grey-1000">
          {content}
        </p>
      </div>
      <div className="text-right">{children}</div>
    </div>
  );
}
