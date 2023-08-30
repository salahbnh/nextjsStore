import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { Product } from '@/types';
import { AlertTriangle } from 'lucide-react';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateItem: (updatedItem: Product) => void; // Add this line

}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);

      if (existingItemIndex !== -1) {
        // Item already exists, increment quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += 1;

        set({ items: updatedItems });
        toast.success('Item added to cart.');
      } else {
        // New item, add with quantity 1
        const itemWithQuantity = { ...data, quantity: 1 };
        set({ items: [...currentItems, itemWithQuantity] });
        toast.success('Item added to cart.');
      }
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success('Item removed from cart.');
    },
    
    removeAll: () => set({ items: [] }),
    updateItem: (updatedItem: Product) => {
      const currentItems = get().items;
      const updatedItems = currentItems.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      );
      set({ items: updatedItems });
      toast.success('Item quantity updated.');
    },
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
  
);

export default useCart;
