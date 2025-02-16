import { useOutletContext } from "@remix-run/react";
import Navbar from "~/components/Navbar";
import ContactInfo from "~/components/ContactInfo";
import ContactForm from "~/components/ContactForm";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import bgimage from '../assests/about.jpg'

export default function Contact() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <section
  className="relative pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgimage})`, // Change to your actual image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Parallax effect on desktop
  }}
>
  {/* 🔹 Dark Overlay for Better Contrast */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* 🔹 Content with White Text for Readability */}
  <div className="relative max-w-3xl mx-auto text-center p-10 rounded-xl shadow-lg">
    <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
    <p className="text-xl mb-8 text-white">
      Get in touch with us for any inquiries or to start your next project.
    </p>
  </div>
</section>



      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
}
