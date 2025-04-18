import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import React from "react";

const usePdf = ({ ref }: { ref?: React.Ref<HTMLElement> | undefined }) => {
  const getRef = () => {
    const elementRef = ref as React.RefObject<HTMLDivElement> | null;
    const element = elementRef?.current;

    if (!element) {
      return null;
    }

    return element;
  };

  const hideException = () => {
    const element = getRef();
    element?.querySelectorAll(".not-pdf").forEach((elem) => {
      const htmlElem = elem as HTMLElement;
      const displayAttr = htmlElem.style.display;
      htmlElem.setAttribute("style", "display:none");
      if (displayAttr) {
        htmlElem.setAttribute("display", displayAttr);
      }
    });
  };

  const showException = () => {
    const element = getRef();
    element?.querySelectorAll(".not-pdf").forEach((elem) => {
      const htmlElem = elem as HTMLElement;
      const displayAttr = htmlElem.getAttribute("display") || "";
      // displayAttr 의 여부에 상관없이 설정한다
      htmlElem.setAttribute("style", `display:${displayAttr}`);
      if (displayAttr) {
        htmlElem.removeAttribute("display");
      }
    });
  };

  const covertHtmlToPdfAndDownload = async (fileName?: string) => {
    const element = getRef();
    if (!element) return;

    hideException();

    const canvas = await html2canvas(element, { removeContainer: true });
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
    pdf.save(`${fileName}.pdf`);

    showException();
  };

  return { covertHtmlToPdfAndDownload };
};

export default usePdf;
