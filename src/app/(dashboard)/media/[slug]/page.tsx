import PopupControls from "@/components/PopupControls";
import MediaDetails from "../components/MediaDetails";

export default function page() {
  return (
    <>
      <MediaDetails />
      <PopupControls title="Your Media Library" content="You can upload images and videos here. Images must be in PNG or JPEG format. Videos must be in MP4 format." />
    </>
  );
}
