import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Check, CheckCheck } from 'lucide-react';
import { BOOKING_URL } from './TopBar';

interface ChatMessage {
  sender: 'lead' | 'bot';
  text: string;
  time: string;
}

interface ChatTab {
  id: string;
  label: string;
  sublabel: string;
  messages: ChatMessage[];
}

const CHAT_TABS: ChatTab[] = [
  {
    id: 'rate',
    label: 'Finish Rate Reply',
    sublabel: 'Instant basic finish rate',
    messages: [
      {
        sender: 'lead',
        text: 'Namaste, we have a 200 sq. yard plot in Ramanayyapeta, Kakinada. What is your basic finish rate for a duplex house?',
        time: '10:14 AM',
      },
      {
        sender: 'bot',
        text: 'Namaste. For turnkey duplex construction in Kakinada with RCC frame, red brick masonry, and vitrified finish, our basic finish rate is shared directly with you. Would you like our finish rate card, or should we walk a live site together this week?',
        time: '10:14 AM',
      },
      {
        sender: 'lead',
        text: 'Please share the finish rate card and site visit slots.',
        time: '10:15 AM',
      },
    ],
  },
  {
    id: 'visit',
    label: 'Site Visit Scheduler',
    sublabel: 'Walk the plot together',
    messages: [
      {
        sender: 'lead',
        text: 'Can we meet at our plot in Madhavapatnam this Saturday?',
        time: '11:22 AM',
      },
      {
        sender: 'bot',
        text: 'Saturday morning at 10:30 AM is open. We will bring our structural engineer and sample elevation sheets to your plot. Tap below to confirm this slot.',
        time: '11:22 AM',
      },
      {
        sender: 'lead',
        text: 'Saturday 10:30 AM confirmed. See you at the site.',
        time: '11:23 AM',
      },
    ],
  },
  {
    id: 'followup',
    label: 'Lead Recovery',
    sublabel: 'Re-engage quiet families',
    messages: [
      {
        sender: 'bot',
        text: 'Namaste. Checking in on your house plan in Kakinada. Durga Prasan is reviewing structural drawings tomorrow afternoon if you would like to go over your floor plan together.',
        time: '4:05 PM',
      },
      {
        sender: 'lead',
        text: 'Namaste sir, sorry for the delay. We are finalizing our bank loan. Can we meet tomorrow at 4 PM?',
        time: '4:18 PM',
      },
      {
        sender: 'bot',
        text: 'Tomorrow at 4 PM is locked in. Looking forward to meeting you at our Kakinada office.',
        time: '4:19 PM',
      },
    ],
  },
];

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [visibleMessageCount, setVisibleMessageCount] = useState<number>(CHAT_TABS[0].messages.length);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-switch tabs if user hasn't clicked
  useEffect(() => {
    if (userInteracted || shouldReduceMotion) return;

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % CHAT_TABS.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [userInteracted, shouldReduceMotion]);

  // Animate chat messages typing in when activeTab changes
  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleMessageCount(CHAT_TABS[activeTab].messages.length);
      return;
    }

    setVisibleMessageCount(1);
    const t1 = setTimeout(() => setVisibleMessageCount(2), 600);
    const t2 = setTimeout(() => setVisibleMessageCount(3), 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [activeTab, shouldReduceMotion]);

  const handleTabSelect = (index: number) => {
    setUserInteracted(true);
    setActiveTab(index);
  };

  return (
    <section className="relative overflow-hidden bg-[#18181B] text-[#F6F5F1] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#27272A]">
      {/* Soft drifting saffron highlight glow */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FFB020]/15 blur-[120px] pointer-events-none"
        />
      )}
      {!shouldReduceMotion && (
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#FFB020]/10 blur-[130px] pointer-events-none"
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Audience Pill */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#27272A] border border-[#3F3F46] text-xs font-semibold tracking-wide text-[#F6F5F1]"
            >
              <span>For small builders and construction contractors in Kakinada</span>
            </motion.div>

            {/* Headline naming the problem, said to the reader */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white tracking-tight"
            >
              You lose house building contracts when inquiries wait for a quote.
            </motion.h1>

            {/* One plain sentence under it */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#F6F5F1]/80 leading-relaxed max-w-2xl"
            >
              When an inquiry comes in, WhatsApp goes back to that family at once with your basic finish rate and a time to visit the site.
            </motion.p>

            {/* CTA Button and helper line */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full sm:w-auto pt-2 flex flex-col items-start gap-3"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#18181B] bg-[#FFB020] hover:bg-[#ffb936] active:scale-95 transition-all rounded-full shadow-lg shadow-[#FFB020]/20"
              >
                <span>Book a free audit call</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              {/* One small line under the buttons */}
              <p className="text-xs sm:text-sm text-[#F6F5F1]/70 pl-1">
                Free 1:1 call. You leave with a plan to grow your construction business with AI.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Phone showing WhatsApp chat */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Tabs for each thing I set up */}
            <div className="w-full max-w-sm mb-3 flex items-center gap-1.5 p-1 bg-[#27272A] rounded-xl border border-[#3F3F46]">
              {CHAT_TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(idx)}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap ${
                    activeTab === idx
                      ? 'bg-[#FFB020] text-[#18181B] shadow-sm'
                      : 'text-[#F6F5F1]/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Phone Frame */}
            <div className="w-full max-w-sm rounded-[32px] p-3 bg-[#0F0F11] border-2 border-[#3F3F46] shadow-2xl shadow-black/60 relative">
              {/* Phone Camera Notch */}
              <div className="w-24 h-4 bg-[#18181B] rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#27272A]" />
              </div>

              {/* WhatsApp Interface Inside */}
              <div className="bg-[#0b141a] rounded-[24px] overflow-hidden border border-[#27272A] flex flex-col h-[400px]">
                {/* WhatsApp Top Bar */}
                <div className="bg-[#202c33] px-3.5 py-2.5 flex items-center justify-between text-white border-b border-[#2a3942]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FFB020] text-[#18181B] flex items-center justify-center font-bold text-xs font-heading">
                      N
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">Your Construction Office</p>
                      <p className="text-[10px] text-[#25D366]">online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <span className="text-[11px] bg-[#111b21] px-2 py-0.5 rounded text-gray-300">WhatsApp</span>
                  </div>
                </div>

                {/* WhatsApp Message Area with subtle wallpaper texture */}
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[#0b141a] bg-opacity-95 text-xs">
                  <div className="text-center my-1">
                    <span className="text-[10px] bg-[#182229] text-gray-400 px-2 py-0.5 rounded-md">
                      Today · Kakinada
                    </span>
                  </div>

                  {CHAT_TABS[activeTab].messages.slice(0, visibleMessageCount).map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex flex-col max-w-[85%] rounded-lg p-2.5 ${
                        msg.sender === 'lead'
                          ? 'mr-auto bg-[#202c33] text-gray-100 rounded-tl-none'
                          : 'ml-auto bg-[#005c4b] text-white rounded-tr-none'
                      }`}
                    >
                      <p className="leading-relaxed text-[12px]">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-gray-300">
                        <span>{msg.time}</span>
                        {msg.sender === 'bot' && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
                        {msg.sender === 'lead' && <Check className="w-3 h-3 text-gray-400" />}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp Input Mock Bar */}
                <div className="bg-[#202c33] p-2 flex items-center gap-2 border-t border-[#2a3942]">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-[11px] text-gray-400">
                    Message
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center text-white text-xs">
                    ➤
                  </div>
                </div>
              </div>
            </div>

            {/* Small caption under phone */}
            <p className="text-xs text-[#F6F5F1]/60 mt-3 font-medium">
              Example chat
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
