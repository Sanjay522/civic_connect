"use client";
import { motion } from "framer-motion";
import { LogIn, ListChecks, Upload, Bell } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    { text: "Login or create an account", icon: <LogIn className="w-8 h-8" /> },
    { text: "Choose the issue category", icon: <ListChecks className="w-8 h-8" /> },
    { text: "Upload photo & location", icon: <Upload className="w-8 h-8" /> },
    { text: "Track status & updates", icon: <Bell className="w-8 h-8" /> },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <motion.h2
        className="text-3xl font-semibold text-blue-600 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 flex-wrap">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-2xl w-64 shadow-md bg-gray-50 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 mb-3"
            >
              {step.icon}
            </motion.div>
            <span className="text-blue-600 font-bold text-xl mb-2">
              Step {i + 1}
            </span>
            <p className="text-gray-700 text-sm">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
