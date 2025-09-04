// context/AuthContext.tsx
"use client";
import { createContext, useState, ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Citizen" | "Admin";
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string, role: "Citizen" | "Admin") => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: "Citizen" | "Admin") => {
    // ✅ Fake user
    const fakeUser: User = {
      id: "1",
      name: role === "Admin" ? "Admin User" : "Citizen User",
      email,
      role,
    };
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
