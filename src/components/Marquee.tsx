import { motion, useAnimationControls } from 'motion/react';
import { useEffect, type ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode[];
  speed?: number;
  className?: string;
}

// Seamlessly scrolls a row of items left, duplicating them so the loop has no gap.
// Pauses on hover so users can read/click a logo.
export default function Marquee({ children, speed = 30, className }: MarqueeProps) {
  const duration = children.length * (speed / 10);
  const controls = useAnimationControls();

  const play = () => controls.start({
    x: ['0%', '-50%'],
    transition: { duration, repeat: Infinity, ease: 'linear' },
  });

  useEffect(() => {
    play();
  }, [duration]);

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent" />
      <motion.div
        className="flex w-max gap-6"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => play()}
        style={{ willChange: 'transform' }}
      >
        {[...children, ...children].map((child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
