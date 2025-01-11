import { Clock, Coins, Lock } from "lucide-react"

export default function Status({status}:{status:string}){
    if(status === 'Approved'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-adsbin-green-500 text-adsbin-evergreens bg-adsbin-green-100 font-semibold">{status} <Lock color="#415B41"/></div>
        )
    }else if(status === 'Unpaid'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-adsbin-red-200 text-adsbin-evergreens bg-adsbin-red-100 font-semibold">{status} <Coins /></div>
        )
    }else if(status === 'Running'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-adsbin-neutral-200 text-adsbin-evergreens bg-adsbin-neutral-100 font-semibold">{status} <Clock /></div>
        )
    }else if(status === 'Online'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-adsbin-green-500 text-adsbin-evergreens bg-adsbin-green-100 font-semibold">{status}</div>
        )
    }else if(status === 'Paid'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-adsbin-green-500 text-adsbin-evergreens bg-adsbin-green-100 font-semibold">{status}</div>
        )
    }else if(status === 'Overdue'){
        return(
            <div className="inline-flex items-center leading-tight gap-2.5 py-1.5 px-2.5 rounded-md border border-adsbin-red-200 text-adsbin-grey-900 bg-adsbin-red-100 font-semibold">{status}</div>
        )
    }
}