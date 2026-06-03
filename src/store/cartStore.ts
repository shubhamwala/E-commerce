import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, WishlistItem } from '@/types';

interface CartStore {
  items: CartItem[];
  wishlist: WishlistItem[];
  addItem: (product: Product, selectedSize: string, selectedColor: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],

      addItem: (product, selectedSize, selectedColor) => set((state) => {
        const existingItem = state.items.find(
          item => item.product.id === product.id &&
                  item.selectedSize === selectedSize &&
                  item.selectedColor === selectedColor
        );

        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        } else {
          const newItem: CartItem = {
            id: `${product.id}-${selectedSize}-${selectedColor}`,
            product,
            quantity: 1,
            selectedSize,
            selectedColor
          };
          return { items: [...state.items, newItem] };
        }
      }),

      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),

      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        )
      })),

      addToWishlist: (product) => set((state) => {
        const existingItem = state.wishlist.find(item => item.product.id === product.id);
        if (!existingItem) {
          const newItem: WishlistItem = {
            id: product.id,
            product
          };
          return { wishlist: [...state.wishlist, newItem] };
        }
        return state;
      }),

      removeFromWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.filter(item => item.id !== id)
      })),

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items,
        wishlist: state.wishlist
      })
    }
  )
);