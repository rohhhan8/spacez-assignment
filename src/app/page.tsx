'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/offers/Header';
import OfferCard from '@/components/offers/OfferCard';
import StickyNavTabs from '@/components/offers/StickyNavTabs';
import MobileBottomNav from '@/components/offers/MobileBottomNav';
import SignInCTA from '@/components/offers/SignInCTA';
import BonusGiftCardTeaser from '@/components/offers/BonusGiftCardTeaser';
import PaymentOfferTeaser from '@/components/offers/PaymentOfferTeaser';
import Toast from '@/components/ui/Toast';
import LoginModal from '@/components/ui/LoginModal';
import SideMenu from '@/components/ui/SideMenu';
import WelcomePopup from '@/components/ui/WelcomePopup';
import { coupons, giftCards, paymentOffers } from '@/lib/data';
import { SectionId, ToastState } from '@/types';

/**
 * Spacez Offers Page
 * 
 * - Desktop: Full nav in header, 2-col grid, no sticky tabs
 * - Mobile: Hamburger menu, sticky tabs, bottom nav
 */
export default function OffersPage() {
  // Auth state
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  // Navigation state
  const [activeSection, setActiveSection] = useState<SectionId>('coupons');
  
  // Toast state
  const [toast, setToast] = useState<ToastState>({ isVisible: false, message: '' });

  // Section refs for scroll spy
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    coupons: null,
    giftcards: null,
    payment: null,
  });

  // Scroll spy with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { 
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0 
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Tab click handler
  const handleTabClick = useCallback((section: SectionId) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Open login modal
  const handleOpenLogin = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  // Login success handler
  const handleLoginSuccess = useCallback(() => {
    setIsSignedIn(true);
    setIsLoginModalOpen(false);
    setToast({ isVisible: true, message: 'Welcome! All offers are now unlocked 🎉' });
  }, []);

  // Logout handler
  const handleLogout = useCallback(() => {
    setIsSignedIn(false);
    setToast({ isVisible: true, message: 'You have been logged out' });
  }, []);

  // Copy code handler
  const handleCopy = useCallback((code: string) => {
    setToast({ isVisible: true, message: `Code "${code}" copied to clipboard!` });
  }, []);

  // Close toast
  const handleCloseToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  return (
    <div className="min-h-screen bg-white pb-20 sm:pb-0">
      {/* Header - Full nav on desktop, hamburger on mobile */}
      <Header 
        onMenuClick={() => setIsSideMenuOpen(true)} 
        isSignedIn={isSignedIn}
        onSignIn={handleOpenLogin}
        onLogout={handleLogout}
      />

      {/* Info Banner - Desktop */}
      <div className="hidden lg:block bg-[#fdf9f7] border border-[#E5D5C3] mx-8 mt-3 rounded-lg">
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="text-[#c16b3e]">✨</span>
          <p className="text-sm text-gray-700">
            You can now apply two Spacez Offers along with the Festive Offer and Referral Discount!
          </p>
        </div>
      </div>

      {/* Sign In CTA - Mobile only or when logged out on desktop */}
      <div className="lg:hidden">
        <SignInCTA isSignedIn={isSignedIn} onSignIn={handleOpenLogin} />
      </div>

      {/* Sticky Navigation Tabs - Mobile only */}
      <StickyNavTabs activeSection={activeSection} onTabClick={handleTabClick} />

      {/* Main Content */}
      <main className="px-4 lg:px-8 py-5">
        
        {/* ========== COUPONS SECTION ========== */}
        <section
          id="coupons"
          ref={(el) => { sectionRefs.current.coupons = el; }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Stay Offers
          </h2>
          
          {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {coupons.map((coupon, index) => (
              <motion.div
                key={coupon.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <OfferCard offer={coupon} onAction={handleCopy} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== GIFT CARDS SECTION ========== */}
        <section
          id="giftcards"
          ref={(el) => { sectionRefs.current.giftcards = el; }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold text-[#1F2937] mb-1">
            Bonus gift cards:
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Collect multiple of these
          </p>
          
          <AnimatePresence mode="wait">
            {!isSignedIn ? (
              <motion.div
                key="teaser-gift"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
              >
                <BonusGiftCardTeaser onButtonClick={handleOpenLogin} />
              </motion.div>
            ) : (
              <motion.div
                key="list-gift"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                {giftCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <OfferCard 
                      offer={card} 
                      actionLabel="Collect"
                      onAction={handleCopy} 
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ========== PAYMENT OFFERS SECTION ========== */}
        <section
          id="payment"
          ref={(el) => { sectionRefs.current.payment = el; }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold text-[#1F2937] mb-4">
            Payment offers:
          </h2>
          
          <AnimatePresence mode="wait">
            {!isSignedIn ? (
              <motion.div
                key="teaser-payment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
              >
                <PaymentOfferTeaser onButtonClick={handleOpenLogin} />
              </motion.div>
            ) : (
              <motion.div
                key="list-payment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                {paymentOffers.map((offer, index) => (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <OfferCard offer={offer} onAction={handleCopy} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav isSignedIn={isSignedIn} onSignIn={handleOpenLogin} />

      {/* Side Menu - Mobile only */}
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
        isSignedIn={isSignedIn}
        onLogout={handleLogout}
        onSignIn={handleOpenLogin}
      />

      {/* Ghost Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Welcome Popup for Assignment Viewers */}
      <WelcomePopup />

      {/* Toast Notification */}
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        onClose={handleCloseToast}
      />
    </div>
  );
}
