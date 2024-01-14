"use client";

import { getStockBySlug } from "@/actions";
import React, { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const stock = await getStockBySlug(slug);
    setStock(stock);
    setIsLoading(false);
  };

  return (
    <>
      <p className="text-end font-semibold mb-5">
        {isLoading ? (
          <span className="animate-pulse bg-gray-300 px-10 rounded-md">
            &nbsp;
          </span>
        ) : (
          <span className="rounded-md text-sm">{stock} available</span>
        )}
      </p>
    </>
  );
};
