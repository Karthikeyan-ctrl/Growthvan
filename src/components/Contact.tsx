"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import ScrambledText from "./ScrambledText";
import Galaxy from "./Galaxy";



export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <Galaxy hueShift={280} density={1.5} starSpeed={1.0} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
          <ScrambledText 
            tag="h3" 
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Let's Discuss Your Next Project
          </ScrambledText>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to accelerate your digital transformation? Contact our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111] p-8 rounded-2xl border border-gray-800"
            >
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4 text-[var(--primary)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Global Headquarters</h5>
                    <p className="text-gray-400 text-sm">123 Tech Boulevard, Suite 500<br />Silicon Valley, CA 94043, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4 text-[var(--primary)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Phone</h5>
                    <p className="text-gray-400 text-sm">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4 text-[var(--primary)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Email</h5>
                    <p className="text-gray-400 text-sm">contact@growthvan.com<br />support@growthvan.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#111] p-8 rounded-2xl border border-gray-800"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#050505] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#050505] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-[#050505] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-[#050505] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#050505] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors resize-none" placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button type="button" className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-4 rounded-md transition-colors flex items-center justify-center">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
