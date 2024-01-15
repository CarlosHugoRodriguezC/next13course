"use client";
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline, IoMenuOutline } from "react-icons/io5";
import { useCartStore, useUIStore } from "@/store";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const getTotalItemsInCart = useCartStore((store) => store.getTotalItems());

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav className="flex justify-between px-5 py-3 w-full sticky top-0 z-10 enhance-topbar">
      {/* Logo */}
      <div className="">
        <Link href={"/"}>
          <span
            className={`${titleFont.className} antialiased font-bold uppercase tracking-[0.40rem]`}
          >
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-1 p-2 rounded-lg transition-all hover:bg-gray-100"
          href={"/gender/men"}
        >
          Men
        </Link>
        <Link
          className="m-1 p-2 rounded-lg transition-all hover:bg-gray-100"
          href={"/gender/women"}
        >
          Women
        </Link>
        <Link
          className="m-1 p-2 rounded-lg transition-all hover:bg-gray-100"
          href={"/gender/kid"}
        >
          Kids
        </Link>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link href={"/search"}>
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href={"/cart"} className="relative">
          <IoCartOutline className="w-5 h-5" />
          {isLoaded && getTotalItemsInCart > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full px-1 text-xs">
              {getTotalItemsInCart}
            </span>
          )}
        </Link>
        <button
          className="p-2 rounded-md transition-all hover:bg-gray-100 "
          onClick={openSideMenu}
        >
          <IoMenuOutline className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};
