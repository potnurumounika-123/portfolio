import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <span>&copy; 2024 Mounika Potnuru. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500 fill-current" size={14} />
            </motion.div>
            <span>and lots of ☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;