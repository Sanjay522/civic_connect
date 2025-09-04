"use client";

import { motion } from "framer-motion";
import {
  Camera,
  MapPin,
  Users,
  Bell,
  LayoutDashboard,
  BarChart3,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Photo Documentation",
      desc: "Capture and upload high-quality images of infrastructure issues with automatic metadata tagging.",
      icon: Camera,
    },
    {
      title: "GPS Location Tracking",
      desc: "Precise location capture using GPS coordinates ensures accurate issue positioning and faster response.",
      icon: MapPin,
    },
    {
      title: "Community Engagement",
      desc: "Connect with neighbors, track issue status, and see the impact of your reports on the community.",
      icon: Users,
    },
    {
      title: "Real-time Updates",
      desc: "Get instant notifications about your reported issues and track resolution progress in real-time.",
      icon: Bell,
    },
    {
      title: "Admin Dashboard",
      desc: "Comprehensive administrative tools for managing reports, assigning tasks, and monitoring city-wide issues.",
      icon: LayoutDashboard,
    },
    {
      title: "Analytics & Insights",
      desc: "Data-driven insights help administrators prioritize resources and track community improvement trends.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-16 bg-white px-6 lg:px-12">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
          Powerful Features for Better Communities
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl">
          Everything you need to report, track, and resolve civic issues
          efficiently and effectively.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-white"
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
                <Icon size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
