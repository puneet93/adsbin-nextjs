export default function CampaignCard({icon, title, content}:{icon:React.ReactNode, title:string, content:string}){
    return(
        <div className="border border-adsbin-grey-100 p-5 text-body tracking-wide text-base min-h-52 hover:border-adsbin-evergreens transition-all">
            <div className="flex items-center justify-between gap-2.5 mb-2.5">
                <h6 className="uppercase font-extrabold text-sm">{title}</h6>
                {icon}
            </div>
            {content}
        </div>
    )
}