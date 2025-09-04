"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "2847", label: "Issues Resolved" },
  { value: "15239", label: "Active Citizens" },
  { value: "48", label: "Avg Response (h)" }, // adjusted to just number
];

// Hook to animate number counting
const useCounter = (target: number, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60); // 60 frames/sec
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [target, duration]);

  return count;
};

export default function CivicStats() {
  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      {stats.map((stat) => {
        const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ""), 10);
        const count = useCounter(targetValue, 2);

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-3xl font-bold text-blue-600">
              {count.toLocaleString()}
              {stat.label.includes("h") && "h"}
            </div>
            <div className="text-gray-600 mt-1">{stat.label}</div>
          </motion.div>
        );
      })}
    </section>
  );
}
