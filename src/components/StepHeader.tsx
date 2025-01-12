export default function StepHeader({
  children,
  count,
  title
}: {
  children?: React.ReactNode;
  count: number;
  title: string;
}) {
  return (
    <div className="p-5 flex items-center flex-wrap gap-2.5 tracking-tight justify-between">
      <div className="flex items-center gap-5">
        <span className="bg-adsbin-evergreens text-white min-w-10 w-10 h-10 tracking-tighter font-bold font-outfit rounded-full flex items-center justify-center">
          {count}.
        </span>
        <h3 className="font-outfit text-adsbin-evergreens text-xl lg:text-[26px]">
          {title}
        </h3>
      </div>

      {children}
    </div>
  );
}
