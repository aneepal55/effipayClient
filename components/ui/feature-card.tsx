"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/10 group-hover:border-white/20 transition-colors">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
