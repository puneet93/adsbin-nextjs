import { Button } from "@/components/ui/button";
import {Shield, UserPlus} from "lucide-react";
import TeamDataTable from "./components/TeamDataTable";
import Information from "@/components/Information";
import PopupControls from "@/components/PopupControls";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Information
        goBack={false}
        label={"team"}
        title="DHG & Partners"
        content="Add and manage your team members"
        titleIcon={<Shield size={30} color="#415B41" />}
      >
        <Button asChild={true} className="py-2.5 anim-pulse px-5 text-base gap-2.5 h-auto bg-adsbin-green-500 rounded-none  md:w-auto w-full">
          <Link href={"/locations"}>Invite new member <UserPlus className="w-4 h-4" /></Link>
        </Button>
      </Information>

      <TeamDataTable />

        <div className={'flex justify-center py-10 px-5'}>
            <Button className="py-2 px-4 anim-pulse text-sm gap-2.5 h-auto w-auto bg-adsbin-green-500 rounded-none">
                Invite new member <UserPlus className="w-4 h-4" />
            </Button>
        </div>

        <PopupControls title="DHG & Partners" content="Here you can add and manage your team members." />
    </>
  );
}
