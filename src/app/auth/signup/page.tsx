import InfoHeader from "../components/InfoHeader";
import SignUpForm from "./components/SignUpForm";

export default function page() {
  return (
    <>
      <InfoHeader
        label="Sign UP"
        title="Welcome"
        content="Use your username and password to login"
      />

      <SignUpForm />
    </>
  );
}
