import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageSquare, Calendar, CheckCircle } from 'lucide-react';

interface BuildRow {
  imageSrc: string;
  imageAlt: string;
  title: string;
  whatYouGet: string;
  whatChangesForYou: string;
  bubbleIcon: React.ElementType;
  bubbleText: string;
  bubbleSub: string;
  imageOnLeft: boolean;
}

const BUILDS: BuildRow[] = [
  {
    imageSrc: '/work-1.jpg',
    imageAlt: 'Front desk coordinator smiling at smartphone in Kakinada builder office',
    title: 'Instant finish rate reply on WhatsApp',
    whatYouGet:
      'A direct WhatsApp response loaded with your basic finish rate per square foot and your recent project photos.',
    whatChangesForYou:
      'Families planning a new home receive your rates right away, before other builders in Kakinada pick up the phone.',
    bubbleIcon: MessageSquare,
    bubbleText: 'Rate inquiry received',
    bubbleSub: 'Finish rate card sent to family',
    imageOnLeft: true,
  },
  {
    imageSrc: '/work-2.jpg',
    imageAlt: 'Builder contractor reviewing confirmed site visit on phone in Kakinada office',
    title: 'Automated site visit booking',
    whatYouGet:
      'An interactive booking link that lets families pick an available morning or weekend slot to inspect the site with you.',
    whatChangesForYou:
      'You arrive at confirmed site visits with serious families who already know your basic rate.',
    bubbleIcon: Calendar,
    bubbleText: 'Site visit confirmed',
    bubbleSub: 'Saturday 10:30 AM · Ramanayyapeta plot',
    imageOnLeft: false,
  },
  {
    imageSrc: '/work-3.jpg',
    imageAlt: 'Happy homeowner client holding smartphone in Kakinada after meeting contractor',
    title: 'Lead recovery and family hand-off',
    whatYouGet:
      'Gentle follow-up messages sent to quiet leads, handing ready families straight over to your personal line.',
    whatChangesForYou:
      'You stop losing house building contracts simply because a family got busy and forgot to reply.',
    bubbleIcon: CheckCircle,
    bubbleText: 'Family re-engaged',
    bubbleSub: 'Handed off to your phone to close',
    imageOnLeft: true,
  },
];

export const SampleBuilds: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="sample-builds" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E4E2DC]">
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60 mb-2 block">
          Tested workflows
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#18181B] leading-tight">
          Sample builds
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#18181B]/80 leading-relaxed">
          See exactly how the Quote Reply Fix works for house construction businesses in Kakinada.
        </p>
      </div>

      <div className="space-y-20 sm:space-y-28">
        {BUILDS.map((item, idx) => {
          const BubbleIcon = item.bubbleIcon;
          return (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                item.imageOnLeft ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Photo Column with coded notification bubble */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className={`relative ${
                  item.imageOnLeft ? 'lg:col-span-7 lg:order-1' : 'lg:col-span-7 lg:order-2'
                }`}
              >
                <div className="relative rounded-[24px] overflow-hidden bg-[#18181B] shadow-lg border border-[#E4E2DC] aspect-[3/2]">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Coded chat bubble or notification badge overlapping photo corner */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`absolute -bottom-5 sm:-bottom-6 ${
                    item.imageOnLeft ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
                  } bg-[#18181B] text-white rounded-2xl p-3 sm:p-4 shadow-xl border border-[#27272A] flex items-center gap-3.5 max-w-[280px] sm:max-w-xs`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFB020] text-[#18181B] flex items-center justify-center shrink-0">
                    <BubbleIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-white truncate">
                      {item.bubbleText}
                    </p>
                    <p className="text-[11px] text-[#F6F5F1]/70 truncate">
                      {item.bubbleSub}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex flex-col space-y-6 ${
                  item.imageOnLeft ? 'lg:col-span-5 lg:order-2' : 'lg:col-span-5 lg:order-1'
                }`}
              >
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#18181B] bg-[#FFB020] px-3 py-1 rounded-full">
                    Sample build
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#18181B] leading-tight">
                  {item.title}
                </h3>

                <div className="space-y-4 pt-2">
                  <div className="bg-white rounded-2xl p-5 border border-[#E4E2DC]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60 mb-1.5">
                      What you get
                    </h4>
                    <p className="text-sm sm:text-base text-[#18181B] leading-relaxed">
                      {item.whatYouGet}
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-[#E4E2DC]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60 mb-1.5">
                      What changes for you
                    </h4>
                    <p className="text-sm sm:text-base text-[#18181B] leading-relaxed">
                      {item.whatChangesForYou}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
