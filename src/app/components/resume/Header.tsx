import { BACKGROUND_COLOR } from "@/constants";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Printer } from "lucide-react";
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

  const handleDownloadPdf = async () => {
    const elementRef = ref as React.RefObject<HTMLDivElement> | null;
    const element = elementRef?.current;
    if (!element) {
      return;
    }
    const canvas = await html2canvas(element);
    const componentWidth = element.offsetWidth;
    const componentHeight = element.offsetHeight;

    const orientation = componentWidth >= componentHeight ? "l" : "p";

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation,
      unit: "px",
    });

    pdf.internal.pageSize.width = componentWidth;
    pdf.internal.pageSize.height = componentHeight;

    pdf.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
    pdf.save("resume_김나눔.pdf");
  };

  return (
    <>
      <header className="mb-4 sm:mb-8 flex justify-between items-end">
        <h1 className="text-lg sm:text-3xl font-bold">
          {data.name}, {data.title}
        </h1>
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
      </header>
      <div className="h-px bg-gray-300 my-2 sm:my-4"></div>
    </>
  );
};
