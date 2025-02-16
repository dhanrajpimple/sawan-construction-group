import { useState } from "react";
import { Link } from "@remix-run/react";
const Services = () => {
  const [activeTab, setActiveTab] = useState<"interior" | "construction">("interior");
  console.log(activeTab)
  const services = {
    interior: [
      {
        title: "Modern Interior Design",
        description: "Contemporary living spaces with elegant touches",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200"
      },
      {
        title: "Kitchen Remodeling",
        description: "Custom kitchen solutions for your home",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200"
      },
    ],
    construction: [
      {
        title: "Custom Home Building",
        description: "Building your dream home from the ground up",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
      },
      {
        title: "Commercial Construction",
        description: "Professional construction services for businesses",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200"
      },
    ]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Delivering excellence in both interior design and construction solutions</p>
        </div>

        <div className="flex justify-center mb-16">
        <div className="bg-white p-2 rounded-xl shadow-sm inline-flex">
  {["interior", "construction"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 relative ${
        activeTab === tab ? "text-blue-600" : "text-gray-500 hover:bg-gray-50"
      }`}
    >
      {tab === "interior" ? "Interior Design" : "Construction"}
      {activeTab === tab && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full transition-all duration-300" />
      )}
    
    </button>
  ))}
</div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services[activeTab].map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent"/>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                <Link
      to="/services" className="mt-4 text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors">
                  Show More
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;