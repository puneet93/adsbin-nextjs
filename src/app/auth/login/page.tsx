import InfoHeader from "../components/InfoHeader";
import LoginForm from "./components/LoginForm";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-5 md:px-5">
        <div>
            <Image src={"/logo-banner.png"} alt={"logo banner"} width={850} height={868} />
        </div>
      <div className={'max-w-[600px] mx-auto w-full'}>
          <InfoHeader
              label=""
              title="Please login"
              content="Use your username and password to login"
          />

          <LoginForm />
      </div>
    </div>
  );
}
