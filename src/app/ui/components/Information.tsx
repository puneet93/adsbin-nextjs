
export default function Information({
    children,
  }: {
    children: React.ReactNode;
  }){
    return(
        <div className="px-5 grid md:grid-cols-2 items-center md:gap-2.5 gap-5 px-5 mb-5">
            <div className="flex flex-col gap-2.5 max-w-xl pr-8 w-full">
                <h6 className="uppercase text-body tracking-wider text-[13px] font-bold"># Media</h6>
                <h1 className={`text-black tracking-tight text-4xl font-normal font-outfit`}>Images and videos</h1>
                <p className="text-base tracking-wider text-body">Upload your campaign imagery. Max 1GB per file. Video or audio files.</p>
            </div>
            <div className="text-right">
                {children}
            </div>
        </div>
    )
}