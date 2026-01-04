'use client';

import Image from 'next/image';
import { Menu, Heart, Phone, User, Tag } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  isSignedIn: boolean;
  onSignIn: () => void;
  onLogout: () => void;
}

/**
 * Header Component
 * 
 * - Mobile: Logo + Hamburger
 * - Desktop: Logo + Nav items + Sign In/Profile
 */
export default function Header({ onMenuClick, isSignedIn, onSignIn, onLogout }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white lg:px-8 lg:py-3 lg:border-b lg:border-gray-100">
      {/* Logo */}
      <Image 
        src="/logo.png" 
        alt="Spacez" 
        width={120}
        height={32}
        style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
        priority
      />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {/* Wishlist */}
        <a href="#" className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900">
          <Heart className="h-4 w-4" />
          <span>Wishlist</span>
        </a>

        {/* Offers */}
        <a href="#" className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-900 text-white text-sm rounded-full">
          <Tag className="h-4 w-4" />
          <span>Offers available</span>
        </a>

        {/* Phone */}
        <a href="tel:8608600718" className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900">
          <Phone className="h-4 w-4" />
          <span>860 8600 718</span>
        </a>

        {/* Sign In / Profile */}
        {isSignedIn ? (
          <div className="flex items-center gap-3">
            <button 
              onClick={onLogout}
              className="px-5 py-2 bg-[#c16b3e] text-white text-sm font-medium hover:bg-[#92400E] transition-colors"
            >
              Logout
            </button>
            <div className="w-8 h-8 bg-[#fdf9f7] flex items-center justify-center">
              <User className="h-4 w-4 text-[#c16b3e]" />
            </div>
          </div>
        ) : (
          <button 
            onClick={onSignIn}
            className="px-5 py-2 bg-[#c16b3e] text-white text-sm font-medium hover:bg-[#92400E] transition-colors"
          >
            Sign In
          </button>
        )}
      </nav>

      {/* Mobile Hamburger */}
      <button 
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
      >
        <Menu className="h-5 w-5 text-[#c16b3e]" strokeWidth={2} />
      </button>
    </header>
  );
}
