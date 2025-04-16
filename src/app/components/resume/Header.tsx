import { BACKGROUND_COLOR } from "@/constants";
import { Printer } from "lucide-react";
import React from "react";
import { useReactToPrint } from "react-to-print";

export const Header = ({ ref }: { ref?: React.Ref<HTMLDivElement> }) => {
  const data = {
    name: "Nanum Kim",
    title: "Software Engineer",
  };

  const printBtnFn = useReactToPrint({
    contentRef: ref as React.RefObject<HTMLDivElement>,
  });

  return (
    <>
      <header className="mb-4 sm:mb-8 flex justify-between items-end">
        <h1 className="text-lg sm:text-3xl font-bold">
          {data.name}, {data.title}
        </h1>
        <Printer
          className="print:hidden"
          stroke={BACKGROUND_COLOR}
          onClick={() => printBtnFn()}
        />
      </header>
      <div className="h-px bg-gray-300 my-2 sm:my-4"></div>
    </>
  );
};
