// app/store/cart.ts

import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item: CartItem) =>
    set((state) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        // Increase the quantity if it exists
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        };
      }
      // Otherwise, add the item with quantity 1
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  removeItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id)
    })),
  clearCart: () => set({ items: [] })
}));
