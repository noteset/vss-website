import React from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold text-white">EliteGuard</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-red-500 transition">Home</a>
            <a href="#services" className="text-white hover:text-red-500 transition">Services</a>
            <a href="#about" className="text-white hover:text-red-500 transition">About</a>
            <a href="#contact" className="text-white hover:text-red-500 transition">Contact</a>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
            Emergency Contact
          </button>
        </div>
      </div>
    </nav>
  );
}