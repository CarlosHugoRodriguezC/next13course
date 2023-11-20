"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoTicket,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* background */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-10"></div>
      )}
      {/* blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeSideMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        ></div>
      )}
      {/* content */}
      {/* TODO: slide effect */}
      <aside
        className={clsx(
          "fixed p-5 right-0 top-0  md:w-[31.25rem] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-0": isSideMenuOpen,
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeSideMenu}
        />
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-0 border-b-2 text-xl border-gray-200 outline-none focus:border-blue-500 transition-all"
          />
        </div>
        <nav>
          <Link
            href="/profile"
            className="flex items-center gap-3 mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoPersonOutline size={30} className="mr-2" />
            <span className="text-xl">Profile</span>
          </Link>
          <Link
            href="/orders"
            className="flex items-center gap-3 mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoTicketOutline size={30} className="mr-2" />
            <span className="text-xl">Orders</span>
          </Link>
          <Link
            href="/auth/login"
            className="flex items-center gap-3 mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogInOutline size={30} className="mr-2" />
            <span className="text-xl">Sign in</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogOutOutline size={30} className="mr-2" />
            <span className="text-xl">Sign out</span>
          </Link>
          {/* line separator */}
          <div className="w-full h-px bg-gray-200 my-10"></div>
          <Link
            href="/orders"
            className="flex items-center gap-3 mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoTicket size={30} className="mr-2" />
            <span className="text-xl">Orders</span>
          </Link>
          <Link
            href="/users"
            className="flex items-center gap-3 mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoPeopleOutline size={30} className="mr-2" />
            <span className="text-xl">Users</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
};
