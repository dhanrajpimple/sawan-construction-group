import { motion } from "framer-motion";
import ceo from "../assests/CEO.jpg"; // Ensure correct path

export function CEOVision() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* CEO Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64">
            <img
              src={ceo}
              alt="CEO"
              className="rounded-full w-64 h-64 object-cover border-4  shadow-lg"
              style={{ objectPosition: "top" }} // Adjust to keep head in frame
            />
          </div>
        </motion.div>

        {/* CEO Message */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-4">CEO's Vision</h2>
          <p className="text-lg text-gray-700 mb-4 italic">
            "Our goal is to redefine the construction industry by setting new standards in quality, innovation, and customer satisfaction. We believe in building not just structures, but lasting relationships with our clients and communities."
          </p>
          <p className="text-lg font-semibold text-gray-900">- Shubham Sawant, CEO</p>
        </motion.div>
      </div>
    </section>
  );
}
