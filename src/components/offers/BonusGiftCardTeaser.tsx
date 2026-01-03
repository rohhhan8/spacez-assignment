'use client';

import { Sparkles } from 'lucide-react';

interface TeaserCardProps {
  onButtonClick: () => void;
}

/**
 * BonusGiftCardTeaser Component
 * 
 * Matches Figma: Shows "₹1000" with gift card illustrations.
 */
export default function BonusGiftCardTeaser({ onButtonClick }: TeaserCardProps) {
  return (
    <div className="bg-[#fdf9f7] overflow-hidden">
      <div className="p-7 flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-base text-[#874B2C] mb-1">
            Assured vouchers up to
          </p>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-3xl font-bold text-[#874B2C]">₹1000</span>
            <Sparkles className="h-5 w-5 text-amber-400" />
          </div>
          <p className="text-base text-[#000000]">
            of trending brands
          </p>
        </div>

        {/* Right - Stacked Gift Cards (Bigger) */}
        <div className="relative w-36 h-28 flex-shrink-0">
          {/* Orange card (back) */}
          <div 
            className="
              absolute top-0 right-0 w-24 h-14 
              bg-gradient-to-br from-orange-400 to-orange-500 
              rounded-lg shadow-sm transform rotate-6
              flex flex-col items-start justify-center pl-3
            "
          >
            <span className="text-white text-base font-bold">₹400</span>
            <span className="text-white/80 text-[10px]">Gift card</span>
          </div>
          
          {/* Blue card (front) */}
          <div 
            className="
              absolute top-5 right-5 w-24 h-14 
              bg-gradient-to-br from-blue-500 to-blue-600 
              rounded-lg shadow-md transform -rotate-3
              flex flex-col items-start justify-center pl-3
            "
          >
            <span className="text-white text-base font-bold">₹500</span>
            <span className="text-white/80 text-[10px]">Gift card</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onButtonClick}
        className="
          w-full flex items-center justify-center gap-1
          py-3.5 bg-[#c16b3e] text-white
          font-medium text-base
          hover:bg-[#92400E] transition-colors
        "
      >
        Claim gift cards »
      </button>
    </div>
  );
}
