"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Growthvan transformed our legacy systems into a modern, cloud-native architecture. Their expertise in AI and microservices gave us a distinct competitive edge.",
    author: "Sarah Jenkins",
    role: "CTO, Global Finance Corp"
  },
  {
    quote: "The delivery speed and code quality were exceptional. They didn't just build software; they solved complex business problems with innovative technology.",
    author: "Michael Chen",
    role: "VP of Engineering, HealthTech Solutions"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2 text-center">Testimonials</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">What Our Clients Say</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#111] p-8 rounded-2xl border border-gray-800 relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-800" size={48} />
              <p className="text-lg text-gray-300 italic mb-8 relative z-10">"{test.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-bold">{test.author}</h4>
                  <p className="text-gray-500 text-sm">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
