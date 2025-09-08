"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CitizenProfile() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "sanjay",
    email: "sanjay@gmail.com",
    phone: "7894561234",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Citizen Profile</h1>
        <button
          onClick={() => router.push("/citizen/edit-profile")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Edit Profile
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-800">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-2xl font-bold text-gray-800">0</p>
          <p className="text-gray-600">Total Issues</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-2xl font-bold text-green-600">0</p>
          <p className="text-gray-600">Resolved</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-2xl font-bold text-blue-600">0</p>
          <p className="text-gray-600">In Progress</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-2xl font-bold text-yellow-600">0</p>
          <p className="text-gray-600">Pending</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">My Reported Issues</h2>
        <p className="text-gray-600">Track the status of all issues you’ve reported.</p>
        <div className="mt-4 text-gray-500">Loading your issues...</div>
      </div>
    </div>
  );
}
 