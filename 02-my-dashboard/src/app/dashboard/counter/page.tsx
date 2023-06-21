import { CardCounter } from "@/shopping-cart";
import { type Metadata } from "next";

// interface CounterResponse {
//   count: number;
//   method: string;
// }

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "A simple counter page",
};

// const getCounter = async (): Promise<CounterResponse> => {
//   const counter: CounterResponse = await fetch("http://localhost:3000/api/counter").then((res) =>
//     res.json()
//   );
//   return counter;
// };

export default async function CounterPage() {
  // const counter = await getCounter();
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Prodcutos en el carrito</span>
      {/* <CardCounter value={counter.count} /> */}
      <CardCounter value={0} />
    </div>
  );
}
