import { motion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

// Fades + slides an element in as it scrolls into view. Wraps a single block.
export const Reveal = ({ children, className, delay = 0, y = 24, once = true }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

const groupVariants = (stagger: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

const itemVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
});

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}

// Wraps a grid/list of RevealItem children and staggers their entrance.
export const RevealGroup = ({ children, className, stagger = 0.08, once = true }: RevealGroupProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once, amount: 0.15 }}
    variants={groupVariants(stagger)}
  >
    {children}
  </motion.div>
);

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

export const RevealItem = ({ children, className, y = 24 }: RevealItemProps) => (
  <motion.div className={className} variants={itemVariants(y)}>
    {children}
  </motion.div>
);
