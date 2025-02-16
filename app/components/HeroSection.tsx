import { motion } from "framer-motion";
import bgimage from "../assests/about.jpg"
export function HeroSection() {
  return (
    <section
      className="relative pt-24 px-4 sm:px-6 lg:px-8 text-white transition-colors duration-300"
      style={{
        backgroundImage: `url(${bgimage})`, // Change to your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Creates a parallax effect
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Our Vision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          At Sawant Construction Group, we envision a world where every space is
          thoughtfully designed, expertly crafted, and built to last. Our
          mission is to transform dreams into reality, one project at a time.
        </motion.p>
      </div>
    </section>
  );
}
