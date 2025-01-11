import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export default function Information({
    children,
    label, title, content, goBack, align = ""
  }: {
    children?: React.ReactNode;
    label:string; title:string; content:string, goBack:boolean, align?:string
  }){
    return(
        <div className={`px-5 grid md:grid-cols-2 md:gap-2.5 gap-5 px-5 mb-5 ${align === 'top' ? 'items-start' : 'items-center'}`}>
            <div className="flex flex-col items-start gap-2.5 max-w-xl pr-8 w-full">
                {goBack && <Button variant={'ghost'} className="p-0 h-auto !bg-transparent tracking-tight text-base text-adsbin-grey-1000 font-bold"><ArrowLeft color="#000" /> Go back</Button>}
                {label && <h6 className="uppercase text-adsbin-grey-1000 tracking-widest text-xsm font-bold"># {label}</h6>}
                <h1 className={`text-adsbin-evergreens tracking-tight text-4xl font-normal font-outfit`} dangerouslySetInnerHTML={{__html: title}} />
                <p className="text-base tracking-wider text-adsbin-grey-1000">{content}</p>
            </div>
            <div className="text-right">
                {children}
            </div>
        </div>
    )
}