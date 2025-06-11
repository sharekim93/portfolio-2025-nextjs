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
  other:{
    "naver-site-verification":"133ad8efff8ec3c9c3439010d5c56ba40105d823"
  }
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
