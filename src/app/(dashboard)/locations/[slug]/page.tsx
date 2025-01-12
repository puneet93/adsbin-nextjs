import Information from "@/components/Information";
import LocationSingle from "../components/LocationSingle";

export default function page() {
  return (
    <>
      <Information
        goBack={true}
        label={""}
        title="Add new location group"
        content="With Location Groups you can address different screens together with a single Campaign Playlist. Group a certain group of screens together to play the same content."
      >
        <></>
      </Information>

      <LocationSingle />
    </>
  );
}
