"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  limit?: number;
  onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({
  quantity,
  limit,
  onQuantityChanged,
}: Props) => {
  const onValueChange = (value: number) => {
    console.log("value", value);
    if (quantity === 1 && value === -1) return;

    if (quantity === limit && value === 1) return;

    onQuantityChanged(quantity + value);
  };

  return (
    <div className="flex items-center">
      <button
        className="p-2 hover:bg-gray-200 transition-all duration-[400ms] rounded-xl"
        onClick={() => onValueChange(-1)}
      >
        <IoRemoveCircleOutline size="30" />
      </button>
      <span className="w-20 mx-3 py-2 px-5 bg-gray-200 text-center rounded-xl">
        {quantity}
      </span>
      <button
        className="p-2 hover:bg-gray-200 transition-all duration-[400ms] rounded-xl"
        onClick={() => onValueChange(+1)}
      >
        <IoAddCircleOutline size="30" />
      </button>
    </div>
  );
};
