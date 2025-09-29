import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cart App",
  description: "A simple cart app built with Next.js and Zustand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
