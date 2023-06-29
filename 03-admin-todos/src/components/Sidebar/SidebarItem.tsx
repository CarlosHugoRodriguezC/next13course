"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  path: string;
}

export const SidebarItem = ({ title, icon, path }: MenuItemProps) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`${
          path === pathname
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : ""
        } relative px-4 py-3 flex items-center space-x-4 rounded-xl transition-all duration-500 ease-in-out`}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};
