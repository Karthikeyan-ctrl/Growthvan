"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Zap, Globe } from "lucide-react";
import BorderGlow from "./BorderGlow";
import ScrambledText from "./ScrambledText";


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
            <ScrambledText 
              tag="h3" 
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Build the Future with Us
            </ScrambledText>
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
                className="group h-full"
              >
                <BorderGlow
                  backgroundColor="#111111"
                  borderRadius={16}
                  glowColor="290 100 50"
                  glowIntensity={0.8}
                  className="p-8 h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">{pos.title}</h4>
                    <span className="text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full text-xs font-semibold">
                      {pos.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 flex items-center">
                    <Globe size={16} className="mr-2" /> {pos.location}
                  </p>
                  <button className="text-white font-medium flex items-center group-hover:text-[var(--primary)] transition-colors">
                    Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
