"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const OrderSummary = () => {
  const { subtotal, total, totalItems, taxes } = useCartStore((store) =>
    store.getSumaryInformation()
  );

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-7 flex flex-col gap-3">
        <div className="bg-gray-200 animate-pulse h-5 rounded-md w-1/3"></div>
        <hr />
        <div className="bg-gray-200 animate-pulse h-5 rounded-md"></div>
        <div className="bg-gray-200 animate-pulse h-5 rounded-md"></div>
        <div className="bg-gray-200 animate-pulse h-5 rounded-md"></div>
        <div className="bg-gray-200 animate-pulse h-5 rounded-md"></div>
        <div className="bg-gray-200 animate-pulse h-10 rounded-md"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-7">
      <h2 className="text-2xl mb-2">Order Summary</h2>
      <hr />

      <div className="grid grid-cols-2">
        <span>No. Products</span>
        <span className="text-right">
          {totalItems} item{totalItems > 1 && "s"}
        </span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subtotal)}</span>

        <span>Taxes (15%)</span>
        <span className="text-right">{currencyFormat(taxes)}</span>

        <span className="text-2xl mt-5">Total</span>
        <span className="text-2xl text-right mt-5">
          {currencyFormat(total)}
        </span>
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
  );
};
