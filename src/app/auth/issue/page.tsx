import IssueForm from "./components/IssueForm";
import InfoHeader from "../components/InfoHeader";

export default function page() {
  return (
    <div className="container max-w-[600px] mx-auto py-3 md:py-5">
      <InfoHeader
        label="ISSUE"
        title="Report an Issue"
        content="We value your feedback and are committed to ensuring that all our units operate at their best. If you encounter any issues with a defective unit or have other concerns, please use this form to let us know. Your input helps us maintain high standards and continue making an impact together."
      />

      <IssueForm />
    </div>
  );
}
