'use client';

interface SignInCTAProps {
  isSignedIn: boolean;
  onSignIn: () => void;
}

/**
 * SignInCTA - Page title with sign in button
 */
export default function SignInCTA({ isSignedIn, onSignIn }: SignInCTAProps) {
  return (
    <div className="px-4 py-4 bg-white">
      <h1 className="text-2xl font-semibold text-[#1F2937] mb-2">
        Offers
      </h1>

      <p className="text-sm text-[#6B7280] mb-4">
        {isSignedIn 
          ? 'Book directly with us to get exclusive benefits'
          : 'Sign in to unlock exclusive additional rewards'
        }
      </p>

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
