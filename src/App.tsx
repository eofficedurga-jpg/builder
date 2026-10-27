/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { WhatChanges } from './components/WhatChanges';
import { SampleBuilds } from './components/SampleBuilds';
import { Calculator } from './components/Calculator';
import { HowItWorks } from './components/HowItWorks';
import { Founder } from './components/Founder';
import { AuditPanel } from './components/AuditPanel';
import { Questions } from './components/Questions';
import { Closing } from './components/Closing';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#18181B] selection:bg-[#FFB020] selection:text-[#18181B] flex flex-col font-sans overflow-x-hidden">
      {/* 1. Top bar: logo, links to sections, Free audit call pill */}
      <TopBar />

      <main className="flex-1 w-full">
        {/* 2. Hero on the dark colour with WhatsApp simulator and problem headline */}
        <Hero />

        {/* 3. Marquee: two full-width rows moving in opposite directions */}
        <Marquee />

        {/* 4. What changes for you: cards with problem headings and highlight icons */}
        <WhatChanges />

        {/* 5. Sample builds: work-1, work-2, work-3 with coded badges */}
        <SampleBuilds />

        {/* 6. Proof: What missed site visits cost you calculator */}
        <Calculator />

        {/* 7. How it works: three steps joined by highlight line */}
        <HowItWorks />

        {/* 8. Founder: 4:5 frame, Durga Prasan, role, about me, and CTA */}
        <Founder />

        {/* 9. Free audit call: dark panel with 3 takeaways and CTA */}
        <AuditPanel />

        {/* 10. Questions: 4 accordions strictly from MY DETAILS */}
        <Questions />

        {/* 11. Closing: place.jpg under dark layer, big headline, CTA, and footer */}
        <Closing />
      </main>

      {/* Mobile Sticky Bar: Book a free audit call */}
      <StickyBottomBar />
    </div>
  );
}
