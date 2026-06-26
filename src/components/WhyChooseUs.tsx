"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, Award, Headphones, Rocket } from "lucide-react";

const reasons = [
  { icon: <Users />, title: "Experienced Team", desc: "Top-tier engineers and domain experts." },
  { icon: <Zap />, title: "Agile Development", desc: "Iterative delivery and rapid adaptation." },
  { icon: <ShieldCheck />, title: "Enterprise Security", desc: "Compliance and data protection by design." },
  { icon: <Rocket />, title: "Scalable Solutions", desc: "Architectures that grow with your business." },
  { icon: <Headphones />, title: "24/7 Support", desc: "Round-the-clock monitoring and maintenance." },
  { icon: <Award />, title: "Innovation-Driven", desc: "Leveraging cutting-edge technologies." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">The Growthvan Advantage</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start p-6 bg-[#111] rounded-xl border border-gray-800"
            >
              <div className="flex-shrink-0 text-[var(--primary)] bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-gray-400 text-sm">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
