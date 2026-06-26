"use client";

import { motion } from "framer-motion";
import { 
  Code, Smartphone, Brain, Cloud, 
  BarChart, Shield, PenTool, Lightbulb 
} from "lucide-react";

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description: "Scalable, high-performance web applications built with modern frameworks and resilient architectures."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users and drive business value."
  },
  {
    icon: <Brain size={32} />,
    title: "AI & Machine Learning",
    description: "Intelligent systems that automate processes, generate insights, and enhance decision-making."
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure design, migration, and management on AWS and Azure."
  },
  {
    icon: <BarChart size={32} />,
    title: "Data Analytics",
    description: "Transform raw data into actionable intelligence with advanced analytics and visualization."
  },
  {
    icon: <Shield size={32} />,
    title: "Cybersecurity",
    description: "Enterprise-grade security implementations to protect your critical data and infrastructure."
  },
  {
    icon: <PenTool size={32} />,
    title: "UI/UX Design",
    description: "User-centric design methodologies that create intuitive and stunning digital experiences."
  },
  {
    icon: <Lightbulb size={32} />,
    title: "IT Consulting",
    description: "Strategic technology guidance to align your IT infrastructure with business objectives."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Comprehensive IT Solutions</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We deliver end-to-end technology services designed to optimize operations, accelerate growth, and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] border border-gray-800 p-8 rounded-xl hover:border-[var(--primary)]/50 hover:bg-[#151515] transition-all group"
            >
              <div className="text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
