import NextLink from "next/link";
import { ActiveLink } from "@/components";
import { HomeIcon } from "@primer/octicons-react";

const NavItems = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/pricing",
    text: "Pricing",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="flex gap-3 bg-blue-800 bg-opacity-80 text-white py-2 px-4 m-2 rounded-lg">
      <NextLink href={"/"} className="flex items-center gap-2">
        <HomeIcon /> Home
      </NextLink>
      <div className="flex-1"></div>
      {NavItems.map((navItem) => (
        <ActiveLink {...navItem} key={navItem.path} />
      ))}
    </nav>
  );
};
