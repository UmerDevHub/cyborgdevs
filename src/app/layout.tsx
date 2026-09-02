import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeDeft — We Build What's Next",
  description:
    "We design and develop high-performance websites, mobile apps, AI solutions, SaaS platforms, and custom software that turn ambitious ideas into scalable digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-white">
        {children}
      </body>
    </html>
  );
}
