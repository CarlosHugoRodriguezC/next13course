import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SumaryInformation {
  subtotal: number;
  totalItems: number;
  taxes: number;
  total: number;
}

export interface State {
  cart: CartProduct[];
  getTotalItems: () => number;
  getSumaryInformation: () => SumaryInformation;
  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProductFromCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      getSumaryInformation: () => {
        const { cart } = get();

        const subtotal = cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        const totalItems = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const taxes = subtotal * 0.15;
        const total = subtotal + taxes;

        return {
          subtotal,
          totalItems,
          taxes,
          total,
        };
      },
      addProductToCart: (product) => {
        const { cart } = get();

        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },
      updateProductQuantity: (product, quantity) => {
        const { cart } = get();

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity,
            };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },
      removeProductFromCart: (product) => {
        const { cart } = get();

        const updatedCartProducts = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );

        set({ cart: updatedCartProducts });
      },
    }),
    {
      name: "shopping-cart",
      //   skipHydration: true,
    }
  )
);
