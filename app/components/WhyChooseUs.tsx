import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    "Expert Team with Experience",
    "Premium Quality Materials & Craftsmanship",
    "Innovative Architectural Solutions",
    "98% On-Time Project Completion Rate",
    "Customer Support & Consultation",
    "Sustainable & Eco-Friendly Practices",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering excellence through every phase of construction and design
          </p>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start">
                {/* Icon with Gradient Background */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg mr-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{point}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
