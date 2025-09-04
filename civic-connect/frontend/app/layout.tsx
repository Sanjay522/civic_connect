
import "./globals.css";

import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900 w-[80vw] m-auto">
        <AuthProvider>

        <Navbar />
        <main>{children}</main>
                <Toaster position="top-right" reverseOrder={false} />

        <Footer />
                </AuthProvider>

      </body>
    </html>
  );
}
