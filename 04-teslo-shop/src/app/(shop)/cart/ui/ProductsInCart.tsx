"use client";

import { QuantitySelector } from "@/components";
import { CartProduct } from "@/interfaces";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ProductsInCart = () => {
  const productsInCart = useCartStore((store) => store.cart);
  const updateProductQuantity = useCartStore(
    (store) => store.updateProductQuantity
  );
  const removeProductFromCart = useCartStore(
    (store) => store.removeProductFromCart
  );

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="bg-white p-3 rounded-xl flex gap-3">
        <div className="bg-gray-200 animate-pulse h-full w-20 rounded-xl"></div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="bg-gray-200 animate-pulse h-4 rounded-lg"></div>
          <div className="bg-gray-200 animate-pulse h-4 rounded-lg w-1/3"></div>
          <div className="bg-gray-200 animate-pulse h-4 rounded-lg w-2/3"></div>
          <div className="bg-gray-200 animate-pulse h-4 rounded-lg w-1/3"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div
          key={`${product?.slug}-${product.size}`}
          className="flex gap-3 mb-5"
        >
          <Image
            src={`/products/${product?.image}`}
            alt={product?.title ?? ""}
            width={100}
            height={100}
            className="object-cover rounded-xl w-28 h-28"
          />
          <div>
            <Link className="hover:underline" href={`/product/${product.slug}`}>
              {product?.title ?? ""}
            </Link>
            <p>{currencyFormat(product.price ?? 0)}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={(quantity) =>
                updateProductQuantity(product, quantity)
              }
            />
            <button
              className="underline"
              onClick={() => removeProductFromCart(product)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
