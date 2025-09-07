"use client";

import "./globals.css";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Pages where Navbar & Footer should be hidden
  const hideNavbarFooterRoutes = ["/create-issue"];

  const shouldHide = hideNavbarFooterRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900 w-[80vw] m-auto">
        <AuthProvider>
          {!shouldHide && <Navbar />}
          <main>{children}</main>
          <Toaster position="top-right" reverseOrder={false} />
          {!shouldHide && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}
