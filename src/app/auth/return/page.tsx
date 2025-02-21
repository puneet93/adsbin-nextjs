import ReturnForm from "./components/ReturnForm";
import InfoHeader from "../components/InfoHeader";

export default function page() {
  return (
    <div className="container max-w-[600px] mx-auto py-3 md:py-5">
      <InfoHeader
        label="return"
        title="Return Your ADSBIN Unit(s)"
        content="Thank you for choosing ADSBIN for your advertising needs. As your contract comes to an end, we appreciate your partnership and look forward to serving you again in the future. Please follow the steps below to return your ADSBIN unit smoothly."
      />

      <ReturnForm />
    </div>
  );
}
