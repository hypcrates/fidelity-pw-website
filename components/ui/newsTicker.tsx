'use client';

import { motion } from 'framer-motion';
import { FaScroll } from 'react-icons/fa';
import React from 'react';

interface NewsTickerProps {
  items?: string[];
}

const defaultNewsItems = [
  'Nova atualização disponível! Confira o patch notes para mais informações.',
  'Evento especial de aniversário começando nesta sexta-feira!',
  'Manutenção programada para 02/05 às 10:00 GMT-3.',
];

export default function NewsTicker({
  items = defaultNewsItems,
}: NewsTickerProps) {
  return (
    <div
      className="top-0 w-full z-50 overflow-hidden shadow-lg flex justify-center border-b border-[var(--primary)] py-2 px-2 sticky"
      style={{
        background: 'linear-gradient(to right, #1a0a0e, #471624, #1a0a0e)',
      }}
    >
      <div className="flex items-center justify-center mx-auto w-full max-w-[1200px] px-2 md:px-0">
        {/* Título */}
        <div className="font-head flex items-center mr-1 md:mr-4 whitespace-nowrap uppercase font-bold text-[8px] md:text-sm text-[var(--primary)] tracking-[1px]">
          <FaScroll className="md:mr-2 text-[8px] md:text-lg md:flex hidden" />
          ÚLTIMAS NOTÍCIAS:
        </div>

        {/* Área de animação */}
        <div className="relative flex-grow overflow-hidden h-[24px] sm:h-[28px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center text-[8px] md:text-sm whitespace-normal text-[var(--primary-light)]"
              animate={{
                opacity: [0, 1, 1, 0, 0],
                x: ['100%', '0%', '0%', '-100%', '-100%'],
              }}
              transition={{
                duration: 20,
                times: [0, 0.05, 0.25, 0.3, 1],
                repeat: Infinity,
                delay: index * 5,
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
