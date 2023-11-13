// 'use client'

import { getCookie, hasCookie, setCookie } from "cookies-next";

/* 
{
    'productId': 1,
}
*/

export const getCookieCart = (): Record<string, number> => {
  if (!hasCookie("cart")) return {};

  const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");

  return cookieCart;
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (!cookieCart[id]) return;

  delete cookieCart[id];

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeSingleProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (!cookieCart[id]) return;

  if (cookieCart[id] <= 1) return;

  cookieCart[id] -= 1;

  setCookie("cart", JSON.stringify(cookieCart));
};
