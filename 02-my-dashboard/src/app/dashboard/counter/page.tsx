import { CardCounter } from "@/shopping-cart";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "A simple counter page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Prodcutos en el carrito</span>
      <CardCounter value={20} />
    </div>
  );
}
