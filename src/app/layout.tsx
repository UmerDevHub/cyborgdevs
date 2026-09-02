import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeDeft — We Build What's Next",
  description:
    "We design and develop high-performance websites, mobile apps, AI solutions, SaaS platforms, and custom software that turn ambitious ideas into scalable digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-white">
        {children}
      </body>
    </html>
  );
}
