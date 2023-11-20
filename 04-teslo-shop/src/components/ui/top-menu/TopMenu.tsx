"use client";
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline, IoMenuOutline } from "react-icons/io5";
import { useUIStore } from "@/store";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

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
          href={"/category/men"}
        >
          Men
        </Link>
        <Link
          className="m-1 p-2 rounded-lg transition-all hover:bg-gray-100"
          href={"/category/women"}
        >
          Women
        </Link>
        <Link
          className="m-1 p-2 rounded-lg transition-all hover:bg-gray-100"
          href={"/category/kid"}
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
          <span className="absolute -top-2 -right-2 w-4 h-4 px-1 text-xs text-center text-white bg-blue-500 rounded-full">
            3
          </span>
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
