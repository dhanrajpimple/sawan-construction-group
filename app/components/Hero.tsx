import { Building2, Hammer, Ruler, Award, Briefcase,Star, Home } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Building Excellence Since 2023
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Precision Engineering & 
              <span className="text-blue-600"> Quality Construction</span>
            </h1>
            <p className="text-xl text-gray-600 md:pr-12">
              Specializing in sustainable infrastructure development and innovative architectural solutions
            </p>
          </div>

          {/* Key Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Architectural Planning", icon: <Ruler size={32} className="text-blue-600" />},
              { title: "Commercial & Residential Construction", icon: <Building2 size={32} className="text-green-600" />},
              { title: "Renovation & Remodeling", icon: <Hammer size={32} className="text-yellow-600" />},
              { title: "Luxury Interior Design", icon: <Home size={32} className="text-purple-600" />}
            ].map((service, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mr-3">{service.icon}</span>
                <h3 className="font-semibold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>


<div className="flex flex-wrap gap-6 items-center pt-4">
  {/* Industry Experience */}
  <div className="flex items-center">
    <Briefcase className="text-blue-600 w-8 h-8 mr-2" />
    <div>
      <p className="font-bold text-gray-900">2+ Years</p>
      <p className="text-sm text-gray-600">Industry Experience</p>
    </div>
  </div>

  {/* Government Contracts */}
  <div className="flex items-center">
    <Building2 className="text-green-600 w-8 h-8 mr-2" />
    <div>
      <p className="font-bold text-gray-900">Government Contracts</p>
      <p className="text-sm text-gray-600">Trusted by Public Sector Projects</p>
    </div>
  </div>

  
</div>

        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Start Your Project
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Carter"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 bg-transparent focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium bg-transparent text-black mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 bg-transparent rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Project Type</option>
                  <option>Residential Construction</option>
                  <option>Commercial Building</option>
                  <option>Renovation</option>
                  <option>Infrastructure</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;