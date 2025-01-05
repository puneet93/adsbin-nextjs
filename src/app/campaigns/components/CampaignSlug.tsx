import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import StepThird from "./StepThird";

export default function CampaignSlug(){
    return(
        <div className="flex flex-col gap-5 mt-10">
            <StepFirst />
            <StepSecond />
            <StepThird />
        </div>
    )
}