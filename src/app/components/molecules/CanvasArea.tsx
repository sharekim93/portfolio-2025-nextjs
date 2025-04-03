"use client";

import { useCallback, useEffect, useRef, memo } from "react";
import CherryBlossom from "@/utils/canvas/CherryBlossom";
import PinkPetal from "@/utils/canvas/PinkPetal";
import { isIOS, isSafari } from "react-device-detect";

const CanvasArea = () => {
  const requestRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blossomsRef = useRef<(CherryBlossom | PinkPetal)[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const randomNumBetween = (min: number, max: number) => {
    return Math.random() * (max - min + 1) + min;
  };

  const handleResize = useCallback(() => {
    if (canvasRef.current && window) {
      const ratio = window.devicePixelRatio || 1;
      canvasRef.current.width = window.innerWidth * ratio;
      canvasRef.current.height = window.innerHeight * ratio;
    }
  }, []);

  const init = useCallback(() => {
    handleResize();
    if (canvasRef.current && window) {
      canvasRef.current.style.position = "fixed";
      canvasRef.current.style.zIndex = "-1";
      canvasRef.current.style.top = "0";
      canvasRef.current.style.left = "0";
      canvasRef.current.style.backgroundColor = "#FAF9F6";

      ctxRef.current = canvasRef.current.getContext("2d", { alpha: false });
    }
  }, [handleResize]);

  const generateBlossoms = useCallback(() => {
    const temporalBlossoms = [];
    const blossomCount = window.innerWidth < 768 ? 5 : 10; // 모바일에서는 더 적게

    for (let i = 0; i < blossomCount; i++) {
      const x = randomNumBetween(0, window.innerWidth);
      const y = randomNumBetween(-200, window.innerHeight);
      const size = randomNumBetween(10, 20);
      const vx = randomNumBetween(-0.2, 0.2);
      const vy = randomNumBetween(0.5, 2);
      const rotationSpeed = 0.08;

      // 색상 다양화
      const colors = ["#FFB7C5", "#FFCCCC", "#FFC0CB", "#FFD1DC", "#FFC6D5"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const blossom = new CherryBlossom(
        x,
        y,
        size,
        vx,
        vy,
        rotationSpeed,
        color
      );
      temporalBlossoms.push(blossom);

      const pinkPetal = new PinkPetal(x, y, size, vx, vy, color);
      temporalBlossoms.push(pinkPetal);
    }

    blossomsRef.current = temporalBlossoms;
  }, []);

  const animate = useCallback((timestamp: DOMHighResTimeStamp) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    const ratio = window.devicePixelRatio || 1;
    const canvasWidth = window.innerWidth * ratio;
    const canvasHeight = window.innerHeight * ratio;

    // 화면 지우기
    ctx.fillStyle = "#FAF9F6";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 성능 최적화: 화면 밖 파티클은 업데이트만 하고 그리지 않음
    blossomsRef.current.forEach((blossom) => {
      blossom.update(timestamp);

      const x = blossom.getX();
      const y = blossom.getY();
      const size = blossom.getSize();

      // 화면에 보이는 파티클만 그리기
      if (
        x + size > 0 &&
        x - size < canvasWidth &&
        y + size > 0 &&
        y - size < canvasHeight
      ) {
        blossom.draw(ctx);
      }
    });
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    init();
    generateBlossoms();

    if (!isSafari) {
      window.addEventListener("resize", handleResize);
    }

    // 스크롤 이벤트 처리 개선
    const handleScroll = () => {
      // 스크롤 중에도 애니메이션 프레임 유지
      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    // passive 옵션으로 성능 최적화
    window.addEventListener("scroll", handleScroll, { passive: true });

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (!isSafari) {
        window.removeEventListener("resize", handleResize);
      }
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, [init, generateBlossoms, animate, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
};

export default memo(CanvasArea);
