"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useMenuStore } from "@/store/menuStore";
import MenuActions from "./MenuActions";

const GnbMenu = () => {
  const MENU = ["Resume", "Post"];

  const { tabIndex: activeTabIndex } = useMenuStore();
  const setTabIndex = useMenuStore((state) => state.setTabIndex);

  const isActive = (tabIndex: number) =>
    tabIndex === activeTabIndex ? "active" : "inactive";

  return (
    <div className="flex items-center justify-start pl-3 pb-3 fixed top-0 left-0 right-0 bg-[#FAF9F6] border-b-[0.5px]">
      <div role="tablist" className="h-10 flex pt-2">
        {MENU.map((menu, index) => {
          return (
            <Button
              key={`menu-${index}-${menu}`}
              role="tab"
              tabIndex={index}
              data-state={isActive(index)}
              className="
          inline-flex items-center justify-center 
          whitespace-nowrap 
          text-sm font-semibold text-muted-foreground
          py-1 px-4 pb-3 pt-2
          
          focus-visible:outline-none
          focus-visible:ring-2 
          focus-visible:ring-ring
          focus-visible:ring-offset-2 
          
          disabled:pointer-events-none
          disabled:opacity-50
          
          relative h-9
          rounded-none shadow-none transition-none
          border-b-2 border-b-transparent 
          bg-transparent 

          hover:bg-transparent
          hover:text-foreground

          data-[state=active]:border-b-primary
          data-[state=active]:text-foreground 
          data-[state=active]:shadow-none"
              onClick={() => setTabIndex(index)}
            >
              {menu}
            </Button>
          );
        })}
      </div>
      <MenuActions />
    </div>
  );
};

export default GnbMenu;
