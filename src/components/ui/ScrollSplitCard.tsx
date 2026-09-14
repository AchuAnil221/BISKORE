"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

interface ScrollSplitCardItem {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon?: React.ReactNode;
}

interface ScrollSplitCardProps {
  className?: string;
  imageSrc: string;
  cards: ScrollSplitCardItem[];
  containerRef?: React.RefObject<HTMLElement | null>;
  titleNode?: React.ReactNode;
}

export function ScrollSplitCard({
  className,
  imageSrc,
  cards,
  containerRef: externalContainerRef,
  titleNode,
}: ScrollSplitCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: externalContainerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.9]);
  const rotateY = useTransform(scrollYProgress, [0.35, 0.9], [0, 180]);

  const borderOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.2]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.4]);
  const boxShadow = useMotionTemplate`inset 0 1px 1px rgba(255, 255, 255, ${borderOpacity}), inset 0 -24px 48px rgba(0, 0, 0, ${shadowOpacity}), 0 25px 50px -12px rgba(0, 0, 0, ${shadowOpacity})`;

  // Positions and rotations for up to 5 cards
  const getX = (i: number, total: number) => {
    const center = (total - 1) / 2;
    const diff = i - center;
    // Stage 1 to 2: Separate further (-32 per step), then overlap closer (-16 per step)
    return useTransform(scrollYProgress, [0, 0.35, 0.9], [0, diff * 32, diff * 16]);
  };

  const getRotateZ = (i: number, total: number) => {
    const center = (total - 1) / 2;
    const diff = i - center;
    // Stage 2 to 3: slight fan out
    return useTransform(scrollYProgress, [0.35, 0.9], [0, diff * -6]);
  };

  const getBorderRadius = (i: number, total: number) => {
    if (i === 0) return useTransform(scrollYProgress, [0, 0.2], ["16px 0px 0px 16px", "16px 16px 16px 16px"]);
    if (i === total - 1) return useTransform(scrollYProgress, [0, 0.2], ["0px 16px 16px 0px", "16px 16px 16px 16px"]);
    return useTransform(scrollYProgress, [0, 0.2], ["0px 0px 0px 0px", "16px 16px 16px 16px"]);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative h-[300vh] w-full", className)}
    >
      <div className="sticky top-0 flex flex-col h-screen w-full items-center justify-center overflow-hidden [perspective:1200px]">
        {titleNode && (
          <div className="relative z-10 w-full" style={{ marginBottom: '5rem' }}>
            {titleNode}
          </div>
        )}

        <motion.div
          style={{ scale, transformStyle: "preserve-3d" }}
          className="flex h-[400px] w-full max-w-5xl px-8 relative justify-center"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="relative h-full flex-1"
              style={{
                x: getX(i, cards.length),
                rotateY,
                rotateZ: getRotateZ(i, cards.length),
                zIndex: i,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front Side: Original Image Split */}
              <motion.div
                className="absolute inset-0 overflow-hidden [backface-visibility:hidden]"
                style={{
                  zIndex: 2, // Ensure front stays above initially
                  borderRadius: getBorderRadius(i, cards.length),
                  boxShadow,
                }}
              >
                <div
                  className="absolute inset-0 h-full"
                  style={{
                    width: `${cards.length * 100}%`,
                    left: `${-100 * i}%`,
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                  }}
                />
              </motion.div>

              {/* Back Side: New Content Card */}
              <motion.div
                className={cn(
                  "absolute inset-0 overflow-hidden flex flex-col justify-center items-center text-center px-4 py-6 [backface-visibility:hidden] will-change-transform",
                  "border border-white/5 bg-gradient-to-br from-white/10 to-transparent",
                  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-24px_48px_rgba(0,0,0,0.2)]"
                )}
                style={{
                  backgroundColor: card.bgColor,
                  color: card.textColor,
                  transform: "rotateY(180deg)",
                  zIndex: 1, // Ensure back is behind before flip
                  borderRadius: getBorderRadius(i, cards.length),
                  boxShadow,
                }}
              >
                {/* Grainy Noise Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256")`,
                    backgroundRepeat: "repeat",
                  }}
                />

                {card.icon && <div className="relative z-10 mb-4">{card.icon}</div>}
                <h3 className="relative z-10 mb-3 text-xl font-bold leading-tight max-w-[85%]">
                  {card.title}
                </h3>
                <p className="relative z-10 text-xs sm:text-sm opacity-90 leading-relaxed max-w-[85%] break-words">
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
