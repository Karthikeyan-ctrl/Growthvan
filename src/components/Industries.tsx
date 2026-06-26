"use client";

import { motion } from "framer-motion";
import { 
  Building2, HeartPulse, GraduationCap, 
  Factory, ShoppingCart, Truck, Landmark 
} from "lucide-react";

const industries = [
  { name: "Banking & Finance", icon: <Landmark size={28} /> },
  { name: "Healthcare", icon: <HeartPulse size={28} /> },
  { name: "Education", icon: <GraduationCap size={28} /> },
  { name: "Manufacturing", icon: <Factory size={28} /> },
  { name: "Retail", icon: <ShoppingCart size={28} /> },
  { name: "Logistics", icon: <Truck size={28} /> },
  { name: "Government", icon: <Building2 size={28} /> }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Industries We Serve</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Domain Expertise</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We understand the unique challenges and regulatory requirements across diverse sectors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center space-x-3 bg-[#111] border border-gray-800 px-6 py-4 rounded-full hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors cursor-pointer group"
            >
              <div className="text-gray-400 group-hover:text-[var(--primary)] transition-colors">
                {industry.icon}
              </div>
              <span className="text-white font-medium">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
