import { useState } from "react";
import { Link } from "@remix-run/react";
import image1 from '../assests/construction1.jpg'
import image2 from '../assests/construction2.jpg'
import image3 from '../assests/construction3.jpg'
import image4 from '../assests/construction4.jpg'
import image5 from '../assests/construction5.jpg'
import image6 from '../assests/construction6.jpg'
import image7 from '../assests/construction7.jpg'
import image8 from '../assests/construction8.jpg'
import image9 from '../assests/construction9.jpg'
const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState<"interior" | "construction">("interior");

  const services = {
    interior: [
      {
        title: "Modern Interior Design",
        description: "Contemporary living spaces with elegant touches",
        image: image1
      },
      {
        title: "Kitchen Remodeling",
        description: "Custom kitchen solutions for your home",
        image: image2
      },
      {
        title: "Living Room Upgrade",
        description: "Stylish living room designs for a modern home",
        image: image3
      },
      {
        title: "Bedroom Makeover",
        description: "Cozy and modern bedroom designs",
        image: image4
      },
      {
        title: "Office Design",
        description: "Functional and modern office spaces",
        image: image5
      },
      {
        title: "Bathroom Renovation",
        description: "Luxurious bathroom designs with modern fixtures",
        image: image6
      },
      {
        title: "Dining Area Upgrade",
        description: "Elegant dining room designs for memorable meals",
        image: image7
      },
      {
        title: "Home Gym Setup",
        description: "Modern and effective gym spaces for your home",
        image: image8
      },
      {
        title: "Outdoor Patio Design",
        description: "Stylish outdoor spaces to relax and entertain",
        image:image9
      },
      {
        title: "Creative Workspace",
        description: "Innovative designs for creative work environments",
        image: image9
      }
    ],
    construction: [
      {
        title: "Custom Home Building",
        description: "Building your dream home from the ground up",
        image:  image1
      },
      {
        title: "Commercial Construction",
        description: "Professional construction services for businesses",
        image:  image2
      },
      {
        title: "Renovation Projects",
        description: "Expert renovation services to transform your space",
        image: image3
      },
      {
        title: "Industrial Facilities",
        description: "Construction of industrial facilities with precision",
        image: image4
      },
      {
        title: "Retail Space Construction",
        description: "Modern retail spaces built to impress",
        image:image5
      },
      {
        title: "Office Building Construction",
        description: "Professional office construction with modern design",
        image: image6
      },
      {
        title: "Bridge Construction",
        description: "Expert bridge building with cutting-edge techniques",
        image: image7
      },
      {
        title: "Road Construction",
        description: "Efficient road and highway construction projects",
        image: image8
      },
      {
        title: "Skyscraper Projects",
        description: "Building high-rise skyscrapers with innovation",
        image: image9
      },
      {
        title: "Green Building",
        description: "Sustainable construction solutions for a greener future",
        image: image1
      }
    ]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering excellence in both interior design and construction solutions
          </p>
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
              <div className="relative h-72 object-cover">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
