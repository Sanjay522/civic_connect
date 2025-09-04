"use client";
import { useState } from "react";
import Link from "next/link"; // ✅ use next/link instead of react-router
import Image from "next/image";
import { MapPin, Clock, User, Plus, Search } from "lucide-react";
import { motion } from "framer-motion";

// Fake data (replace later with API)
const DUMMY_ISSUES = [
  {
    _id: "1",
    title: "Pothole on Main Street",
    description: "Large pothole making the road unsafe for vehicles.",
    type: "Road",
    location: {
      address: "Main Street, Downtown",
      latitude: 0,
      longitude: 0,
    },
    reportedBy: "John Doe",
    reportedAt: "2025-09-05",
    // image: "/placeholder.jpg",
    status: "Pending",
  },
  {
    _id: "2",
    title: "Streetlight not working",
    description: "Streetlight near the park has been out for a week.",
    type: "Lighting",
    location: {
      address: "Green Park, Central City",
      latitude: 0,
      longitude: 0,
    },
    reportedBy: "Jane Smith",
    reportedAt: "2025-09-02",
    // image: "/placeholder.jpg",
    status: "Resolved",
  },
];

const CitizenHome = () => {
  const [searchCity, setSearchCity] = useState("");

  const filteredIssues = searchCity
    ? DUMMY_ISSUES.filter((issue) =>
        issue.location.address.toLowerCase().includes(searchCity.toLowerCase())
      )
    : DUMMY_ISSUES;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Rejected":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f3f6f8]"
    >
      {/* <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-[#0577b7]">Citizen Dashboard</h1>
          <Link
            href="/citizen/profile"
            className="text-sm px-4 py-2 rounded-full border border-gray-300 text-slate-600 hover:bg-gray-100 transition"
          >
            My Profile
          </Link>
        </div>
      </header> */}

      <main className="container mx-auto px-6 pt-28 pb-12 space-y-10">
        <div>
          <h2 className="text-3xl font-extrabold text-[#0577b7]">
            Welcome, Citizen!
          </h2>
          <p className="text-gray-500 mt-2">
            Help improve your community by reporting issues
          </p>
        </div>

        {/* Search bar */}
        <div>
          <h3 className="text-xl font-semibold text-slate-600 mb-4">
            Search Issues by Location
          </h3>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter city name..."
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0577b7]"
            />
          </div>
        </div>

        {/* Issues */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-sky-600">
              Recent Issues{" "}
              {searchCity && (
                <span className="text-lg font-normal text-gray-400 ml-2">
                  in {searchCity}
                </span>
              )}
            </h3>
            <span className="text-sm text-gray-400">
              {filteredIssues.length} issue
              {filteredIssues.length !== 1 ? "s" : ""} found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIssues.map((issue) => (
              <div
                key={issue._id}
                className="rounded-2xl bg-white shadow hover:shadow-lg transition p-4"
              >
                <div className="relative h-40 overflow-hidden rounded-xl mb-4">
                  {/* <Image
                    src={issue.image}
                    alt={issue.title}
                    fill
                    className="object-cover rounded-xl"
                  /> */}
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      issue.status
                    )}`}
                  >
                    {issue.status}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {issue.title}
                </h4>
                <p className="text-gray-500 text-sm mb-3">
                  {issue.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{issue.location.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span>Reported by {issue.reportedBy}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{issue.reportedAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredIssues.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No issues found {searchCity && `in ${searchCity}`}
            </div>
          )}
        </div>

        {/* Floating Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Link href="/citizen/create-issue">
            <button className="bg-gradient-to-r from-[#0577b7] to-[#05a6c2] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
              <Plus className="inline-block h-5 w-5 mr-2" />
              Report New Issue
            </button>
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default CitizenHome;
