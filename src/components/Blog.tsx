"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Navigating the Shift to Microservices Architecture",
    category: "Engineering",
    date: "Jun 15, 2026",
    excerpt: "Learn how to effectively transition your monolithic applications to scalable microservices.",
    imageColor: "bg-blue-800"
  },
  {
    title: "The Role of AI in Modern Cybersecurity",
    category: "Security",
    date: "May 28, 2026",
    excerpt: "How machine learning models are predicting and mitigating zero-day threats.",
    imageColor: "bg-emerald-800"
  },
  {
    title: "Optimizing React Performance in 2026",
    category: "Frontend",
    date: "May 10, 2026",
    excerpt: "Deep dive into the latest techniques for building blazing fast web applications.",
    imageColor: "bg-purple-800"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Insights</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Latest from our Blog</h3>
          </div>
          <button className="hidden md:flex items-center text-gray-400 hover:text-white transition-colors">
            View All Posts <ArrowRight size={16} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors group cursor-pointer"
            >
              <div className={`w-full h-48 ${post.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider bg-[var(--primary)]/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar size={12} className="mr-1" /> {post.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-gray-300 font-medium text-sm flex items-center group-hover:text-white transition-colors">
                  Read Article <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
