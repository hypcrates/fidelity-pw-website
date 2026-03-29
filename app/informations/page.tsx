'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { races } from './_data/races';

const InformationsSection = () => {
  const [openRace, setOpenRace] = useState<string | null>(null);
  const [hoveredRace, setHoveredRace] = useState<string | null>(null);

  const toggleRace = (raceName: string) => {
    setOpenRace((prev) => (prev === raceName ? null : raceName));
  };

  return (
    <section className="w-full py-8 bg-[url('/assets/images/Fundo-site.png')] bg-cover bg-fixed bg-[center_40px] text-[var(--gray-800)] font-body">
      <div className="max-w-5xl mx-auto px-4 bg-[var(--sand)] py-6">
        {/* Banner */}
        <div className="flex justify-center mb-6">
          <Image
            width={1080}
            height={500}
            src="/assets/images/informations.png"
            alt="Informações Gerais"
            className="shadow-lg w-full max-w-4xl"
          />
        </div>

        {/* Blocos estilo changelog */}
        <div className="relative border-l-2 border-[var(--primary-dark)] space-y-12 pl-8">
          {/* Item: Informações Gerais */}
          <div className="relative group">
            <div className="absolute -left-[9px] top-2.5 w-2 h-2 bg-[var(--primary)] shadow-sm transform group-hover:scale-110 transition-transform rotate-45" />
            <h3 className="text-xl font-head text-[var(--primary-dark)] mb-2 tracking-wide font-bold pl-4">
              Informações Gerais
            </h3>
            <div className="bg-[var(--primary-light)]/20 backdrop-blur-sm border-l-4 border-[var(--primary-dark)] rounded-md shadow-md px-6 py-4 space-y-3 transition hover:shadow-lg">
              <div className="border-b border-[var(--primary-dark)/30] pb-2">
                <p className="text-[10px] text-[var(--primary-dark)] uppercase font-semibold tracking-widest mb-0.5">
                  Versão
                </p>
                <p className="text-base text-gray-800 font-medium lowercase">1.7.4</p>
              </div>
              <div>
                <p className="text-[10px] text-[var(--primary-dark)] uppercase font-semibold tracking-widest mb-0.5">
                  Nível Inicial
                </p>
                <p className="text-base text-gray-800 font-medium lowercase">103</p>
              </div>
            </div>
          </div>

          {/* Item: Cultivo */}
          <div className="relative group">
            <div className="absolute -left-[9px] top-2.5 w-2 h-2 bg-[var(--primary)] shadow-sm transform group-hover:scale-110 transition-transform rotate-45" />
            <h3 className="text-xl font-head text-[var(--primary-dark)] mb-2 tracking-wide font-bold pl-4">
              Cultivo
            </h3>
            <div className="bg-[var(--primary-light)]/20 backdrop-blur-sm border-l-4 border-[var(--primary-dark)] rounded-md shadow-md px-6 py-4 space-y-3 transition hover:shadow-lg">
              <div className="border-b border-[var(--primary-dark)/30] pb-2">
                <p className="text-[10px] text-[var(--primary-dark)] uppercase font-semibold tracking-widest mb-0.5">
                  Cultivo Inicial
                </p>
                <p className="text-base text-gray-800 font-medium lowercase">Mahayana</p>
              </div>
              <div>
                <p className="text-[10px] text-[var(--primary-dark)] font-semibold tracking-widest mb-0.5 lowercase">
                  Cultivo Máximo
                </p>
                <p className="text-base text-gray-800 font-medium lowercase">
                  Alma Celestial
                </p>
              </div>
            </div>
          </div>

          {/* Item: Equipamento */}
          <div className="relative group">
            <div className="absolute -left-[9px] top-2.5 w-2 h-2 bg-[var(--primary)] shadow-sm transform group-hover:scale-110 transition-transform rotate-45" />
            <h3 className="text-xl font-head text-[var(--primary-dark)] mb-2 tracking-wide font-bold pl-4">
              Equipamento
            </h3>
            <div className="bg-[var(--primary-light)]/20 backdrop-blur-sm border-l-4 border-[var(--primary-dark)] rounded-md shadow-md px-6 py-4 space-y-3 transition hover:shadow-lg">
              <ul className="list-disc pl-4 space-y-2 text-gray-800 text-sm marker:text-[var(--primary-dark)]">
                <li className="font-medium lowercase">R8 Up3 e R9 Up3</li>
                <li className="font-medium lowercase">Céu Máximo: Céu Crepúsculo X</li>
                <li className="font-medium lowercase">Cartas: A</li>
                <li className="font-medium lowercase">Pedras Ataque/Defesa: 2/2</li>
                <li className="font-medium lowercase">
                  Habilidades: 13 Runáveis e 2 Ultimativas
                </li>
                <li className="font-medium lowercase">Runas</li>
                <li className="font-medium lowercase">Arena Aleatória</li>
              </ul>
            </div>
          </div>

          {/* Item: Eventos Diários */}
          <div className="relative group">
            <div className="absolute -left-[9px] top-2.5 w-2 h-2 bg-[var(--primary)] shadow-sm transform group-hover:scale-110 transition-transform rotate-45" />
            <h3 className="text-xl font-head text-[var(--primary-dark)] mb-2 tracking-wide font-bold pl-4">
              Eventos Diários
            </h3>
            <div className="bg-[var(--primary-light)]/20 backdrop-blur-sm border-l-4 border-[var(--primary-dark)] rounded-md shadow-md px-6 py-4 space-y-3 transition hover:shadow-lg">
              <p className="text-sm text-gray-800 italic font-medium lowercase">
                Eventos com premiações úteis para jogadores
              </p>
            </div>
          </div>

          <div className="w-full mt-10 flex flex-col items-center text-center px-2">
            <div className="relative w-full max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-head text-primary-light mb-6 uppercase tracking-widest relative inline-block text-[var(--primary-dark)] font-bold">
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-light opacity-30"></span>
                Raças e Classes
              </h2>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
                {races.map((race) => (
                  <div
                    key={race.name}
                    className="flex flex-col items-center"
                    onMouseEnter={() => setHoveredRace(race.name)}
                    onMouseLeave={() => setHoveredRace(null)}
                  >
                    {/* Container principal da raça */}
                    <div className="relative">
                      {/* Efeito de glow ao passar o mouse */}
                      <div
                        className={`absolute -inset-1.5 rounded-full bg-primary-light/10 ${
                          hoveredRace === race.name
                            ? 'opacity-100'
                            : 'opacity-0'
                        } transition-opacity duration-300`}
                      ></div>

                      {/* Botão da raça */}
                      <button
                        onClick={() => toggleRace(race.name)}
                        className="relative z-10 focus:outline-none transition-all duration-300"
                      >
                        <Image
                          width={64}
                          height={64}
                          src={race.image}
                          alt={race.name}
                          className={`w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md transition-all duration-300 ${
                            hoveredRace === race.name
                              ? 'scale-110 brightness-125'
                              : 'scale-100'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Nome da raça */}
                    <span
                      className={`text-sm mt-2 font-body transition-all duration-300 ${
                        hoveredRace === race.name
                          ? 'text-white scale-105'
                          : 'text-primary-light'
                      }`}
                    >
                      {race.name}
                    </span>

                    {/* Container das subclasses */}
                    {openRace === race.name && (
                      <div className="mt-2 w-full animate-fadeIn">
                        <div className="flex flex-col items-center">
                          {/* Seta decorativa */}
                          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[7px] border-l-transparent border-r-transparent border-b-primary-light/40 mb-1"></div>

                          {/* Grid de subclasses */}
                          <div className="grid grid-cols-2 gap-1.5 p-2 bg-white/10 backdrop-blur-sm rounded border border-primary-light/20 transition-all duration-300">
                            {race.classes.map((cls) => (
                              <div
                                key={cls.name}
                                className="flex items-center gap-1.5 px-2 py-1 rounded-sm bg-[var(primary-dark)] hover:bg-[var(--primary-light)] transition-colors duration-200"
                              >
                                <Image
                                  width={20}
                                  height={20}
                                  src={cls.symbol}
                                  alt={cls.name}
                                  className="object-contain"
                                />
                                <span className="text-xs text-primary-light font-medium">
                                  {cls.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-light/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationsSection;
