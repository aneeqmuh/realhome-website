'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/971505748587" // Replace with your number
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-all"
  >
    <FaWhatsapp className="text-white w-7 h-7" />
  </a>
);

export default WhatsAppButton;
