"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import potholes from "@/public/optionsImage/image.png"
import garbage from "@/public/optionsImage/image copy.png"
import streetLight from "@/public/optionsImage/image copy 3.png"
import waterLeakage from "@/public/optionsImage/image copy 2.png"

const ReportOptions = () => {
  const options = [
    {
      title: "Potholes",
      description:
        "Report potholes, damaged roads, broken sidewalks, and street maintenance issues.",
      totalReports: 123,
      image: potholes, 
    },
    {
      title: "Garbage",
      description:
        "Highlight uncollected garbage, overflowing bins, or illegal dumping in your locality.",
      totalReports: 87,
      image: garbage,
    },
    {
      title: "Streetlight",
      description:
        "Report broken, flickering, or non-functional streetlights to ensure public safety.",
      totalReports: 56,
      image:streetLight,
    },
    {
      title: "Water Leakage",
      description:
        "Notify about leaking pipes, water wastage, or damaged public water infrastructure.",
      totalReports: 42,
      image: waterLeakage,
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Can You Report?
      </motion.h2>
      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mb-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Our platform covers a wide range of civic issues to help keep your
        community safe and well-maintained.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {options.map((o, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 mb-4 relative"
            >
              <Image
                src={o.image}
                alt={o.title}
                fill
                className="rounded-full object-cover shadow"
              />
            </motion.div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {o.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{o.description}</p>
            <span className="text-sm font-medium text-blue-600">
              {o.totalReports}+ reports
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReportOptions;
