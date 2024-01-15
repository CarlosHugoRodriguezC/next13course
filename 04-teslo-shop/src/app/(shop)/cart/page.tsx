import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductsInCart } from "./ui/ProductsInCart";
import { Title } from "@/components";

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
            <div className="bg-white rounded-3xl shadow-xl p-7">
              <h2 className="text-2xl mb-2">Order Summary</h2>
              <hr />

              <div className="grid grid-cols-2">
                <span>No. Products</span>
                <span className="text-right">3 items</span>

                <span>Subtotal</span>
                <span className="text-right">$ 100</span>

                <span>Taxes (15%)</span>
                <span className="text-right">$ 15</span>

                <span className="text-2xl mt-5">Total</span>
                <span className="text-2xl text-right mt-5">$ 115</span>
              </div>

              <div>
                <Link
                  href={"/checkout/address"}
                  className="flex btn-primary justify-center w-full mt-10"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
