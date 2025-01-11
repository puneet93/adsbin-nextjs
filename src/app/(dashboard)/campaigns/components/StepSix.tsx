
import StepHeader from "@/components/StepHeader";
import PaymentDetail from "./PaymentDetail";

export default function StepSix(){
    return(
        <div>
            <StepHeader count={6} title="Payment Details"><></></StepHeader>

            <div className="flex tracking-wide text-adsbin-grey-1000 flex-col py-5 mb-5 gap-5 md:px-0 px-5">
                <p className="text-base max-w-xl w-full">Here you see an overview of your items.</p>

                <PaymentDetail />

                <hr className="border-adsbin-grey-100" />
            </div>
        </div>
    )
}