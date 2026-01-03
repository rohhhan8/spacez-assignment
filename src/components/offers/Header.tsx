'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';

/**
 * Header Component
 * 
 * Uses the combined logo.png which has both house icon and SPACEZ text.
 */
export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white">
      {/* Logo - combined house icon + SPACEZ text image */}
      <Image 
        src="/logo.png" 
        alt="Spacez" 
        width={120}
        height={32}
        style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
        priority
      />

      {/* Hamburger Menu */}
      <button className="p-1">
        <Menu className="h-5 w-5 text-[#6B7280]" strokeWidth={2} />
      </button>
    </header>
  );
}
