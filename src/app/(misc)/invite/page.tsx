import InfoHeader from "../../auth/components/InfoHeader";
import InviteForm from "./components/InviteForm";

export default function page() {
  return (
    <div className="container max-w-[600px] mx-auto py-3 md:py-5">
      <InfoHeader
        label="INVITE"
        title="Invite user"
        content="Invite colleagues to join your team"
      />

      <InviteForm />
    </div>
  );
}
