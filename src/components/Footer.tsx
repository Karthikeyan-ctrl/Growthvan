import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[var(--card-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 inline-block">
              Growth<span className="text-[var(--primary)]">van</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Transforming businesses through innovative technology solutions. We deliver enterprise-grade software, AI, and cloud services to drive your digital evolution.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {["About Us", "Services", "Solutions", "Industries", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "")}`} className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-[var(--primary)] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Tech Boulevard, Silicon Valley, CA 94043, United States</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[var(--primary)] mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[var(--primary)] mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contact@growthvan.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest tech insights and company updates.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#111] border border-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[var(--primary)] transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Growthvan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
