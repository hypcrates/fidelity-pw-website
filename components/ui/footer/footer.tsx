import React from 'react';
import DynamicMenu from './dynamicMenu';
import Social from './social';
import Image from 'next/image';
import Logo from '@/public/assets/images/logos2.png';

export default function Footer() {
  return (
    <footer className="bg-[url('/assets/images/footer_bg.png')] bg-no-repeat bg-center bg-cover text-gray-500 font-sans pt-16 pb-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-32 pb-10">
          {/* Logo + descrição */}
          <div className="max-w-sm">
            <a
              href="https://fidelitygames.net"
              className="flex items-center mb-4"
            >
              <Image src={Logo} alt="Fidelity Games" width={150} height={50} />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pensando na melhor fluidez do jogo, nosso cliente funciona de uma
              forma responsiva para garantir maior desempenho e FPS para os
              jogadores.
            </p>
          </div>

          {/* Menus dinâmicos */}
          <div className="grid grid-cols sm:grid-cols-4 gap-8">
            <DynamicMenu />
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col items-start justify-center">
          <Social />
        </div>

        {/* Rodapé final */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            Perfect World Fidelity © 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
