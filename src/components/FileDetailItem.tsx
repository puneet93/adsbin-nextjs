export default function FileDetailItem({title, info}:{title:string, info:string}){
    return(
        <div className="tracking-tight flex flex-col gap-1.5 px-5 text-base">
            <h2 className="font-bold text-black">{title}</h2>
            <p className="text-body">{info}</p>
        </div>
    )
}