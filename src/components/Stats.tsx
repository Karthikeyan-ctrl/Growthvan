"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Clients Served" },
  { value: "150+", label: "Team Members" },
  { value: "25+", label: "Countries Reached" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-[var(--primary)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-6xl font-extrabold mb-2">{stat.value}</div>
              <div className="text-blue-100 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
