"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import BorderGlow from "./BorderGlow";
import ScrambledText from "./ScrambledText";


const testimonials = [
  {
    content: "Growthvan transformed our legacy systems into a modern, cloud-native architecture. Their expertise in AI and microservices gave us a distinct competitive edge.",
    name: "Sarah Jenkins",
    role: "CTO, Global Finance Corp"
  },
  {
    content: "The delivery speed and code quality were exceptional. They didn't just build software; they solved complex business problems with innovative technology.",
    name: "Michael Chen",
    role: "VP of Engineering, HealthTech Solutions"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <ScrambledText 
            tag="h3" 
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            What Our Clients Say
          </ScrambledText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <BorderGlow
                backgroundColor="#111111"
                borderRadius={16}
                glowColor="290 100 50"
                glowIntensity={0.8}
                className="p-8 h-full"
              >
                <div className="text-[var(--primary)] mb-6">
                  <Quote size={40} className="opacity-50" />
                </div>
                <p className="text-xl text-gray-300 mb-8 italic leading-relaxed">"{test.content}"</p>
                
                <div className="mt-auto flex items-center justify-between border-t border-gray-800 pt-6">
                  <div>
                    <h4 className="text-white font-bold text-lg">{test.name}</h4>
                    <p className="text-gray-500 text-sm">{test.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[var(--primary)] fill-[var(--primary)]" />
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
