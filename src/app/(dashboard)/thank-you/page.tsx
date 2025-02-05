import Image from "next/image";
import {ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function page() {
  return (
    <div className={'flex md:flex-row flex-col items-start md:gap-5 gap-10'}>
      <div className={'text-center flex justify-center'}>
        <Image src={'/thank-you.svg'} alt={'thank-you'} width={267} height={267} />
      </div>
      <div className={'px-5'}>
        <div className="flex flex-col items-start gap-2.5 mb-2.5">
          <Button
              variant={"ghost"}
              className="p-0 h-auto !bg-transparent tracking-tight text-base text-adsbin-grey-1000 font-bold"
          >
            <ArrowLeft color="#000" /> Go back
          </Button>

          <h1 className={`text-adsbin-evergreens tracking-tight text-4xl font-normal font-outfit`}>
            You’re all set! <br/>
            Thanks for submitting your ad!
          </h1>
          <h4 className={'text-xl text-adsbin-neutral-400 font-outfit min-h-12'}>What happens next?</h4>
        </div>

        <div className={'text-adsbin-grey-1000 text-base [&>ul]:mb-5 [&>ul]:pl-7 [&>ul]:list-disc [&>p]:mb-1'}>
          <p>Here’s what you can expect:</p>
          <ul>
            <li>Your ad will be reviewed by our team within <strong>24 hours</strong>.</li>
            <li>If approved, the ad will go live starting at 8:00 AM the <strong>following day</strong>.</li>
            <li>If rejected, the amount will be automatically <strong>refunded</strong> to your account.</li>
          </ul>

          <p>Use the <strong>&#34;Campaigns&#34;</strong> button to see:</p>
          <ul>
            <li>A complete <strong>overview</strong> of your campaign.</li>
            <li>All filled-in fields.</li>
            <li>A <strong>preview</strong> of how the ad will appear on the screen.</li>
          </ul>

          <p>You will receive email notifications at every step of the process, including:</p>
          <ul>
            <li>When your ad is <strong>approved</strong> or <strong>rejected</strong>.</li>
            <li>When your ad goes <strong>live</strong>.</li>
            <li>Reminders about your campaign’s <strong>progress</strong>.</li>
          </ul>

          <p>Questions? <br/>Feel free to contact us for assistance.</p>

        </div>
      </div>
    </div>
  );
}