import StepHeader from "@/components/StepHeader";
import { BookDown, Eye, ShoppingCart, User, UserPlus } from "lucide-react";
import CampaignCard from "./CampaignCard";

export default function StepFirstOld() {
  return (
    <div>
      <StepHeader count={1} title="What is the target of the Campaign?">
        <></>
      </StepHeader>

      <div className="p-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <CampaignCard
          icon={<ShoppingCart color="#000" size={24} />}
          title="Sales"
          content="Drive direct purchases of your products or services through targeted advertising."
        />
        <CampaignCard
          icon={<User color="#000" size={24} />}
          title="LEADS"
          content="Capture potential customer information to nurture and convert into sales."
        />
        <CampaignCard
          icon={<UserPlus color="#000" size={24} />}
          title="Website Traffic"
          content="Increase the number of visitors to your website to boost online engagement and conversions."
        />
        <CampaignCard
          icon={<Eye color="#000" size={24} />}
          title="BRAND AWARENESS"
          content="Enhance the visibility and recognition of your brand among your target audience."
        />
        <CampaignCard
          icon={<BookDown color="#000" size={24} />}
          title="App DOWNLOADS"
          content="Encourage users to download and install your mobile application to expand your user base."
        />
      </div>
    </div>
  );
}
