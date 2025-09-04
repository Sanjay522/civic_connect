"use client";
import { motion } from "framer-motion";
import { User, ShieldCheck } from "lucide-react";
import Link from "next/link";

const Support = () => {
  return (
    <section className="py-16 bg-gray-100 text-center px-6">
      {/* Heading + Description */}
      <motion.h2
        className="text-3xl font-semibold text-blue-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Need Help?
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We’re here to support both citizens and administrators in resolving
        civic issues quickly and efficiently.
      </motion.p>

      {/* Two Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {/* Citizen */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <User className="w-16 h-16 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Citizen</h3>
          <p className="text-gray-600 mb-4">
            Report issues in your community and track their progress easily.
          </p>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Login as Citizen
          </Link>
        </motion.div>

        {/* Admin */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <ShieldCheck className="w-16 h-16 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Admin</h3>
          <p className="text-gray-600 mb-4">
            Manage reported issues, assign tasks, and keep the city running
            smoothly.
          </p>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Login as Admin
          </Link>
        </motion.div>
      </div>

      {/* Final Support */}
      <motion.p
        className="text-gray-700 text-lg mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Questions? Contact our support team
      </motion.p>
      <a
        href="mailto:support@civicconnect.com"
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Get Support
      </a>
    </section>
  );
};

export default Support;
