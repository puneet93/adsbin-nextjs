// import Information from "@/components/Information";
import CampaignSlug from "../components/CampaignSlug";
import PopupControls from "@/components/PopupControls";

export default function page() {
  return (
    <>
      <CampaignSlug />
      <PopupControls title="Create or Mange your Campaigns" content="Here you can create a new campaign or manage your existing ones." />
    </>
  );
}
