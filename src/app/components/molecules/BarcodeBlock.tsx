"use client";

import useBarcode from "@/hooks/useBarcode";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { isAndroid, isIOS, isMacOs } from "react-device-detect";

type BarcodeData = {
  appStoreUrl: string;
  playStoreUrl: string;
};

const BarcodeBlock = ({ appStoreUrl, playStoreUrl }: BarcodeData) => {
  const { getBarcodeURL } = useBarcode();
  const [barcodeImgSrc, setBarcodeImgSrc] = useState<string | undefined>(
    undefined
  );

  const drawBarcodeToStore = useCallback(() => {
    if (isIOS || isMacOs) {
      return getBarcodeURL({ bcid: "qrcode", text: appStoreUrl }).then(
        (res) => {
          return setBarcodeImgSrc(res);
        }
      );
    } else if (isAndroid) {
      return getBarcodeURL({ bcid: "qrcode", text: playStoreUrl }).then(
        (res) => {
          return setBarcodeImgSrc(res);
        }
      );
    }
  }, [appStoreUrl, playStoreUrl, getBarcodeURL]);

  const moveToStore = () => {
    if (isIOS || isMacOs) {
      window.open(appStoreUrl, "_blank", "noopener,noreferrer");
      return;
    } else if (isAndroid) {
      window.open(playStoreUrl, "_blank", "noopener,noreferrer");
      return;
    }
    return;
  };

  useEffect(() => {
    drawBarcodeToStore();
  }, [drawBarcodeToStore]);
  return (
    <div className="flex flex-col items-center gap-2" onClick={moveToStore}>
      {(isIOS || isMacOs || isAndroid) && barcodeImgSrc && (
        <Image
          className="size-12 min-w-12"
          src={barcodeImgSrc}
          alt="barcode Image"
          width={12}
          height={12}
        />
      )}
      {(isIOS || isMacOs) && (
        <span className="sr-only sm:not-sr-only sm:text-xs">
          App Store로 이동
        </span>
      )}
      {isAndroid && (
        <span className="sr-only sm:not-sr-only sm:text-xs">
          Play Store로 이동
        </span>
      )}
    </div>
  );
};

export default BarcodeBlock;
