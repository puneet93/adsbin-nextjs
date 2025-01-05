import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export default function Information({
    children,
    label, title, content, goBack
  }: {
    children: React.ReactNode;
    label:string; title:string; content:string, goBack:boolean
  }){
    return(
        <div className="px-5 grid md:grid-cols-2 items-center md:gap-2.5 gap-5 px-5 mb-5">
            <div className="flex flex-col items-start gap-2.5 max-w-xl pr-8 w-full">
                {goBack && <Button variant={'ghost'} className="p-0 h-auto !bg-transparent tracking-tight text-base text-body font-bold"><ArrowLeft color="#000" /> Go back</Button>}
                {label && <h6 className="uppercase text-body tracking-widest text-[13px] font-bold"># {label}</h6>}
                <h1 className={`text-black tracking-tight text-4xl font-normal font-outfit`}>{title}</h1>
                <p className="text-base tracking-wider text-body">{content}</p>
            </div>
            <div className="text-right">
                {children}
            </div>
        </div>
    )
}