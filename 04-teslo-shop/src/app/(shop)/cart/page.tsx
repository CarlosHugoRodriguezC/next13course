import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductsInCart } from "./ui/ProductsInCart";
import { Title } from "@/components";
import { OrderSummary } from "./ui/OrderSummary";

export default function CartPage() {
  // if (false) {
  //   redirect("/empty");
  // }

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={"Cart"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}

          <div className="flex flex-col mt-5">
            <span>Add more items</span>
            <Link href={"/"} className="underline mb-5">
              Continue shopping
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Summary */}
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
