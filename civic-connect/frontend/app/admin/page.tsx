"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Edit, Trash2, Check } from "lucide-react";

type Issue = {
  id: number;
  title: string;
  location: string;
  status: "Pending" | "In Progress" | "Resolved";
};

const AdminDashboard = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [issues, setIssues] = useState<Issue[]>([
    { id: 1, title: "Broken Pipeline", location: "Old Bypass, Amravati, Maharashtra", status: "Pending" },
    { id: 2, title: "Garbage Littered", location: "Paratwada Road, Amravati, Maharashtra", status: "In Progress" },
    { id: 3, title: "Electric Pole", location: "Sai Nagar, Amravati, Maharashtra", status: "In Progress" },
    { id: 4, title: "Potholes", location: "Patvipura, Amravati, Maharashtra", status: "Pending" },
    { id: 5, title: "Broken road in front of my shop", location: "Tadimari, Andhra Pradesh", status: "Resolved" },
  ]);

  const handleStatusChange = (id: number, newStatus: Issue["status"]) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
    setEditingId(null); // exit edit mode
  };

  const handleDelete = (id: number) => {
    setIssues((prev) => prev.filter((issue) => issue.id !== id));
  };

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch = issue.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" ? true : issue.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="px-6 py-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-700">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">Manage and resolve community issues</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-2xl font-bold">{issues.length}</h2>
          <p className="text-gray-500">Total Issues</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-2xl font-bold text-yellow-600">
            {issues.filter((i) => i.status === "Pending").length}
          </h2>
          <p className="text-gray-500">Pending</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-2xl font-bold text-green-600">
            {issues.filter((i) => i.status === "Resolved").length}
          </h2>
          <p className="text-gray-500">Resolved</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-2xl font-bold text-blue-600">
            {issues.filter((i) => i.status === "In Progress").length}
          </h2>
          <p className="text-gray-500">In Progress</p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3">
        <Input
          placeholder="Search issues..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <select
          className="border rounded-lg px-3 py-2 text-gray-700"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* Issues Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredIssues.map((issue) => (
              <tr key={issue.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium text-blue-700">{issue.title}</td>
                <td className="p-3 text-gray-600">{issue.location}</td>
                <td className="p-3">
                  {editingId === issue.id ? (
                    <select
                      className="px-3 py-1 rounded-lg border text-sm"
                      value={issue.status}
                      onChange={(e) =>
                        handleStatusChange(issue.id, e.target.value as Issue["status"])
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  ) : (
                    <span
                      className={`px-2 py-1 rounded-lg text-sm ${
                        issue.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : issue.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {issue.status}
                    </span>
                  )}
                </td>
                <td className="p-3 flex gap-2">
                  {editingId === issue.id ? (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingId(null)}
                    >
                      <Check className="h-4 w-4 text-green-600" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingId(issue.id)}
                    >
                      <Edit className="h-4 w-4 text-blue-600" />
                    </Button>
                  )}
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(issue.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
            {filteredIssues.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center p-6 text-gray-500">
                  No issues found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
