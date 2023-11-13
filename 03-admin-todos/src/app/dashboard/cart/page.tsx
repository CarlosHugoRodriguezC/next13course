import { WidgetItem } from "@/components";
import { Product, products } from "@/products";
import { ItemCard } from "@/shoping-cart/components/ItemCard";
import { Metadata } from "next";
import { cookies } from "next/dist/client/components/headers";
import React from "react";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

export default function page() {
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}") as Record<
    string,
    number
  >;

  const cartItems = Object.keys(cart).map((key) => ({
    product: products.find((product) => product.id === key)!,
    quantity: cart[key],
  }));

  const totalToPay = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito </h1>
      <hr className="mb-2" />
      <div className="flex">
        <div className="flex flex-col gap-2 w-full">
          {cartItems.map((item) => (
            <div className="snap-normal snap-center  px-2">
              <ItemCard product={item.product} quantity={item.quantity} />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Total a pagar">
            <div className="mt-2 flex justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">
                ${(totalToPay + totalToPay * 0.15).toFixed(2)}
              </h3>
            </div>
            <span className="font-bold text-center text-gray-500">
              Inpuestos 15%
            </span>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}
