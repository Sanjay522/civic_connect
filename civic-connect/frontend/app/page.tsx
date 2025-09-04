import SiteDescription from "@/components/header/SiteDescription";
import Features from "@/components/sections/Features";
import ReportOptions from "@/components/sections/ReportOptions";
import HowItWorks from "@/components/sections/HowItWorks";
import Support from "@/components/sections/Support";

export default function HomePage() {
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
      <section id="support">
        <Support />
      </section>
    </div>
  );
}
