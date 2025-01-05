'use client';

import { CircleHelp, Cog, DollarSign, EyeIcon, FilmIcon, FlipHorizontal, HomeIcon, ThumbsUp, TrendingUpIcon, UsersIcon } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar(){
    const pathname = usePathname();
    const menuItems = [
        { href: '/', label: 'Dashboard', subtitle: 'Home', icon: <HomeIcon color="#0F172A" size={24} /> },
        { href: '/media', label: 'Media', subtitle: 'Images and Videos', icon: <FilmIcon color="#0F172A" size={24} /> },
        { href: '/campaigns', label: 'Campaigns', subtitle: 'Create and Manage', icon: <FlipHorizontal color="#0F172A" size={24} /> },
        { href: '/approval', label: 'Approval', subtitle: 'Manage campaigns', icon: <ThumbsUp color="#0F172A" size={24} /> },
        { href: '/locations', label: 'Locations', subtitle: 'Signage Display Locations', icon: <EyeIcon color="#0F172A" size={24} /> },
        { href: '/billing', label: 'Billing', subtitle: 'Payment information', icon: <DollarSign color="#0F172A" size={24} /> },
        { href: '/statistics', label: 'Statistics', subtitle: 'Performance', icon: <TrendingUpIcon color="#0F172A" size={24} /> },
        { href: '/team-management', label: 'Users', subtitle: 'Manage team', icon: <UsersIcon color="#0F172A" size={24} /> },
        { href: '/settings', label: 'Settings', subtitle: 'Adjust your preferences', icon: <Cog color="#0F172A" size={24} /> },
        { href: '/documentation', label: 'Documentation', subtitle: 'Find your answer', icon: <CircleHelp color="#0F172A" size={24} /> },
    ];

    return(
        <div className="fixed z-10 top-0 left-0 w-80 mt-[112px] bottom-0 border-r border-gray-light overflow-auto md:flex hidden flex-col">
            {menuItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-5 leading-none text-[#606060] text-sm tracking-wide py-4 px-5 border-t border-gray-light transition-all border-r-4 ${
                        pathname === item.href ? 'border-r-green' : 'border-r-transparent hover:border-r-green'
                    } 
                        ${
                            item.label === 'Documentation' ? 'mt-auto' : ''
                        }
                    `}
                >
                    {item.icon}
                    <span className="flex flex-col gap-1">
                        <strong className="block font-extrabold uppercase">{item.label}</strong>
                        {item.subtitle}
                    </span>
                </Link>
            ))}
            <p className="text-[10px] text-[#606060] font-semibold text-right py-2 px-6 border-t border-gray-light">Version 0.2.1.223</p>
        </div>
    )
}