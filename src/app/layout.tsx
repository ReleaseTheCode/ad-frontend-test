import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { TopMenu } from "@/components";
import { Footer } from "@/components/ui/Footer";

const archive = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archive.className}>
        <div className="h-screen">
          <TopMenu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
