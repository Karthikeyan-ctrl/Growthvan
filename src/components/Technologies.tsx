"use client";

import { motion } from "framer-motion";

const techStack = [
  "Python", "Java", "JavaScript", "TypeScript", 
  "React", "Next.js", "Node.js", "Django",
  "AWS", "Azure", "GCP", "Docker", 
  "Kubernetes", "TensorFlow", "PostgreSQL", "MongoDB"
];

export default function Technologies() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-400 font-medium uppercase tracking-widest text-sm">Technologies We Master</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-[#111] border border-gray-800 px-6 py-3 rounded-md text-gray-300 font-semibold hover:border-[var(--primary)] hover:text-white hover:bg-[#151515] transition-all cursor-default shadow-sm"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
