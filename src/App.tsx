import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Building2, Phone, Mail, MapPin, Crosshair, Eye } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <div className="bg-zinc-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80"
            alt="Security Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">Elite Security Solutions</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional security services tailored to protect what matters most. Advanced technology, trained personnel, and unwavering dedication.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
              Get Protected Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              Icon={Shield}
              title="Armed Security"
              description="Professional armed security personnel trained to handle high-risk situations and protect valuable assets."
            />
            <ServiceCard
              Icon={Eye}
              title="Surveillance Systems"
              description="State-of-the-art surveillance technology providing 24/7 monitoring and threat detection."
            />
            <ServiceCard
              Icon={Users}
              title="VIP Protection"
              description="Specialized security details for high-profile individuals and executive protection services."
            />
            <ServiceCard
              Icon={Building2}
              title="Facility Security"
              description="Comprehensive security solutions for commercial and residential properties."
            />
            <ServiceCard
              Icon={Target}
              title="Risk Assessment"
              description="Detailed security audits and risk assessments to identify vulnerabilities and enhance protection."
            />
            <ServiceCard
              Icon={Crosshair}
              title="Tactical Training"
              description="Professional training programs for security personnel and corporate security teams."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-gray-300 mb-6">
                With over two decades of experience in security services, we've built a reputation for excellence and reliability. Our team consists of highly trained professionals from military and law enforcement backgrounds.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span>24/7 Emergency Response</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span>Licensed & Certified Personnel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span>Advanced Security Technology</span>
                </li>
              </ul>
            </motion.div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582139329546-2a4daf8833f3?auto=format&fit=crop&q=80"
                alt="Security Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Emergency Hotline</h3>
                  <p className="text-gray-400">+1 (888) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-400">contact@eliteguard.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Headquarters</h3>
                  <p className="text-gray-400">123 Security Ave, New York, NY 10001</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>
              <button className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-red-600" />
            <span className="text-xl font-bold text-white">EliteGuard</span>
          </div>
          <p>© 2024 EliteGuard Security Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;