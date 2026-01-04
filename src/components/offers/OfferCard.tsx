'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { OfferCardProps, StripColor } from '@/types';

/**
 * Strip color mapping - exact Figma colors
 */
const stripColors: Record<StripColor, string> = {
  orange: 'bg-[#c16b3e]',     // Spacez coupons
  blue: 'bg-[#1A73E8]',       // HDFC Bank
  pink: 'bg-[#F41CB2]',       // Myntra
  black: 'bg-[#000000]',      // Hammer
  red: 'bg-[#AE282E]',        // ICICI
};

/**
 * Border color mapping - matches strip colors for consistency
 */
const borderColors: Record<StripColor, string> = {
  orange: 'border-[#c16b3e]',
  blue: 'border-[#1A73E8]',
  pink: 'border-[#F41CB2]',
  black: 'border-[#000000]',
  red: 'border-[#AE282E]',
};

/**
 * Brand logo mapping
 */
const brandLogos: Record<string, string> = {
  'HDFC Bank': '/hdfc.png',
  'ICICI Bank': '/icici.png',
  'Myntra': '/myntra.jpg',
  'Hammer': '/hammer.png',
  'Spacez': '/logo.png',
};

/**
 * OfferCard Component
 * 
 * Original design with vertical strip, restored for grid layout.
 */
export default function OfferCard({ 
  offer, 
  actionLabel = 'Copy',
  onAction 
}: OfferCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleAction = async () => {
    try {
      await navigator.clipboard.writeText(offer.code);
      setIsCopied(true);
      onAction?.(offer.code);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const brandLogo = offer.brandName ? brandLogos[offer.brandName] : null;
  const showBrandLogo = offer.type !== 'coupon' && brandLogo;

  return (
    <article className="flex overflow-hidden bg-[#fdf9f7] h-full">
      {/* Left Strip - Vertical Text */}
      <div 
        className={`
          ${stripColors[offer.stripColor]}
          w-[70px] flex-shrink-0 flex items-center justify-center
          py-12
        `}
      >
        <span 
          className="vertical-text text-white text-3xl tracking-wide font-poppins"
        >
          {offer.discountLabel}
        </span>
      </div>

      {/* Right Section - Details with left border for separation */}
      <div className={`flex-1 flex flex-col p-5 pl-6 border-l-2 border-dashed ${borderColors[offer.stripColor]}`}>
        {/* Header Row: Brand Logo/Title + Copy Button */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            {/* Brand Logo */}
            {showBrandLogo && (
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image 
                  src={brandLogo}
                  alt={offer.brandName || ''}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            
            <h3 className="text-lg font-bold text-[#1F2937] uppercase tracking-wide truncate">
              {offer.title}
            </h3>
          </div>
          
          {/* Copy Button - Text style, no wrap */}
          <button
            onClick={handleAction}
            className={`
              flex items-center gap-1.5 text-sm font-medium
              transition-colors flex-shrink-0 ml-2 whitespace-nowrap
              ${isCopied 
                ? 'text-[#c16b3e]' 
                : 'text-[#c16b3e]'
              }
            `}
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {isCopied ? 'Copied!' : actionLabel}
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-[#6B7280] leading-relaxed flex-grow">
          {offer.description}
        </p>

        {/* Divider - stuck to bottom */}
        <div className="border-t border-gray-200 pt-3 mt-auto">
          {/* Read More Link */}
          <button className="text-sm text-[#7d817d] font-semibold hover:underline">
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}
