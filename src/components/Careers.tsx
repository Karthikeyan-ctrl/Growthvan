"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

const positions = [
  { title: "Senior Full Stack Engineer", type: "Full-time", location: "Remote / US" },
  { title: "AI/ML Solutions Architect", type: "Full-time", location: "Hybrid" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote" }
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Join Our Team</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Build the Future with Us</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We are always looking for passionate technologists who want to solve complex problems and build scalable solutions. Experience a culture of innovation, continuous learning, and impactful work.
            </p>
            <div className="flex space-x-4 mb-10">
              <span className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">Continuous Learning</span>
              <span className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">Flexible Work</span>
              <span className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">Health & Wellness</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full space-y-4">
            {positions.map((pos, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111] p-6 rounded-xl border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between hover:border-[var(--primary)] transition-colors group cursor-pointer"
              >
                <div className="mb-4 sm:mb-0">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--primary)] transition-colors">{pos.title}</h4>
                  <div className="flex space-x-3 text-sm text-gray-500">
                    <span className="flex items-center"><Briefcase size={14} className="mr-1" /> {pos.type}</span>
                    <span>•</span>
                    <span>{pos.location}</span>
                  </div>
                </div>
                <button className="text-[var(--primary)] font-medium flex items-center group-hover:underline">
                  Apply <ArrowRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
