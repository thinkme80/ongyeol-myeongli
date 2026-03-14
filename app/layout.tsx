import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "온결 명리 | 따뜻한 사주 명리 상담",
  description: "온결 명리는 따뜻하고 전문적인 사주 명리 상담 서비스입니다. 인생의 방향, 직업, 연애, 결혼, 사업운을 명리학으로 함께 살펴드립니다.",
  keywords: "사주, 명리, 사주 상담, 명리 상담, 궁합, 운세, 사주팔자",
  openGraph: {
    title: "온결 명리 | 따뜻한 사주 명리 상담",
    description: "온결 명리는 따뜻하고 전문적인 사주 명리 상담 서비스입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
