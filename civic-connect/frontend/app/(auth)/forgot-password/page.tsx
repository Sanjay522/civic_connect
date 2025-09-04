"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <input className="border p-2 mb-2" placeholder="Email"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="bg-orange-500 text-white px-4 py-2 rounded">Send Reset Link</button>
    </div>
  );
}
