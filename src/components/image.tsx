import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Props = {
  src: string;
  alt?: string;
};

export default function (props: Props) {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isPopup && (
          <motion.div
            key="popup"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed cursor-pointer left-0 top-0 w-[101%] h-[101%] bg-no-repeat bg-center bg-contain bg-black/80 z-50"
            style={{
              backgroundImage: `url('${props.src}')`,
            }}
            onClick={() => setIsPopup(false)}
          />
        )}
      </AnimatePresence>

      <img
        src={props.src}
        alt={props.alt}
        className="cursor-pointer transition-transform duration-200 hover:scale-105 my-4"
        onClick={() => setIsPopup(true)}
      />
    </>
  );
}
