"use client";
import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CardCounter = ({ value = 10 }: Props) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-3">
        <button
          className="px-2 py-1 rounded-xl bg-gray-300 text-black hover:bg-gray-200 transition-all min-w-[4rem]"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
        <button
          className="px-2 py-1 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all min-w-[4rem]"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
      </div>
    </>
  );
};
