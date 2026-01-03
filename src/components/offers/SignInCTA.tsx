'use client';

import { AuthState } from '@/types';

/**
 * SignInCTA Component
 * 
 * Matches Figma: Simple text + full-width button when signed out,
 * subtle text when signed in.
 */
export default function SignInCTA({ isSignedIn, onSignIn }: AuthState) {
  return (
    <div className="px-4 py-4 bg-white">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-[#1F2937] mb-2">
        Offers
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-[#6B7280] mb-4">
        {isSignedIn 
          ? 'Book directly with us to get exclusive benefits'
          : 'Sign in to unlock exclusive additional rewards'
        }
      </p>

      {/* Sign In Button - only when signed out */}
      {!isSignedIn && (
        <button
          onClick={onSignIn}
          className="
            w-full py-3.5
            bg-[#c16b3e] text-white
            font-medium text-base
            hover:bg-[#92400E] transition-colors
          "
        >
          Sign in
        </button>
      )}
    </div>
  );
}
