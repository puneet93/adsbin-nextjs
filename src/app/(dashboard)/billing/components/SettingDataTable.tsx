import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DataTable } from "./DataTable";

export default function SettingDataTable() {
  return (
    <div>
      <div className="md:py-5 md:pr-3.5 md:pl-12 p-4 flex md:flex-row flex-col md:items-center gap-2.5">
        <div className="flex items-center pr-5 justify-between flex-grow">
          <h5 className="text-adsbin-grey-1000 text-base tracking-wide">
            No selection
          </h5>
        </div>

        <form action="/" className="relative md:max-w-[160px]">
          <Input
              placeholder="Search Term"
              className="rounded-full pr-10 font-semibold !h-12 !text-base"
          />
          <Button
              variant={"link"}
              className="p-0 absolute top-[4px] md:right-1.5 right-2 min-w-8"
          >
            <Search color="#415B41" size={32} />
          </Button>
        </form>
      </div>

      <DataTable />
    </div>
  );
}
