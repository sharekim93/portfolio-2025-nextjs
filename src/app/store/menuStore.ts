import { create } from "zustand";
import { MenuStoreType } from "./type";

export const useMenuStore = create<MenuStoreType>()((set) => {
  return {
    tabIndex: 0,
    setTabIndex(index) {
      set({ tabIndex: index });
    },
  };
});
