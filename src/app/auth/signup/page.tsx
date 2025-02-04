import InfoHeader from "../components/InfoHeader";
import SignUpForm from "./components/SignUpForm";

export default function page() {
  return (
    <div className="container max-w-[600px] mx-auto py-3 md:py-5">
      <InfoHeader
        label="Sign UP"
        title="Welcome"
        content="Use your username and password to login"
      />

      <SignUpForm />
    </div>
  );
}
