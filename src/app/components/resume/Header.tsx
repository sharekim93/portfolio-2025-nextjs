import { BACKGROUND_COLOR } from "@/constants";
import usePdf from "@/hooks/usePdf";
import { Download, Printer } from "lucide-react";
import React from "react";
import { useReactToPrint } from "react-to-print";

export const Header = ({ ref }: { ref?: React.Ref<HTMLDivElement> }) => {
  const data = {
    name: "Nanum Kim",
    title: "Software Engineer",
  };

  const { covertHtmlToPdfAndDownload } = usePdf({ ref });

  const printBtnFn = useReactToPrint({
    contentRef: ref as React.RefObject<HTMLDivElement>,
  });

  const handleDownloadPdf = () => {
    covertHtmlToPdfAndDownload("resume_프론트엔드_김나눔");
  };

  return (
    <>
      <header className="mb-4 sm:mb-8 flex justify-between items-end">
        <h1 className="text-lg sm:text-3xl font-bold">
          {data.name}, {data.title}
        </h1>
        <div className="flex gap-4 not-pdf print:hidden">
          <Download
            className="print:hidden"
            stroke={BACKGROUND_COLOR}
            onClick={() => handleDownloadPdf()}
          />
          <Printer
            className="print:hidden"
            stroke={BACKGROUND_COLOR}
            onClick={() => printBtnFn()}
          />
        </div>
      </header>
      <div className="h-px bg-gray-300 my-2 sm:my-4"></div>
    </>
  );
};
