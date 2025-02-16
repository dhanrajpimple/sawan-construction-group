

// pages/About.tsx
import { useOutletContext } from "@remix-run/react";
import Navbar from "~/components/Navbar";
import { HeroSection } from "~/components/HeroSection";
import { CEOVision } from "~/components/CEOVision";
import { WhyChooseUs } from "~/components/WhyChooseUs";
import Footer from "~/components/Footer";

export default function About() {
 

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <HeroSection />
      <CEOVision />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}