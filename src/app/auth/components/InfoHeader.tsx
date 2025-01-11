export default function InfoHeader({
    label, title, content
  }: {
    label:string; title:string; content:string
  }){
    return(
        <>
            <div className="flex flex-col gap-2.5 p-5">
                {label && <h6 className="uppercase text-body tracking-widest text-xsm font-bold"># {label}</h6>}
                <h1 className={`text-adsbin-evergreens tracking-tight text-4xl font-normal font-outfit`}>{title}</h1>
                <p className="text-base tracking-wider text-body">{content}</p>
            </div>
            <hr className="border-adsbin-grey-100 my-5" />
        </>
    )
}