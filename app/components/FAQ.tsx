import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What areas do you serve?", answer: "We serve the metropolitan area and beyond." },
  { question: "Do you offer free consultations?", answer: "Yes, we offer free initial consultations." },
  { question: "How long does a project take?", answer: "Timelines depend on the project's complexity." },
  { question: "Are you licensed and insured?", answer: "Yes, we are fully licensed and insured." }
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={index} className="bg-white p-6 text-black rounded-lg shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-black text-left">
                    {faq.question}
                  </h3>
                  <span className="ml-4">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
