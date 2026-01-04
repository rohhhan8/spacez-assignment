'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Search, Phone, Smartphone } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isSignedIn: boolean;
  onLogout: () => void;
  onSignIn: () => void;
}

/**
 * SideMenu Component
 * 
 * Full page overlay sliding from top with smooth animation.
 * Only Profile and Logout items.
 */
export default function SideMenu({ 
  isOpen, 
  onClose, 
  isSignedIn, 
  onLogout,
  onSignIn 
}: SideMenuProps) {
  
  const handleLogout = () => {
    onLogout();
    onClose();
  };

  const handleSignIn = () => {
    onSignIn();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 bg-white z-50 overflow-auto"
        >
          {/* Header - Just close button */}
          <div className="flex items-center justify-end px-5 py-4">
            <button
              onClick={onClose}
              className="p-2 text-[#c16b3e] hover:text-[#92400E]"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="px-5 py-6">
            {/* Menu Items */}
            <div className="space-y-3 mb-8">
              {/* Explore */}
              <div className="flex items-center justify-between py-3 px-4 border border-gray-200 rounded">
                <span className="font-bold text-[#c16b3e]">explore all stays</span>
                <Search className="h-5 w-5 text-[#874B2C]" />
              </div>

              {/* Contact */}
              <div className="flex items-center justify-between py-3 px-4 border border-gray-200 rounded">
                <span className="font-bold text-[#c16b3e]">contact: 860 8600 718</span>
                <Phone className="h-5 w-5 text-[#874B2C]" />
              </div>

              {/* Download App */}
              <div className="flex items-center justify-between py-3 px-4 border border-gray-200 rounded">
                <span className="font-bold text-[#c16b3e]">download mobile app</span>
                <Smartphone className="h-5 w-5 text-[#874B2C]" />
              </div>
            </div>

            {/* Sign In / Profile Section */}
            {isSignedIn ? (
              <div className="space-y-3">
                {/* Profile */}
                <button className="w-full flex items-center justify-between py-3 px-4 border border-gray-200 rounded hover:bg-gray-50">
                  <span className="font-bold text-[#c16b3e]">my profile</span>
                  <User className="h-5 w-5 text-[#874B2C]" />
                </button>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="w-full py-3 bg-[#874B2C] text-white font-medium rounded hover:bg-[#92400E] transition-colors"
                >
                  logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className="w-full py-3 bg-[#c16b3e] text-white font-medium rounded hover:bg-[#92400E] transition-colors"
              >
                sign in
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
