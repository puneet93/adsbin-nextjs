import { Clock, Coins, Lock } from "lucide-react"

export default function Status({status}:{status:string}){
    if(status === 'Approved'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-approved text-black bg-approvedBg font-semibold">{status} <Lock color="#415B41"/></div>
        )
    }else if(status === 'Unpaid'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-unpaid text-black bg-unpaidBg font-semibold">{status} <Coins /></div>
        )
    }else if(status === 'Running'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-running text-black bg-runningBg font-semibold">{status} <Clock /></div>
        )
    }else if(status === 'Online'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-approved text-black bg-approvedBg font-semibold">{status}</div>
        )
    }
}