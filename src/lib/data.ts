import { Offer } from '@/types';

/**
 * Mock Offers Data
 * Simulates API response for Spacez offers page
 * 
 * Strip Colors:
 * - Spacez coupons: #BD693D (orange)
 * - HDFC: #1A73E8 (blue)
 * - Myntra: #F41CB2 (pink)
 * - Hammer: #000000 (black)
 * - ICICI: #AE282E (red)
 */

export const coupons: Offer[] = [
    {
        id: 'coup_001',
        type: 'coupon',
        code: 'LONGSTAY',
        title: 'LONGSTAY',
        description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
        discountLabel: '₹1,500',
        stripColor: 'orange',
        brandName: 'Spacez',
    },
    {
        id: 'coup_002',
        type: 'coupon',
        code: 'EARLYBIRD',
        title: 'EARLYBIRD',
        description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
        discountLabel: '₹3,000',
        stripColor: 'orange',
        brandName: 'Spacez',
    },
    {
        id: 'coup_003',
        type: 'coupon',
        code: 'RUSHDEAL',
        title: 'RUSHDEAL',
        description: '15% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
        discountLabel: 'Flat 10%',
        stripColor: 'orange',
        brandName: 'Spacez',
    },
];

export const giftCards: Offer[] = [
    {
        id: 'gift_001',
        type: 'giftcard',
        code: 'MYNTRA500',
        title: 'MYNTRA',
        description: 'Get this gift voucher on booking above ₹1500',
        discountLabel: '₹500',
        stripColor: 'pink',
        brandName: 'Myntra',
    },
    {
        id: 'gift_002',
        type: 'giftcard',
        code: 'HAMMER1000',
        title: 'HAMMER',
        description: 'Get this gift voucher on booking above ₹1500',
        discountLabel: '₹1000',
        stripColor: 'black',
        brandName: 'Hammer',
    },
];

export const paymentOffers: Offer[] = [
    {
        id: 'pay_001',
        type: 'payment',
        code: 'HDFC10',
        title: 'HDFC BANK',
        description: 'Get 10% off on booking above ₹1500',
        discountLabel: '10% OFF',
        stripColor: 'blue',
        brandName: 'HDFC Bank',
    },
    {
        id: 'pay_002',
        type: 'payment',
        code: 'ICICI15',
        title: 'ICICI BANK',
        description: 'Get 15% off on booking above ₹2000',
        discountLabel: '15% OFF',
        stripColor: 'red',
        brandName: 'ICICI Bank',
    },
];
