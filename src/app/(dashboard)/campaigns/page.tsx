import Information from "@/components/Information";
import { Button } from "@/components/ui/button";
import { Megaphone } from "lucide-react";
import CampaignDataTable from "./components/CampaignDataTable";
import Link from "next/link";
import PopupControls from "@/components/PopupControls";

export default function page() {
  return (
    <>
      <Information
        label={"CAMPAIGN"}
        title="Campaigns"
        content="Create and manage ongoing campaigns"
        goBack={false}
      >
        <Button
          asChild
          className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto md:w-auto w-full bg-adsbin-green-500 rounded-none"
        >
          <Link href={"/campaigns/new"}>
            Start new campaign <Megaphone className="w-5 h-5" />
          </Link>
        </Button>
      </Information>

      <CampaignDataTable />

        <div className={'flex justify-center py-10 px-5'}>
            <Button
                asChild
                className="py-2 px-4 anim-pulse text-sm gap-2.5 h-auto w-auto bg-adsbin-green-500 rounded-none"
            >
                <Link href={"/campaigns/new"}>
                    Start new campaign <Megaphone className="w-5 h-5" />
                </Link>
            </Button>
        </div>
      <PopupControls title="Create or Mange your Campaigns" content="Here you can create a new campaign or manage your existing ones." />
    </>
  );
}
