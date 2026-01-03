'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}

/**
 * Toast Component
 * 
 * Centered popup notification matching web design vibe.
 * Appears at the top of the screen.
 */
export default function Toast({ 
  isVisible, 
  message, 
  onClose, 
  duration = 3000 
}: ToastProps) {
  
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-4 right-4 z-[100] flex justify-center pointer-events-none"
        >
          <div className="
            bg-white rounded-xl shadow-lg border border-gray-100
            px-4 py-3 flex items-center gap-3
            max-w-sm pointer-events-auto
          ">
            <CheckCircle className="h-5 w-5 text-[#c16b3e] flex-shrink-0" />
            <p className="text-sm text-gray-700 font-medium flex-1">
              {message}
            </p>
            <button 
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
