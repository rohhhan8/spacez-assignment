'use client';

import { motion } from 'framer-motion';
import { Gift, CreditCard, ChevronRight, Lock } from 'lucide-react';
import { TeaserCardProps, StripColor } from '@/types';

const stripColors: Record<StripColor, string> = {
  orange: 'bg-[#D97706]',
  blue: 'bg-[#2563EB]',
  pink: 'bg-[#DB2777]',
  black: 'bg-[#000000]',
  red: 'bg-[#AE282E]',
};

const iconMap: Record<string, typeof Gift> = {
  giftcard: Gift,
  payment: CreditCard,
};

/**
 * TeaserCard Component
 * 
 * Shown for locked sections (Gift Cards, Payment Offers) when signed out.
 * Displays a summary and CTA to unlock.
 */
export default function TeaserCard({ 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick,
  stripColor 
}: TeaserCardProps) {
  const Icon = buttonText.toLowerCase().includes('gift') ? Gift : CreditCard;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 overflow-hidden"
    >
      <div className="p-5 sm:p-6">
        {/* Icon & Lock */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`${stripColors[stripColor]} p-3 rounded-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex items-center gap-1.5 text-[#6B7280]">
            <Lock className="h-4 w-4" />
            <span className="text-sm font-medium">Sign in to access</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#6B7280] mb-5">
          {subtitle}
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={onButtonClick}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className={`
            w-full flex items-center justify-center gap-2
            ${stripColors[stripColor]} text-white
            px-5 py-3.5 rounded-lg font-semibold text-sm
            shadow-md hover:opacity-90 transition-opacity
          `}
        >
          {buttonText}
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
