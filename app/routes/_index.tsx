import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import HowWeWork from "~/components/HowWeWork";
import Navbar from "~/components/Navbar";
import Packages from "~/components/Packages";
import Services from "~/components/Services";
import { WhyChooseUs } from "~/components/WhyChooseUs";


export default function Index() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <Services/>
  <WhyChooseUs/>
   <Packages/>
   <HowWeWork/> 
   <Footer/>
  </>
  );
}

