"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import BorderGlow from "./BorderGlow";
import ScrambledText from "./ScrambledText";


const projects = [
  {
    title: "Global Fintech Platform",
    category: "Enterprise Software",
    description: "A secure, scalable platform processing $10M+ daily transactions with real-time analytics.",
    imageColor: "bg-blue-900"
  },
  {
    title: "AI-Powered Healthcare Diagnostic",
    category: "AI & Machine Learning",
    description: "Computer vision system accelerating radiology analysis with 99% accuracy.",
    imageColor: "bg-purple-900"
  },
  {
    title: "Supply Chain Optimization",
    category: "Cloud Solutions",
    description: "Cloud-native logistics platform reducing delivery times by 30%.",
    imageColor: "bg-emerald-900"
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Featured Work</h2>
            <ScrambledText 
              tag="h3" 
              className="text-3xl md:text-5xl font-bold text-white"
            >
              Our Projects
            </ScrambledText>
          </div>
          <button className="hidden md:flex items-center text-gray-400 hover:text-white transition-colors">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative rounded-2xl overflow-hidden shadow-2xl h-full"
            >
              <BorderGlow
                backgroundColor="#0a0a0a"
                borderRadius={16}
                glowColor="290 100 50"
                glowIntensity={0.8}
                className="h-full"
              >
                <div className={`w-full aspect-video ${project.imageColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  {/* Simulated screenshot content */}
                  <div className="absolute inset-4 bg-[#111] rounded shadow-2xl border border-gray-700 p-2 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                    <div className="w-full h-2 bg-gray-800 rounded mb-2 flex gap-1 items-center px-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="w-full h-full bg-[#0a0a0a] rounded-sm"></div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[var(--primary)] text-xs font-bold tracking-wider uppercase mb-2 block">
                        {project.category}
                      </span>
                      <h4 className="text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex space-x-3 text-gray-400">
                      <ExternalLink size={20} className="hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
