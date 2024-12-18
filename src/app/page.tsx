import { Button } from "@/components/ui/button";
import LayoutSidebar from "./layoutSidebar";
import Information from "./ui/components/Information";
import { UploadIcon } from "@/lib/icons";
import MediaData from "./ui/Media";

export default function Home() {
  return (
    <LayoutSidebar>
      <Information><Button className="py-2.5 px-5 text-base gap-2.5 h-auto bg-green rounded-none">Upload new File <UploadIcon color="#fff" /></Button></Information>
      <MediaData />
    </LayoutSidebar>
  );
}
