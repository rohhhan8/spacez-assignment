/**
 * Spacez Offers - TypeScript Interfaces
 * Strict typing for the offers page components
 */

/** Strip color options for offer cards */
export type StripColor = 'orange' | 'blue' | 'pink' | 'black' | 'red';

/** Offer category types */
export type OfferType = 'coupon' | 'giftcard' | 'payment';

/** Section identifiers for scroll spy */
export type SectionId = 'coupons' | 'giftcards' | 'payment';

/** Core Offer interface */
export interface Offer {
  id: string;
  type: OfferType;
  code: string;
  title: string;
  description: string;
  /** Display text for the vertical strip: "₹1,500", "Flat 10%", "10% OFF" */
  discountLabel: string;
  stripColor: StripColor;
  brandLogo?: string;
  brandName?: string;
  readMoreLink?: string;
  /** Terms and conditions */
  terms?: string;
}

/** Props for OfferCard component */
export interface OfferCardProps {
  offer: Offer;
  actionLabel?: string;
  onAction?: (code: string) => void;
}

/** Props for TeaserCard component */
export interface TeaserCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  stripColor: StripColor;
}

/** Props for StickyNavTabs component */
export interface StickyNavTabsProps {
  activeSection: SectionId;
  onTabClick: (section: SectionId) => void;
}

/** Bottom navigation item */
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
}

/** Auth state for signed in/out logic */
export interface AuthState {
  isSignedIn: boolean;
  onSignIn: () => void;
}

/** Toast notification state */
export interface ToastState {
  isVisible: boolean;
  message: string;
}
