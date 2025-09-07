"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Shield, Building2, MapPin, Calendar, Folder } from "lucide-react";

export default function AdminProfile() {
  return (
    <div className="p-6 space-y-8">
      {/* Profile Header */}
      <Card className="shadow-md rounded-2xl border border-gray-200">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-xl font-bold text-white uppercase shadow-md">
              AS
            </div>
            <div>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                Administrator Profile <Shield className="h-5 w-5 text-blue-500" />
              </CardTitle>
              <p className="text-sm text-gray-500">
                Manage your profile and view your resolved issues
              </p>
            </div>
          </div>
          <Button variant="default" className="rounded-xl shadow-sm">
            Edit Profile
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              <span className="font-medium">Full Name:</span> Ayaan Shaikh
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              <Phone className="h-4 w-4 text-green-600" /> 9977108657
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" /> ayaan@mumbai.com
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-purple-600" /> Potholes
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center shadow rounded-2xl border border-gray-100">
          <p className="text-2xl font-bold text-gray-800">1</p>
          <p className="text-sm text-gray-500">Total Issues Handled</p>
        </Card>
        <Card className="p-4 text-center shadow rounded-2xl border border-gray-100">
          <p className="text-2xl font-bold text-green-600">1</p>
          <p className="text-sm text-gray-500">Successfully Resolved</p>
        </Card>
        <Card className="p-4 text-center shadow rounded-2xl border border-gray-100">
          <p className="text-2xl font-bold text-blue-600">0</p>
          <p className="text-sm text-gray-500">Currently Working On</p>
        </Card>
        <Card className="p-4 text-center shadow rounded-2xl border border-gray-100">
          <p className="text-2xl font-bold text-purple-600">0d</p>
          <p className="text-sm text-gray-500">Avg. Resolution Time</p>
        </Card>
      </div>

      {/* Issues Section */}
      <Card className="shadow-md rounded-2xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-green-600">
            Issues I&apos;ve Handled
          </CardTitle>
          <p className="text-sm text-gray-500">
            Track all issues you’ve responded to and resolved
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-xl p-4 bg-gray-50 relative shadow-sm">
            <span className="absolute top-4 right-4 text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-lg">
              Resolved
            </span>
            <h3 className="font-medium text-lg text-gray-800">
              Broken Pipeline
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              The underground pipeline is broken and water is leaking
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Your Response:</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4 text-red-500" /> Old Bypass, 444605,
                Ekvira Nagar, Amravati, Maharashtra, India
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4 text-gray-500" /> Reported: N/A
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Folder className="h-4 w-4 text-yellow-600" /> Category: N/A
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
