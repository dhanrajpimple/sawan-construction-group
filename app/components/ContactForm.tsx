export default function ContactForm() {
  return (
    <div className="md:w-2/3">
      <form className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Get In Touch</h2>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 mt-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border mt-2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full px-4 py-3 mt-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-3 mt-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
