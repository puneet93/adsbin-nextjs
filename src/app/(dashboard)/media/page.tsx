import PopupControls from "@/components/PopupControls";
import MediaPage from "./components/MediaPage";

export default function page() {
  return (
    <>
      <MediaPage />
      <PopupControls title="Your Media Library" content="You can upload images and videos here. Images must be in PNG or JPEG format. Videos must be in MP4 format." />
    </>
  );
}
