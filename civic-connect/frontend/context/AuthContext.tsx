// context/AuthContext.tsx
"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import pothole from "@/public/optionsImage/image.png"
import streetlight from "@/public/optionsImage/image copy.png"
import garbage from "@/public/optionsImage/image copy 3.png"
import waterleak from "@/public/optionsImage/image copy 2.png"
import { StaticImageData } from "next/image";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Citizen" | "Admin";
};

type Issue = {
  id: string;
  title: string;
  img: string | StaticImageData; // <-- allow both
  description: string;
  type: string;
  address: string;
  position: [number, number] | null;
  file?: File | null;
  status: "Pending" | "In Progress" | "Resolved";
  createdAt: Date;
};

type AuthContextType = {
  user: User | null;
  issues: Issue[];
  login: (email: string, password: string, role: "Citizen" | "Admin") => Promise<void>;
  logout: () => void;
  raiseIssue: (
    title: string,
    description: string,
    type?: string,
    address?: string,
    position?: [number, number] | null,
    file?: File | null
  ) => void;
  updateIssueStatus: (id: string, status: "Pending" | "In Progress" | "Resolved") => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  issues: [],
  login: async () => {},
  logout: () => {},
  raiseIssue: () => {},
  updateIssueStatus: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  // ✅ Preload 4-5 fake issues when app starts
  useEffect(() => {
    const initialIssues: Issue[] = [
      {
        id: "101",
        title: "Pothole on Main Street",
        description: "A large pothole is causing traffic issues.",
        type: "Road",
        address: "Main Street, Block A",
        position: [28.6139, 77.209], // Delhi coords
        status: "Pending",
        createdAt: new Date("2025-09-01T10:00:00"),
        img:pothole,
      },
      {
        id: "102",
        title: "Streetlight not working",
        description: "Streetlight near park has been off for 3 days.",
        type: "Electricity",
        address: "Park Lane, Sector 12",
        position: [19.076, 72.8777], // Mumbai coords
        status: "In Progress",
        createdAt: new Date("2025-09-02T15:30:00"),
                img:streetlight,

      },
      {
        id: "103",
        title: "Garbage not collected",
        description: "Garbage pile-up in front of house.",
        type: "Sanitation",
        address: "House No. 45, Sector 8",
        position: [12.9716, 77.5946], // Bangalore coords
        status: "Resolved",
        createdAt: new Date("2025-09-03T08:45:00"),
                img:garbage,

      },
      {
        id: "104",
        title: "Broken Water Pipe",
        description: "Water leaking on the road, causing flooding.",
        type: "Water",
        address: "MG Road, Near Metro Station",
        position: [22.5726, 88.3639], // Kolkata coords
        status: "Pending",
        createdAt: new Date("2025-09-04T12:20:00"),
                img:waterleak,

      },
      // {
      //   id: "105",
      //   title: "Illegal Parking",
      //   description: "Cars parked illegally blocking pedestrians.",
      //   type: "Traffic",
      //   address: "Connaught Place, Delhi",
      //   position: [28.6315, 77.2167],
      //   status: "Pending",
      //   createdAt: new Date("2025-09-05T09:10:00"),
      // },
    ];

    setIssues(initialIssues);
  }, []);

  // ✅ Login
  const login = async (email: string, password: string, role: "Citizen" | "Admin") => {
    const adminCredentials = { email: "admin@example.com", password: "admin123" };
    const citizenCredentials = { email: "citizen@example.com", password: "citizen123" };

    if (
      (role === "Admin" &&
        email === adminCredentials.email &&
        password === adminCredentials.password) ||
      (role === "Citizen" &&
        email === citizenCredentials.email &&
        password === citizenCredentials.password)
    ) {
      const fakeUser: User = {
        id: "1",
        name: role === "Admin" ? "Admin User" : "Citizen User",
        email,
        role,
      };
      setUser(fakeUser);
    } else {
      alert("Invalid credentials");
    }
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    setIssues([]); // clear on logout
  };

  // ✅ Raise Issue
  const raiseIssue = (
    title: string,
    description: string,
    type: string = "Other",
    address: string = "",
    position: [number, number] | null = null,
    file: File | null = null
  ) => {
    if (!user || user.role !== "Citizen") {
      alert("Only citizens can raise issues");
      return;
    }

    const newIssue: Issue = {
      id: Date.now().toString(),
      title,
      description,
      type,
      address,
      position,
      file,
      status: "Pending",
      createdAt: new Date(),
    };

    setIssues((prev) => [...prev, newIssue]);
  };

  // ✅ Update Issue Status
  const updateIssueStatus = (id: string, status: "Pending" | "In Progress" | "Resolved") => {
    if (!user || user.role !== "Admin") {
      alert("Only admins can update issue status");
      return;
    }

    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id ? { ...issue, status } : issue
      )
    );
  };

  return (
    <AuthContext.Provider value={{ user, issues, login, logout, raiseIssue, updateIssueStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
