"use client";

import { getStockBySlug } from "@/actions";
import React, { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    // TODO: get stock from server
    const stock = await getStockBySlug(slug);
    setStock(stock);
    console.log(stock);
  };

  return (
    <p className="text-end font-semibold mb-5">
      <small>{stock} available</small>
    </p>
  );
};
