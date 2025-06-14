import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Share Kim",
  description: "Frontend Share Kim's Portfolio",
  authors: [{ name: "김나눔" }],
  keywords: [
    "김나눔",
    "프론트엔드",
    "웹 개발자",
    "포트폴리오",
    "백엔드",
    "frontend",
    "backend",
    "web developer",
    "portfolio",
    "sharekim",
    "share kim",
    "nanum kim",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
