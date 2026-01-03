'use client';

import Image from 'next/image';

interface MobileBottomNavProps {
  isSignedIn: boolean;
  onSignIn: () => void;
}

/**
 * MobileBottomNav Component
 * 
 * Uses custom SVG icons from public folder.
 * Active item uses #874B2C color.
 */
export default function MobileBottomNav({ isSignedIn, onSignIn }: MobileBottomNavProps) {
  const navItems = [
    { id: 'explore', label: 'Explore', icon: '/search.svg' },
    { id: 'offers', label: 'Offers', icon: '/offer.svg' },
    { id: 'bookings', label: 'Bookings', icon: '/explore.svg' },
    { id: 'wishlist', label: 'Wishlist', icon: '/wishlist.svg' },
    { id: isSignedIn ? 'profile' : 'signin', label: isSignedIn ? 'Profile' : 'Sign In', icon: '/profile.svg' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 sm:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = item.id === 'offers';
          const isSignInButton = item.id === 'signin';
          
          return (
            <button
              key={item.id}
              onClick={isSignInButton ? onSignIn : undefined}
              className="flex flex-col items-center gap-1 px-3 py-1.5 min-w-0"
            >
              <div className="relative w-6 h-6">
                <Image 
                  src={item.icon}
                  alt={item.label}
                  fill
                  className={`object-contain ${isActive ? '' : 'opacity-60'}`}
                  style={{
                    filter: isActive 
                      ? 'brightness(0) saturate(100%) invert(30%) sepia(50%) saturate(800%) hue-rotate(350deg) brightness(90%) contrast(90%)' 
                      : 'none'
                  }}
                />
              </div>
              <span 
                className={`text-[10px] font-medium ${isActive ? 'text-[#874B2C]' : 'text-[#6B7280]'}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Safe area for notched phones */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
