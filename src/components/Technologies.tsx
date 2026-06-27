"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";


const techStack = [
  "Python", "Java", "JavaScript", "TypeScript", 
  "React", "Next.js", "Node.js", "Django",
  "AWS", "Azure", "GCP", "Docker", 
  "Kubernetes", "TensorFlow", "PostgreSQL", "MongoDB"
];

export default function Technologies() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-gray-400 font-medium uppercase tracking-widest text-sm">Technologies We Master</h2>
        </div>

        <div className="relative overflow-hidden w-full pt-4">
          <LogoLoop
            logos={techStack}
            speed={50}
            direction="left"
            logoHeight={50}
            gap={16}
            fadeOut={true}
            fadeOutColor="#0a0a0a"
            scaleOnHover={true}
            renderItem={(tech: string, key: number) => (
              <div
                key={key}
                className="bg-[#111] border border-gray-800 px-6 py-3 rounded-md text-gray-300 font-semibold hover:border-[var(--primary)] hover:text-white hover:bg-[#151515] transition-all cursor-default shadow-sm flex items-center justify-center whitespace-nowrap"
              >
                {tech}
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
