"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <NextLink
      href={path}
      className={`${style.link} ${pathName === path && style["active-link"]}`}
    >
      {text}
    </NextLink>
  );
};
