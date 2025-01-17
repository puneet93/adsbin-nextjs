import PopupControls from "@/components/PopupControls";
import { DataTable } from "./components/DataTable";
import Information from "./components/Information";

export default function page() {
  return (
    <>
      <Information />

      <DataTable />

      <PopupControls title="Approval Process" content="Here you can approve or reject campaigns." />
    </>
  );
}
