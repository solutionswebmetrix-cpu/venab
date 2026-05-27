import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919415598626"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
    >
      <FiMessageCircle size={32} className="text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
