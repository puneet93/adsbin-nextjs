import InfoHeader from "../../auth/components/InfoHeader";
import PurchaseForm from "./components/PurchaseForm";

export default function page() {
  return (
    <div className="container max-w-[600px] mx-auto py-3 md:py-5">
      <InfoHeader
        label="Place ORDER"
        title="Purchase"
        content="You’re just a few steps away from transforming your space with our state-of-the-art digital signage-equipped garbage cans. Simply fill in your details below to complete your purchase. Our innovative cans are perfect for high-traffic areas, helping you keep your environment clean while promoting your brand. Let’s get started on enhancing your space today!"
      />

      <PurchaseForm />
    </div>
  );
}
