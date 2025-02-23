export default function StepHeader({
  children,
  count,
  title, content, countEnable
}: {
  children?: React.ReactNode;
  count: number;
  title: string;
  countEnable?: boolean;
  content?: string
}) {
  return (
    <div className={`mb-5 flex items-center flex-wrap md:flex-nowrap gap-2.5 tracking-tight justify-between ${countEnable ? 'py-5' : 'p-5'}`}>
      <div className="flex items-start flex-col gap-5">
        <div className="flex items-center gap-5">
            <span className={`bg-adsbin-grey-100 text-adsbin-evergreens min-w-10 w-10 h-10 tracking-tighter font-bold font-outfit rounded-full flex items-center justify-center ${countEnable ? 'block' : 'hidden'}`}>
            {count}.
          </span>
            <h3 className={`font-outfit text-adsbin-evergreens text-xl lg:text-[26px]`}>
              {title}
            </h3>
        </div>
        {content && <p className={'text-adsbin-grey-1000 max-w-2xl w-full'}>{content}</p>}
      </div>

      {children}
    </div>
  );
}
