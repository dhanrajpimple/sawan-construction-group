import { motion } from "framer-motion";
import { MessageCircle,  ClipboardList, Hammer, ShieldCheck, KeyRound } from "lucide-react";
import { IoMdColorPalette } from "react-icons/io";
const steps = [
  {
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and budget to understand your needs better.",
    icon: <MessageCircle className="w-6 h-6 text-white" />,
  },
  {
    title: "Design Phase",
    description: "Our team creates detailed designs and 3D visualizations for your approval.",
    icon: <IoMdColorPalette className="w-6 h-6 text-white" />,
  },
  {
    title: "Planning & Preparation",
    description: "We organize resources, materials, and timeline for smooth execution.",
    icon: <ClipboardList className="w-6 h-6 text-white" />,
  },
  {
    title: "Execution",
    description: "Our expert team brings your vision to life with precision craftsmanship.",
    icon: <Hammer className="w-6 h-6 text-white" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality checks ensuring everything meets our highest standards.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    title: "Project Handover",
    description: "Final walkthrough and delivery of your completed project.",
    icon: <KeyRound className="w-6 h-6 text-white" />,
  }
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="flex items-center mb-6">
                {/* Icon with Gradient Background */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg mr-4">
                  {step.icon}
                </div>
                
                {/* Step Number */}
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Timeline (For Large Screens) */}
        <div className="mt-16 hidden lg:flex justify-center items-center">
          {steps.map((_, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center"
            >
              {/* Step Number Circle */}
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                {index + 1}
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="w-24 h-1 bg-gray-300 mx-2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
