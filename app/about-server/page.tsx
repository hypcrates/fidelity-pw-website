'use client';

import React from 'react';
import Image from 'next/image';
import { infoItems } from './_data/infoItems';

const AboutServer = () => {
  return (
    <section className="w-full py-20 bg-white bg-[url('/assets/images/Fundo-site.png')] bg-cover bg-[center_40px] bg-fixed">
      <div className="max-w-4xl mx-auto flex flex-col items-center relative bg-[var(--sand)] py-6">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center mb-20 w-full"
          >
            {/* Linha pontilhada */}
            {index !== 0 && (
              <div className="absolute top-[-60px] h-[60px] w-[2px] border-l-2 border-dotted border-gray-400"></div>
            )}

            {/* Banner */}
            <Image
              src={item.image}
              alt={item.title}
              sizes="100vw"
              width={600}
              height={100}
              className="shadow-lg max-w-full w-[90%] md:w-[600px] mb-6 pt-4"
              loading="lazy"
            />

            {/* Ícone circular */}
            <div className="flex items-center justify-center w-16 h-16 border-3 border-gray-400 text-[var(--black)] mb-4 transform rotate-45">
              <div className="transform rotate-315">
                <item.icon size={24} />
              </div>
            </div>

            {/* Título */}
            <h3 className="text-xl text-[var(--primary-dark)] font-head font-semibold">
              {item.title}
            </h3>

            {/* Descrição */}
            <p className="mt-2 text-gray-600 max-w-md leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutServer;
