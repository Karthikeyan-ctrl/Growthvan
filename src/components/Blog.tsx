"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import BorderGlow from "./BorderGlow";
import ScrambledText from "./ScrambledText";


const posts = [
  {
    title: "Navigating the Shift to Microservices Architecture",
    category: "Engineering",
    date: "Jun 15, 2026",
    readTime: "5 min read",
    author: "Alex Rivers",
    excerpt: "Learn how to effectively transition your monolithic applications to scalable microservices.",
    imageColor: "bg-blue-800"
  },
  {
    title: "The Role of AI in Modern Cybersecurity",
    category: "Security",
    date: "May 28, 2026",
    readTime: "4 min read",
    author: "Sarah Chen",
    excerpt: "How machine learning models are predicting and mitigating zero-day threats.",
    imageColor: "bg-emerald-800"
  },
  {
    title: "Optimizing React Performance in 2026",
    category: "Frontend",
    date: "May 10, 2026",
    readTime: "6 min read",
    author: "Jordan Smith",
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
            <ScrambledText 
              tag="h3" 
              className="text-3xl md:text-5xl font-bold text-white"
            >
              Latest from our Blog
            </ScrambledText>
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
              className="group h-full"
            >
              <BorderGlow
                backgroundColor="#111111"
                borderRadius={16}
                glowColor="290 100 50"
                glowIntensity={0.8}
                className="h-full flex flex-col"
              >
                <div className={`h-48 w-full ${post.imageColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                    <span className="text-[var(--primary)] font-semibold tracking-wider uppercase">{post.category}</span>
                    <span className="flex items-center"><Clock size={12} className="mr-1" /> {post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center text-sm text-gray-300">
                      <User size={16} className="mr-2 text-gray-500" />
                      {post.author}
                    </div>
                    <button className="text-white hover:text-[var(--primary)] transition-colors">
                      <ArrowRight size={20} />
                    </button>
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
