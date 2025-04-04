import { create } from "zustand";
import { MenuStoreType } from "./type";
import { combine, createJSONStorage, persist } from "zustand/middleware";

export const useMenuStore = create<MenuStoreType>()(
  persist(
    combine(
      {
        tabIndex: 0,
      },
      (set) => ({
        setTabIndex(index: number) {
          set({ tabIndex: index });
        },
      })
    ),
    {
      name: "tabIndex",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (currentState) => ({
        tabIndex: currentState.tabIndex, // tabIndex 속성만 스토리지에 저장
      }),
    }
  )
);
