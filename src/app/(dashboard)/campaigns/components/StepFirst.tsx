import StepHeader from "@/components/StepHeader";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Textarea} from "@/components/ui/textarea";

export default function StepFirst() {
  return (
    <div className={'-mt-10'}>
      <StepHeader count={1} title="">
        <></>
      </StepHeader>

        <div className="flex flex-col p-5 mb-5 gap-6">
            <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Company Name <small className={'block'}>(optional) :</small>
                </Label>
                <Input
                    type="text"
                    className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300"
                    placeholder="United LLC"
                />
            </div>
            <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Campaign Name:
                </Label>
                <Input
                    type="text"
                    className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300"
                    placeholder="Summer promotion "
                />
            </div>
            <div className="flex w-full max-w-2xl items-start md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    QR:
                </Label>
                <div className="flex items-start space-x-5">
                    <Checkbox id="qr-link" className={'mt-1.5'} />
                    <label
                        htmlFor="qr-link"
                        className="font-nunito max-w-[398px] text-adsbin-grey-1000 w-full font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        <h6 className={'text-base mb-1'}>Disable all QR link functionality</h6>
                        <span className={'text-sm leading-tight block'}>Disable this when the Media already has an embedded QR code or when no linking is needed</span>
                    </label>
                </div>
            </div>
            <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Target URL:
                </Label>
                <Input
                    type="text"
                    className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300"
                    placeholder="https://mypromotionsite.com"
                />
            </div>
            <div className="flex w-full max-w-2xl items-start md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Link to:
                </Label>
                <div className={'flex flex-col gap-2'}>
                    <div className="flex items-start space-x-5">
                        <Checkbox id="website-target" className={'mt-1.5'} />
                        <label
                            htmlFor="website-target"
                            className="font-nunito max-w-[398px] text-adsbin-grey-1000 w-full font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Website Target URL
                        </label>
                    </div>
                    <div className="flex items-start space-x-5">
                        <Checkbox id="business-telephone" className={'mt-1.5'} />
                        <label
                            htmlFor="business-telephone"
                            className="font-nunito max-w-[398px] text-adsbin-grey-1000 w-full font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Business Telephone number
                        </label>
                    </div>
                    <div className="flex items-start space-x-5">
                        <Checkbox id="app-store" className={'mt-1.5'} />
                        <label
                            htmlFor="app-store"
                            className="font-nunito max-w-[398px] text-adsbin-grey-1000 w-full font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            App Store Download Page
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex w-full max-w-2xl items-start md:gap-5 gap-2.5">
                <Label htmlFor="" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Extra:
                </Label>
                <div className="flex items-start space-x-5">
                    <Checkbox id="verification" className={'mt-1.5'} />
                    <label
                        htmlFor="verification"
                        className="font-nunito max-w-[398px] text-adsbin-grey-1000 w-full font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        <h6 className={'text-base mb-1'}>Add Age Verification Gate After QR Click</h6>
                        <span className={'text-sm leading-tight block'}>When enabled, users clicking the QR code will see an age confirmation screen before accessing the content.</span>
                    </label>
                </div>
            </div>
            <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Business Tel. No:
                </Label>
                <Input
                    type="text"
                    className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300"
                    placeholder="+1 201 149 70 46"
                />
            </div>
            <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Apple Appstore URL:
                </Label>
                <Input
                    type="text"
                    className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300"
                    placeholder="https://apps.apple.com/app/id1234567890"
                />
            </div>
            <div className="flex w-full max-w-2xl items-center md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Google Playstore URL:
                </Label>
                <Input
                    type="text"
                    className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300"
                    placeholder="https://apps.apple.com/app/id1234567890"
                />
            </div>
            <div className="flex w-full max-w-2xl items-start md:gap-5 gap-2.5">
                <Label htmlFor="picture" className="sm:text-nowrap sm:min-w-44 min-w-32 leading-none">
                    Description <small className={'block'}>(optional) :</small>
                </Label>
                <Textarea
                    rows={3}
                    className="text-adsbin-grey-300 font-outfit font-normal placeholder:text-adsbin-grey-300"
                    placeholder="Our campaign aims to increase brand awareness among small businesses in the tech sector through targeted social media ads."
                />
            </div>
        </div>
    </div>
  );
}
