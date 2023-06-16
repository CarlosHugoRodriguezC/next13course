import Image from "next/image";
import React from "react";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline />,
    title: "Dashboard",
    subtitle: "Data overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator />,
    title: "Counter",
    subtitle: "Increment and decrement",
  },
];

export const Sidebar = () => {


  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[25rem] left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="Profile Picture"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Carlos Rodriguez
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((menuItem) => (
          <SidebarMenuItem
            key={menuItem.path}
            path={menuItem.path}
            icon={menuItem.icon}
            title={menuItem.title}
            subtitle={menuItem.subtitle}
          />
        ))}
      </div>
    </div>
  );
};
