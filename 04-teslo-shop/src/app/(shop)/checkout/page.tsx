import { Title } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products.at(0),
  initialData.products.at(1),
  initialData.products.at(2),
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={"Checkout - Confirm Your Order"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}

          <div className="flex flex-col mt-5">
            <span>Modify items</span>
            <Link href={"/cart"} className="underline mb-5">
              Edit shopping
            </Link>

            {/* Items */}

            {productsInCart.map((product) => (
              <div key={product?.slug} className="flex gap-3 mb-5">
                <Image
                  src={`/products/${product?.images.at(0) ?? ""}`}
                  alt={product?.title ?? ""}
                  width={100}
                  height={100}
                  className="object-cover rounded-xl w-28 h-28"
                />
                <div>
                  <p>{product?.title ?? ""}</p>
                  <p>${product?.price ?? ""} x 3</p>
                  <p className="font-bold">
                    Subtotal: ${product?.price ?? 0 * 3}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-7">
              <h2 className="text-2xl mb-2">Shipping Address</h2>

              <div>
                <p className="font-bold">John Doe</p>
                <p>742 Evergreen Avenue</p>
                <p>Springfield, OR 97477</p>
                <p>United States</p>
              </div>

              <hr className="my-5" />

              <h2 className="text-2xl mb-2">Order Summary</h2>

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

              <div className="mt-10">
                <p className="text-sm">
                  By clicking the button below, you agree to our{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    terms and conditions
                  </a>
                  .
                </p>
                <Link
                  href={"/orders/zxcvbnm"}
                  className="flex btn-primary justify-center w-full"
                >
                  Place order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
