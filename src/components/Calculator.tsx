import React, { useState, useId } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Calculator as CalcIcon } from 'lucide-react';
import { BOOKING_URL } from './TopBar';

export const Calculator: React.FC = () => {
  // Round example start values under "Your numbers"
  const [inquiriesPerMonth, setInquiriesPerMonth] = useState<number>(10);
  const [missRatePercent, setMissRatePercent] = useState<number>(30);
  const [averageBill, setAverageBill] = useState<number>(1500000); // 15 Lakhs
  const shouldReduceMotion = useReducedMotion();

  const inquiriesId = useId();
  const missRateId = useId();
  const billId = useId();

  // Math
  const missedCustomersPerMonth = inquiriesPerMonth * (missRatePercent / 100);
  const lostPerMonth = Math.round(missedCustomersPerMonth * averageBill);
  const lostPerYear = Math.round(lostPerMonth * 12);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E4E2DC]">
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60 mb-2 block">
          Interactive calculator
        </span>
        {/* Headed "What missed appointments cost you" in my clients' words (site visits) */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#18181B] leading-tight">
          What missed site visits cost you
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#18181B]/80 leading-relaxed">
          Slide the values below to see how much revenue slips away when inquiries do not turn into confirmed site visits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Sliders under label "Your numbers" */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-10 border border-[#E4E2DC] shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-[#18181B] text-[#FFB020] flex items-center justify-center">
                <CalcIcon className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#18181B]">
                Your numbers
              </h3>
            </div>

            <div className="space-y-8">
              {/* Slider 1: Customers / Inquiries a month */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={inquiriesId} className="text-sm font-semibold text-[#18181B]">
                    House inquiries a month
                  </label>
                  <span className="font-heading font-bold text-lg text-[#18181B] bg-[#F6F5F1] px-3 py-1 rounded-lg tabular-nums">
                    {inquiriesPerMonth} families
                  </span>
                </div>
                <input
                  id={inquiriesId}
                  type="range"
                  min={2}
                  max={40}
                  step={1}
                  value={inquiriesPerMonth}
                  onChange={(e) => setInquiriesPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E4E2DC] rounded-lg appearance-none cursor-pointer accent-[#18181B]"
                />
                <div className="flex justify-between text-xs text-[#18181B]/60 mt-1">
                  <span>2 inquiries</span>
                  <span>40 inquiries</span>
                </div>
              </div>

              {/* Slider 2: Share who miss their appointment / site visit */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={missRateId} className="text-sm font-semibold text-[#18181B]">
                    Share who miss their site visit
                  </label>
                  <span className="font-heading font-bold text-lg text-[#18181B] bg-[#F6F5F1] px-3 py-1 rounded-lg tabular-nums">
                    {missRatePercent}%
                  </span>
                </div>
                <input
                  id={missRateId}
                  type="range"
                  min={10}
                  max={70}
                  step={5}
                  value={missRatePercent}
                  onChange={(e) => setMissRatePercent(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E4E2DC] rounded-lg appearance-none cursor-pointer accent-[#18181B]"
                />
                <div className="flex justify-between text-xs text-[#18181B]/60 mt-1">
                  <span>10% missed</span>
                  <span>70% missed</span>
                </div>
              </div>

              {/* Slider 3: Average bill in Kakinada currency (INR) */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={billId} className="text-sm font-semibold text-[#18181B]">
                    Average contract bill
                  </label>
                  <span className="font-heading font-bold text-lg text-[#18181B] bg-[#F6F5F1] px-3 py-1 rounded-lg tabular-nums">
                    {formatINR(averageBill)}
                  </span>
                </div>
                <input
                  id={billId}
                  type="range"
                  min={500000}
                  max={4000000}
                  step={100000}
                  value={averageBill}
                  onChange={(e) => setAverageBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E4E2DC] rounded-lg appearance-none cursor-pointer accent-[#18181B]"
                />
                <div className="flex justify-between text-xs text-[#18181B]/60 mt-1">
                  <span>₹5,00,000</span>
                  <span>₹40,00,000</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#18181B]/60 mt-8 pt-4 border-t border-[#E4E2DC]">
            Adjust the sliders to match your firm's monthly inquiry flow in Kakinada.
          </p>
        </motion.div>

        {/* Right Column: Large Numbers Result Panel */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 bg-[#18181B] text-[#F6F5F1] rounded-[24px] p-6 sm:p-10 border border-[#27272A] flex flex-col justify-between shadow-xl"
        >
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB020] block">
              Estimated lost revenue
            </span>

            {/* Money lost a month */}
            <div className="p-5 rounded-2xl bg-[#27272A]/70 border border-[#3F3F46]">
              <p className="text-xs font-medium text-[#F6F5F1]/70 uppercase tracking-wider mb-1">
                Money lost a month
              </p>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-white tabular-nums tracking-tight">
                {formatINR(lostPerMonth)}
              </p>
            </div>

            {/* Money lost a year */}
            <div className="p-5 rounded-2xl bg-[#0F0F11] border border-[#27272A]">
              <p className="text-xs font-medium text-[#F6F5F1]/70 uppercase tracking-wider mb-1">
                Money lost a year
              </p>
              <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFB020] tabular-nums tracking-tight">
                {formatINR(lostPerYear)}
              </p>
            </div>

            {/* Exact required line under result: "Your estimate. We go through it on the free audit call." */}
            <p className="text-sm text-[#F6F5F1]/80 leading-relaxed pt-2">
              Your estimate. We go through it on the free audit call.
            </p>
          </div>

          {/* Book a free audit call */}
          <div className="pt-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-[#18181B] bg-[#FFB020] hover:bg-[#ffb936] active:scale-95 transition-all rounded-full shadow-md whitespace-nowrap"
            >
              <span>Book a free audit call</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
