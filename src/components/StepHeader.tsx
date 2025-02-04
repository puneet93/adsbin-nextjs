export default function StepHeader({
  children,
  count,
  title, content
}: {
  children?: React.ReactNode;
  count: number;
  title: string;
  content?: string
}) {
  return (
    <div className="p-5 md:px-0 mb-5 flex items-center flex-wrap md:flex-nowrap gap-2.5 tracking-tight justify-between">
      <div className="flex items-start flex-col gap-5">
        <span className="bg-adsbin-evergreens hidden text-white min-w-10 w-10 h-10 tracking-tighter font-bold font-outfit rounded-full flex items-center justify-center">
          {count}.
        </span>
        <h3 className="font-outfit text-adsbin-evergreens text-xl lg:text-[26px]">
          {title}
        </h3>
        {content && <p className={'text-adsbin-grey-1000 max-w-2xl w-full'}>{content}</p>}
      </div>

      {children}
    </div>
  );
}
