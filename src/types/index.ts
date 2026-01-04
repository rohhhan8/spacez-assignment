/**
 * Spacez Offers - TypeScript Interfaces
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
  discountLabel: string;
  stripColor: StripColor;
  brandLogo?: string;
  brandName?: string;
  readMoreLink?: string;
  terms?: string;
}

/** Props for OfferCard component */
export interface OfferCardProps {
  offer: Offer;
  actionLabel?: string;
  onAction?: (code: string) => void;
}

/** Props for StickyNavTabs component */
export interface StickyNavTabsProps {
  activeSection: SectionId;
  onTabClick: (section: SectionId) => void;
}

/** Toast notification state */
export interface ToastState {
  isVisible: boolean;
  message: string;
}
