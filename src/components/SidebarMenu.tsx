"use client";

import {
  BarChartIcon,
  CircleHelp,
  Cog,
  DollarSign,
  EyeIcon,
  FilmIcon,
  FlipHorizontal,
  HomeIcon,
  MenuIcon,
  ThumbsUp,
  TrendingUpIcon,
  UsersIcon
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const menuItems = [
    {
      href: "/",
      label: "Dashboard",
      subtitle: "Home",
      icon: <HomeIcon color="#0F172A" size={24} />
    },
    {
      href: "/media",
      label: "Media",
      subtitle: "Images and Videos",
      icon: <FilmIcon color="#0F172A" size={24} />
    },
    {
      href: "/campaigns",
      label: "Campaigns",
      subtitle: "Create and Manage",
      icon: <FlipHorizontal color="#0F172A" size={24} />
    },
    {
      href: "/statistics",
      label: "Statistics",
      subtitle: "Performance",
      icon: <TrendingUpIcon color="#0F172A" size={24} />
    },
    {
      href: "/approval",
      label: "Approval",
      subtitle: "Manage campaigns",
      icon: <ThumbsUp color="#0F172A" size={24} />
    },
    {
      href: "/earnings",
      label: "Earnings",
      subtitle: "Revenue for your location",
      icon: <DollarSign color="#0F172A" size={24} />
    },
    {
      href: "/billing",
      label: "Billing",
      subtitle: "Payment information",
      icon: <BarChartIcon color="#0F172A" size={24} />
    },
    {
      href: "/team-management",
      label: "Users",
      subtitle: "Manage team",
      icon: <UsersIcon color="#0F172A" size={24} />
    },
    {
      href: "/locations",
      label: "Locations",
      subtitle: "Signage Display Locations",
      icon: <EyeIcon color="#0F172A" size={24} />
    },
    {
      href: "/settings",
      label: "Settings",
      subtitle: "Adjust your preferences",
      icon: <Cog color="#0F172A" size={24} />
    },
    {
      href: "/documentation",
      label: "Documentation",
      subtitle: "Find your answer",
      icon: <CircleHelp color="#0F172A" size={24} />
    }
  ];

  return (
    <>
      <Button
        onClick={() => setShow(!show)}
        className="md:hidden fixed z-30 md:top-10 top-[15px] left-3.5 pb-1 w-12 h-12 !bg-white border-0 rounded-none"
        size={"icon"}
      >
        <MenuIcon className="!w-8 !h-8 mt-1 md:mt-0" color="#000" />
      </Button>
      <div
        className={`fixed z-20 top-0 ${
          show ? "left-0" : "md:left-0 -left-80"
        } transition-all w-80 md:mt-[66px] mt-[63px] bottom-0 border-r border-adsbin-grey-100 overflow-auto flex  bg-adsbin-grey-1300 flex-col`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => setShow(!show)}
            className={`flex items-center gap-5 leading-none text--adsbin-grey-1000 text-sm tracking-wide py-4 px-5 border-t border-adsbin-grey-100 transition-all border-r-4 ${
              pathname === item.href
                ? "border-r-adsbin-green-500"
                : "border-r-transparent hover:border-r-adsbin-green-500"
            } 
                            ${item.label === "Documentation" ? "mt-auto" : ""}
                        `}
          >
            {item.icon}
            <span className="flex flex-col gap-1">
              <strong className="block font-extrabold uppercase">
                {item.label}
              </strong>
              {item.subtitle}
            </span>
          </Link>
        ))}
        <p className="text-[10px] text--adsbin-grey-1000 font-semibold text-right py-2 px-6 border-t border-adsbin-grey-100">
          Version 0.2.1.223
        </p>
      </div>
    </>
  );
}
