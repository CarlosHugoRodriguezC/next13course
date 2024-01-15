"use client";

import React, { useState } from "react";
import { SizeSelector, QuantitySelector } from "@/components";
import { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((store) => store.addProductToCart);
  const [selectedSize, setSize] = useState<Size | undefined>(undefined);
  const [selectedQuantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const onSizeSelected = (size: Size) => {
    setSize(size);
  };

  const onQuantityChanged = (quantity: number) => {
    setQuantity(quantity);
  };

  const onAddToCart = () => {
    setPosted(true);
    if (!selectedSize) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: selectedQuantity,
      size: selectedSize,
      image: product.images[0],
    };

    addProductToCart(cartProduct);

    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };

  return (
    <>
      {posted && !selectedSize && (
        <p className="bg-red-300 px-5 rounded-xl py-2 text-sm fade-in">
          Please select a size.
        </p>
      )}
      {/* size selector */}
      <SizeSelector
        selectedSize={selectedSize}
        availableSizes={product.sizes}
        onSizeSelected={onSizeSelected}
      />
      {/* quantity selector */}
      <QuantitySelector
        quantity={selectedQuantity}
        limit={product.inStock}
        onQuantityChanged={onQuantityChanged}
      />
      {/* add to cart button */}
      <button className="btn-primary mt-5 w-full" onClick={onAddToCart}>
        Add to cart
      </button>
    </>
  );
};
