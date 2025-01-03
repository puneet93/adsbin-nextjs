import { CircleHelp, Cog, DollarSign, EyeIcon, FilmIcon, FlipHorizontal, HomeIcon, ThumbsUp, TrendingUpIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

export default function Sidebar(){
    return(
        <div className="fixed z-10 top-0 left-0 w-80 mt-[112px] bottom-0 border-r border-[#ECECEC] overflow-auto md:flex hidden flex-col">
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <HomeIcon color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">DASHBOARD</strong>
                    Home
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-[#ECECEC] transition-all border-r-4 border-r-green">
                <FilmIcon color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">Media</strong>
                    Images and Videos
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <FlipHorizontal color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">Campaigns</strong>
                    Create and Manage
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <ThumbsUp color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">Approval</strong>
                    Manage campaigns
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <EyeIcon color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">Locations</strong>
                    Signage Display Locations
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <DollarSign color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">BILLING</strong>
                    Payment information
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <TrendingUpIcon color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">STATISTICS</strong>
                    Performance
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <UsersIcon color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">USERS</strong>
                    Manage team
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-b border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <Cog color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">SETTINGS</strong>
                    Adjust your preferences
                </span>
            </Link>
            <Link href={'/'} className="flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-b mt-auto border-[#ECECEC] transition-all border-r-4 border-r-transparent hover:border-r-green">
                <CircleHelp color="#0F172A" size={24} />
                <span className="flex flex-col gap-1">
                    <strong className="block font-extrabold uppercase">DOCUMENTATION</strong>
                    Find your answer
                </span>
            </Link>
            <p className="text-[10px] text-[#606060] font-semibold text-right py-2 px-6">Version 0.2.1.223</p>
        </div>
    )
}