import InfoHeader from "../components/InfoHeader";
import LoginForm from "./components/LoginForm";

export default function page() {
  return (
    <>
      <InfoHeader
        logo={true}
        label=""
        title="Please login"
        content="Use your username and password to login"
      />

      <LoginForm />
    </>
  );
}
