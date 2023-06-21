"use client";
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { IoBagOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 p-2">
      <SimpleWidget
        title={`${counter.count}`}
        label={"Counter"}
        subTitle="Products in shopping cart"
        href="/dashboard/counter"
        icon={<IoBagOutline size={32} />}
      />
    </div>
  );
};
