"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ScrambledText from "./ScrambledText";


const solutions = [
  {
    title: "Enterprise Applications",
    description: "Custom ERP and CRM solutions tailored to your complex organizational workflows.",
    features: ["Workflow Automation", "Legacy Modernization", "System Integration"]
  },
  {
    title: "Digital Transformation",
    description: "Comprehensive strategies to digitize operations and create new business models.",
    features: ["Process Digitization", "Cloud Migration", "Agile Adoption"]
  },
  {
    title: "AI-Powered Systems",
    description: "Deploy machine learning models to solve complex business challenges.",
    features: ["Predictive Analytics", "NLP Interfaces", "Computer Vision"]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Business Solutions</h2>
            <ScrambledText 
              tag="h3" 
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Platform Solutions for the Modern Enterprise
            </ScrambledText>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We build scalable, resilient platforms that serve as the foundation for your business growth. Our solutions are designed with security, performance, and future-readiness at their core.
            </p>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{solution.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                  <ul className="flex flex-wrap gap-3">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-xs font-medium text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full flex items-center">
                        <CheckCircle2 size={12} className="mr-1 text-[var(--primary)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-[#0a0a0a] aspect-square flex items-center justify-center"
            >
              {/* Abstract representation of a solution/platform */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
              <div className="relative w-3/4 h-3/4 border border-gray-700 rounded-lg bg-[#111] shadow-2xl p-6 flex flex-col gap-4">
                <div className="h-8 w-1/3 bg-gray-800 rounded animate-pulse"></div>
                <div className="flex-1 flex gap-4">
                  <div className="w-1/3 bg-gray-800 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2/3 flex flex-col gap-4">
                    <div className="h-1/2 bg-[var(--primary)]/20 border border-[var(--primary)]/30 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="h-1/2 bg-purple-500/20 border border-purple-500/30 rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
