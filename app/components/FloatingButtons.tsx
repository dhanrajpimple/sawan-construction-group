import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/7030353582" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+917030353582" // Replace with your phone number
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
