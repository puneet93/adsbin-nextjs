type FileDetailItemProps = {
    title: string;
    info: string | React.ReactNode;
    customClass?: string;
};

export default function FileDetailItem({title, info, customClass = ''}:FileDetailItemProps){
    return(
        <div className={`tracking-tight flex flex-col gap-1.5 px-5 text-base ${customClass}`}>
            <h2 className="font-bold text-adsbin-evergreens">{title}</h2>
            <p className="text-adsbin-grey-1000">{info}</p>
        </div>
    )
}