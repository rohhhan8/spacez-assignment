'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * WelcomePopup Component
 * 
 * Simple instruction popup for assignment reviewers.
 */
export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop - lighter opacity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-[100]"
            onClick={() => setIsVisible(false)}
          />

          {/* Popup - Simple box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-4 right-4 top-1/2 -translate-y-1/2 z-[100] mx-auto max-w-xs"
          >
            <div className="bg-white rounded-lg shadow-xl p-5 relative">
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Content */}
              <h3 className="text-base font-semibold text-[#874B2C] mb-2">
                Demo Instructions
              </h3>
              <p className="text-sm text-[#6B7280] mb-3 leading-relaxed">
                Click <span className="font-semibold text-[#c16b3e]">Sign In</span> to see the auto-login demo. 
                Gift cards & payment offers unlock after signing in.
              </p>

              {/* CTA */}
              <button
                onClick={() => setIsVisible(false)}
                className="w-full py-2 bg-[#c16b3e] text-white text-sm font-medium rounded hover:bg-[#92400E] transition-colors"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
