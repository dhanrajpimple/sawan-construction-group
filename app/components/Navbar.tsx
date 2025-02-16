import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "~/assests/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-16 object-contain shadow-md rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative text-gray-600 hover:text-gray-900 
                             px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                  onClick={closeMenu}
                >
                  {item}
                  <span
                    className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 
                                 group-hover:w-full"
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600 " />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 " />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2">
          {["Home", "About", "Services", "Contact"].map((item) => (
  <Link
    key={item}
    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
    className="block px-4 py-3 text-gray-600 hover:bg-gray-50 
               rounded-lg transition-colors duration-300 text-base font-medium"
    onClick={closeMenu}
  >
    {item}
  </Link>
))}

          </div>
        </div>
      </div>
    </nav>
  );
}
