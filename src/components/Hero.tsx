"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Transforming Businesses <br className="hidden md:block" />
            Through <span className="gradient-text">Technology</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Accelerate your digital evolution with our enterprise-grade AI, cloud infrastructure, and custom software development solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#contact"
              className="px-8 py-4 text-base font-semibold rounded-md text-white bg-[var(--primary)] hover:bg-[var(--primary-hover)] transition-all shadow-lg hover:shadow-[var(--primary)]/25 flex items-center group w-full sm:w-auto justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 text-base font-semibold rounded-md text-white border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all w-full sm:w-auto justify-center flex"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
