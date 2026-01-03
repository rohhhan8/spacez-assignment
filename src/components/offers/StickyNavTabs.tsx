'use client';

import { StickyNavTabsProps, SectionId } from '@/types';

const tabs: { id: SectionId; label: string }[] = [
  { id: 'coupons', label: 'Coupons' },
  { id: 'giftcards', label: 'Giftcards' },
  { id: 'payment', label: 'Payment Offers' },
];

/**
 * StickyNavTabs Component
 * 
 * Full-width tabs with underline indicator matching Figma design.
 */
export default function StickyNavTabs({ activeSection, onTabClick }: StickyNavTabsProps) {
  return (
    <nav className="sticky top-0 z-40 bg-white">
      <div className="flex items-center justify-between border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
            className={`
              flex-1 relative py-3 text-sm font-medium transition-colors text-center
              ${activeSection === tab.id 
                ? 'text-[#1F2937]' 
                : 'text-[#9CA3AF]'
              }
            `}
          >
            {tab.label}
            
            {/* Active underline - full width of tab */}
            {activeSection === tab.id && (
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1F2937] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
