# 🏠 Spacez Offers Page

A **pixel-perfect**, production-ready offers page built with Next.js 15, TypeScript, and Tailwind CSS. Features a sophisticated sign-in flow with auto-demo, content gating, and responsive design.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Ghost Login** | Auto-typing phone & OTP demo for reviewers |
| **Content Gating** | Gift cards & payment offers unlock after sign-in |
| **Responsive Grid** | 1 → 2 → 3 columns (mobile → tablet → desktop) |
| **Scroll Spy** | Active tab updates based on scroll position |
| **Copy to Clipboard** | One-click code copying with toast feedback |

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view.

---

## 🏗️ Architecture

### Design Principles

1. **Component-First Architecture**
   - Atomic components (`OfferCard`, `Toast`) compose into features
   - Single Responsibility: each component does one thing well
   - Props-driven: no internal API calls, parent controls state

2. **Type Safety**
   - Strict TypeScript with zero `any` types
   - Centralized types in `src/types/index.ts`
   - Discriminated unions for offer types

3. **Scalability Patterns**
   - Data separated from UI (`src/lib/data.ts`)
   - Easy to swap mock data for API calls
   - Color mappings as objects for O(1) lookup

### Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page controller
│   ├── layout.tsx         # Root layout + fonts
│   └── globals.css        # Tailwind + custom utilities
├── components/
│   ├── offers/            # Domain-specific components
│   │   ├── Header.tsx
│   │   ├── OfferCard.tsx
│   │   ├── StickyNavTabs.tsx
│   │   └── ...
│   └── ui/                # Reusable UI components
│       ├── LoginModal.tsx
│       ├── Toast.tsx
│       └── ...
├── lib/
│   └── data.ts            # Mock data (swap with API)
└── types/
    └── index.ts           # TypeScript interfaces
```

---

## 🎨 Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#c16b3e` | Buttons, CTAs, brand accents |
| Primary Dark | `#874B2C` | Text, icons, hover states |
| Card BG | `#fdf9f7` | Offer card backgrounds |
| Text Primary | `#1F2937` | Headings |
| Text Secondary | `#6B7280` | Body text |

### Strip Colors (Offer Cards)

```typescript
const stripColors = {
  orange: '#c16b3e',   // Spacez coupons
  blue: '#1A73E8',     // HDFC Bank
  pink: '#F41CB2',     // Myntra
  black: '#000000',    // Hammer
  red: '#AE282E',      // ICICI
};
```

---

## 📱 Responsive Behavior

| Breakpoint | Layout | Features |
|------------|--------|----------|
| Mobile (< 768px) | Single column | Bottom nav, hamburger menu, sticky tabs |
| Tablet (768px+) | 2 columns | Larger cards |
| Desktop (1280px+) | 3 columns | Full nav in header, no sticky tabs |

---

## 🔐 Authentication Flow

The "Ghost Login" provides an automated demo:

1. **Auto-Type Phone** → Digits appear one-by-one
2. **OTP Sent** → Reveals OTP input
3. **Auto-Fill OTP** → "4521" fills automatically
4. **Verify** → Spinner + success animation
5. **Unlock** → All content becomes visible

This showcases the UX without requiring a real backend.

---

## 🧪 Technical Decisions

### Why These Choices?

| Decision | Rationale |
|----------|-----------|
| **Next.js 15** | App Router, server components, optimal bundling |
| **Framer Motion** | Smooth animations without complex CSS |
| **Lucide Icons** | Tree-shakeable, consistent style |
| **useCallback** | Prevents unnecessary re-renders |
| **IntersectionObserver** | Performant scroll spy (no scroll events) |

### Performance Optimizations

- **Image optimization** with `next/image`
- **Dynamic imports** for modals (code splitting)
- **Memoized handlers** with `useCallback`
- **CSS-in-JS avoided** for smaller bundle

---

## 📦 Dependencies

```json
{
  "next": "15.x",
  "react": "19.x",
  "typescript": "5.x",
  "tailwindcss": "3.4.x",
  "framer-motion": "11.x",
  "lucide-react": "0.x"
}
```

---

## 👨‍💻 Author

Built with ❤️ for the Spacez Frontend Assignment.

**Key Highlights:**
- Production-grade code quality
- Pixel-perfect Figma implementation
- Accessible, responsive, performant
- Clean architecture for maintainability

---

## 📄 License

MIT © 2026
