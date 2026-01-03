'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, Smartphone } from 'lucide-react';
import Image from 'next/image';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

type Phase = 'idle' | 'typing' | 'otp-sent' | 'otp-filling' | 'verifying' | 'success';

const PHONE_NUMBER = '9988776655';
const OTP_CODE = '4521';

/**
 * Ghost Login Modal
 * 
 * Clean web design with automated demo flow.
 */
export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');
  const [showOtpInput, setShowOtpInput] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setPhone('');
      setOtp('');
      setPhase('idle');
      setShowOtpInput(false);
      
      const startTimer = setTimeout(() => {
        setPhase('typing');
      }, 600);

      return () => clearTimeout(startTimer);
    }
  }, [isOpen]);

  // Phase 1: Auto-type phone number
  useEffect(() => {
    if (phase !== 'typing') return;

    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < PHONE_NUMBER.length) {
        setPhone(PHONE_NUMBER.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOtpInput(true);
          setPhase('otp-sent');
        }, 400);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [phase]);

  // Phase 2 & 3: Auto-fill OTP
  useEffect(() => {
    if (phase !== 'otp-sent') return;

    const otpTimer = setTimeout(() => {
      setPhase('otp-filling');
      
      let otpIndex = 0;
      const otpInterval = setInterval(() => {
        if (otpIndex < OTP_CODE.length) {
          setOtp(OTP_CODE.slice(0, otpIndex + 1));
          otpIndex++;
        } else {
          clearInterval(otpInterval);
          setTimeout(() => {
            setPhase('verifying');
          }, 300);
        }
      }, 120);
    }, 800);

    return () => clearTimeout(otpTimer);
  }, [phase]);

  // Phase 4: Verification and success
  useEffect(() => {
    if (phase !== 'verifying') return;

    const verifyTimer = setTimeout(() => {
      setPhase('success');
      
      setTimeout(() => {
        onLoginSuccess();
        onClose();
      }, 600);
    }, 400);

    return () => clearTimeout(verifyTimer);
  }, [phase, onLoginSuccess, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-4 right-4 top-1/2 -translate-y-1/2 z-50 mx-auto max-w-sm"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative px-6 pt-8 pb-6 text-center bg-gradient-to-b from-[#fdf9f7] to-white">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="Spacez" 
                    width={120} 
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Welcome back!</h2>
                <p className="text-sm text-gray-500">Sign in to unlock exclusive rewards</p>
              </div>

              {/* Body */}
              <div className="px-6 pb-8">
                {/* Phone Input */}
                <div className="mb-5">
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Phone Number
                  </label>
                  <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#c16b3e] focus-within:ring-2 focus-within:ring-[#c16b3e]/20 transition-all">
                    <span className="px-4 py-3.5 text-gray-500 text-sm border-r border-gray-200 bg-gray-100">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      readOnly
                      className="flex-1 px-4 py-3.5 text-base tracking-widest outline-none bg-transparent font-medium"
                      placeholder="Enter phone"
                    />
                    {phone.length === 10 && (
                      <CheckCircle className="h-5 w-5 text-[#c16b3e] mr-3" />
                    )}
                  </div>
                </div>

                {/* OTP Section */}
                <AnimatePresence>
                  {showOtpInput && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Enter OTP
                        </label>
                        <span className="text-xs text-[#c16b3e] font-medium flex items-center gap-1">
                          <Smartphone className="h-3 w-3" />
                          OTP Sent
                        </span>
                      </div>
                      <div className="flex gap-3 justify-center">
                        {[0, 1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`
                              w-14 h-14 rounded-xl flex items-center justify-center 
                              text-xl font-bold transition-all
                              ${otp[i] 
                                ? 'bg-[#c16b3e] text-white shadow-lg shadow-[#c16b3e]/30' 
                                : 'bg-gray-100 text-gray-400 border border-gray-200'
                              }
                            `}
                          >
                            {otp[i] || '•'}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Status */}
                <div className="h-14 flex items-center justify-center">
                  {phase === 'verifying' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-gray-500"
                    >
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="text-sm">Verifying...</span>
                    </motion.div>
                  )}
                  {phase === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-[#c16b3e]"
                    >
                      <CheckCircle className="h-6 w-6" />
                      <span className="text-sm font-semibold">Welcome to Spacez!</span>
                    </motion.div>
                  )}
                  {phase !== 'verifying' && phase !== 'success' && !showOtpInput && (
                    <button
                      disabled={phone.length < 10}
                      className={`
                        w-full py-3.5 rounded-xl font-semibold text-white
                        transition-all duration-300 shadow-lg
                        ${phone.length === 10 
                          ? 'bg-[#c16b3e] hover:bg-[#92400E] shadow-[#c16b3e]/30' 
                          : 'bg-gray-300 cursor-not-allowed shadow-none'
                        }
                      `}
                    >
                      Get OTP
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
