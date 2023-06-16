import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is the pricing page of my services",
};

export default function PricingPage() {
  return (
    <>
      <h1 className="text-7xl text-center">Pricing Page</h1>
    </>
  );
}
