"use client";

import Image from "next/image";
import siteimage from "@/public/siteimage.png";
import CivicStats from "./Counter";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext"; // ✅ import auth context

const SiteDescription = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext); // ✅ get logged-in user

  const handleReportClick = () => {
    if (!user) {
      router.push("/login"); // if not logged in
    } else {
      router.push("/citizen/create-issue"); // ✅ go to create issue page
    }
  };

  const handleViewReportsClick = () => {
    if (!user) {
      router.push("/login");
    } else {
      router.push("/citizen/reports");
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 lg:px-12">
      {/* Left section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-600 leading-tight"
        >
          Report Public
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-600 leading-tight"
        >
          Issues Easily
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="my-6 text-gray-700 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0"
        >
          CivicConnect helps citizens report local problems like potholes,
          garbage dumps, or broken streetlights in just a few clicks.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-xl border border-gray-300 bg-white shadow hover:shadow-md transition text-blue-600 font-semibold"
            onClick={handleReportClick}
          >
            Report an Issue
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-xl border border-gray-300 bg-white shadow hover:shadow-md transition text-blue-600 font-semibold"
            onClick={handleViewReportsClick}
          >
            View Reports
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <CivicStats />
        </motion.div>
      </div>

      {/* Right section (image) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <Image
          src={siteimage}
          alt="Civic Connect"
          className="h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full sm:w-[80%] lg:w-[30vw] object-cover rounded-2xl shadow"
        />
      </motion.div>
    </section>
  );
};

export default SiteDescription;
