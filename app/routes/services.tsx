

import { useOutletContext } from "@remix-run/react";
import { useState } from "react";
import Navbar from "~/components/Navbar";

import {WhyChooseUs} from "~/components/WhyChooseUs";
import Packages from "~/components/Packages";
import HowWeWork from "~/components/HowWeWork";
import Footer from "~/components/Footer";

import ServicesPage from "~/components/ServicesPage";

export default function Index() {

  const [activeTab, setActiveTab] = useState("interior");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar  />
    <ServicesPage/>
      <WhyChooseUs />
      <Packages />
      <HowWeWork />
      <Footer />
    </div>
  );
}
