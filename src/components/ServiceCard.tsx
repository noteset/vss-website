import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl shadow-xl"
    >
      <div className="bg-red-600/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-red-600" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}