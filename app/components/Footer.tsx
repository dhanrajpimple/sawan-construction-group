import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Sawant Construction</h3>
            <p className="text-gray-400">
              Building dreams into reality with quality craftsmanship and innovative design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {["Interior Design", "Construction", "Renovation", "Consultation"].map((service, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Satara</li>
              <li>Satara, Maharashtra</li>
              <li>Phone: +91 7030353582</li>
              <li>Email: sawantconstructiongroup@gmail.com</li>
            </ul>
            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
              {[FaFacebookF,FaInstagram, IoLogoYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition duration-300"
                >
                  <Icon className="text-white w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sawant Construction Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
