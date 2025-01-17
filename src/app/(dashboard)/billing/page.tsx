import Information from "@/components/Information";
import SettingDataTable from "./components/SettingDataTable";
import PopupControls from "@/components/PopupControls";

export default function page() {
  return (
    <>
      <Information
        label={"Billing"}
        title="Payment History"
        content="Welcome to our billing page! Review your transaction history and if needed complete your payment securely. "
        goBack={false}
      >
        <></>
      </Information>

      <SettingDataTable />

      <PopupControls title="Billing Information" content="This is a list of all your invoices." />
    </>
  );
}
