import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Silver",
    price: "$999",
    features: [
      "Basic Design Consultation",
      "2D Floor Plans",
      "Material Selection",
      "Project Timeline",
      "Basic Support"
    ]
  },
  {
    name: "Gold",
    price: "$1,999",
    features: [
      "Advanced Design Consultation",
      "3D Visualization",
      "Material Selection",
      "Detailed Project Timeline",
      "Priority Support",
      "2 Revision Rounds"
    ],
    popular: true
  },
  {
    name: "Platinum",
    price: "$2,999",
    features: [
      "Premium Design Consultation",
      "3D Visualization",
      "VR Walkthrough",
      "Material Selection",
      "Detailed Project Timeline",
      "24/7 Priority Support",
      "Unlimited Revisions"
    ]
  }
];

export default function Packages() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for every scale of construction and design
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium z-10">
                  Most Popular
                </div>
              )}
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500">/project</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-600"
                      >
                        <div className="bg-blue-100 p-1.5 rounded-full mr-3">
                          <Check className="w-5 h-5 text-blue-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Get Started Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-center py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all cursor-pointer"
                  >
                    Get Started
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
