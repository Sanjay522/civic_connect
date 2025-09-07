"use client";

import { useContext } from "react";
import SiteDescription from "@/components/header/SiteDescription";
import Features from "@/components/sections/Features";
import ReportOptions from "@/components/sections/ReportOptions";
import HowItWorks from "@/components/sections/HowItWorks";
import Support from "@/components/sections/Support";
import { AuthContext } from "@/context/AuthContext";

export default function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <SiteDescription />
      <section id="features">
        <Features />
      </section>
      <section id="report-options">
        <ReportOptions />
      </section>
      <section id="howitworks">
        <HowItWorks />
      </section>

      {/* ✅ Only show Support if no user is logged in */}
      {!user && (
        <section id="support">
          <Support />
        </section>
      )}
    </div>
  );
}
