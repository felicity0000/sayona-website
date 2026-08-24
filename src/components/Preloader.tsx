import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import sayonaLogo from '../assets/sayona-logo.png';

const MIN_DISPLAY_MS = 900;

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => setVisible(false), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
      return () => window.removeEventListener('load', finish);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={sayonaLogo}
              alt="Sayona International"
              className="h-14 w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="relative h-0.5 w-40 overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3 bg-yellow-400"
                animate={{ x: ['-100%', '220%'] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
