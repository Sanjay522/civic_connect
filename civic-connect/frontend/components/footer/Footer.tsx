"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-blue-600 text-white pt-12 pb-6 px-6 lg:px-16"
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">CivicConnect</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Empowering citizens to report issues and build better communities
            with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link href="/features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:underline">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-200 text-sm">Email: support@civicconnect.com</p>
          <p className="text-gray-200 text-sm">Phone: +91 98765 43210</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-200">
        <p>© {new Date().getFullYear()} CivicConnect. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;