import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="md:w-1/3 bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Get in Touch</h2>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center gap-3 group">
          <Mail className="w-7 h-7 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-gray-700 text-lg font-medium group-hover:text-blue-600 transition">
          sawantconstructiongroup@gmail.com
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 group">
          <Phone className="w-7 h-7 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-gray-700 text-lg font-medium group-hover:text-blue-600 transition">
           +91 7030353582
          </span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3 group">
          <MapPin className="w-7 h-7 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-gray-700 text-lg font-medium group-hover:text-blue-600 transition">
            Satara, Maharashtra
          </span>
        </div>
      </div>
    </div>
  );
}
