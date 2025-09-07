"use client";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import logo from "@/public/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const pathname = usePathname();
  const router = useRouter();

  // Hide navbar on login/register pages
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    logout();         // clear user
    router.push("/"); // redirect to home
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full sticky top-0 z-2000 flex flex-col lg:flex-row justify-between items-center px-6 py-4 shadow-md bg-white"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-4 lg:mb-0">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Image src={logo} alt="Logo" width={48} height={48} />
        </motion.div>
        <span className="text-xl lg:text-2xl font-bold text-blue-600">
          CivicConnect
        </span>
      </Link>

      {/* Navigation Links (only for guests, not logged-in users) */}
      {!user && (
        <div className="flex flex-wrap justify-center gap-6 font-medium text-base lg:text-lg mb-4 lg:mb-0">
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleScroll("features")}>
            Features
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleScroll("howitworks")}>
            How It Works
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleScroll("support")}>
            Contact
          </motion.button>
        </div>
      )}

      {/* Auth Section */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="hidden sm:block font-medium text-gray-700">
              👋 Welcome, <span className="font-semibold">{user.name}</span>
            </span>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href={user.role== "Admin" ? "/admin" : "/citizen"} className="text-base lg:text-lg font-medium">
                Dashboard
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href={user.role== "Admin" ? "/admin/profile" : "/citizen/profile"} className="text-base lg:text-lg font-medium">
                My Profile
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm lg:text-base"
            >
              Logout
            </motion.button>
          </>
        ) : (
          <>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/login" className="text-base lg:text-lg font-medium">
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm lg:text-base"
              >
                Sign Up
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
