import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lauren Jones Photography and Art ",
  description: "Artist Portfolio by Lauren Jones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
 <Navbar />
        {children}
        <Toaster position="top-right" />
 <Footer/>
      </body>
    </html>
  );
}
