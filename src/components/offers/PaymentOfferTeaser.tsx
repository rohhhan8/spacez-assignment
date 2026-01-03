'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface PaymentTeaserProps {
  onButtonClick: () => void;
}

/**
 * PaymentOfferTeaser Component
 * 
 * Matches Figma: Shows "upto 15% Off" with payment illustration and CTA button.
 */
export default function PaymentOfferTeaser({ onButtonClick }: PaymentTeaserProps) {
  return (
    <div className="bg-[#fdf9f7] overflow-hidden">
      <div className="p-5 flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 pr-4">
          <p className="text-sm text-[#000000] mb-2">
            Save more on your bookings
          </p>
          <p className="text-3xl font-bold text-[#874B2C] mb-1">
            upto 15% Off
          </p>
          <p className="text-md font-bold text-[#874B2C]">
            on select payment methods
          </p>
        </div>

        {/* Right - Payment Illustration */}
        <div className="relative w-28 h-24 flex-shrink-0">
          <Image 
            src="/payment.png" 
            alt="Payment offers" 
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onButtonClick}
        className="
          w-full flex items-center justify-center gap-2
          py-3 bg-[#c16b3e] text-white
          font-medium text-sm
          hover:bg-[#92400E] transition-colors
        "
      >
        Unlock offers
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
