export default function CircleItem({icon, value, name}:{icon:string | React.ReactNode, value:string|TrustedHTML, name:string}){
    return(
        <div className="flex flex-col items-center justify-center gap-2.5 group cursor-pointer">
            <div className="w-26 h-26 text-3xl text-black tracking-tight border-4 border-gray-light rounded-full flex group-hover:border-green">
                <span className="m-auto sub" dangerouslySetInnerHTML={{__html: value}} />
            </div>
            <p className="flex items-center justify-center text-body gap-1.5">{name} {icon}</p>
        </div>
    )
}