'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCloudDownloadAlt, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { NavItems } from './_data/navItemns';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="w-full z-[10] shadow-[0_2px_15px_rgba(0,0,0,0.3)] sticky top-0"
      style={{
        background:
          "linear-gradient(rgba(71,22,36,0.65), rgba(71,22,36,0.20)), url('/assets/images/menus2.png') no-repeat center center",
        backgroundSize: 'cover',
      }}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center py-3 relative">
        {/* Logo */}
        <Link href="/" className="group relative w-[180px] h-[60px] block z-10">
          <Image
            src="/assets/images/logo-bgs2.png"
            alt="Perfect World Logo"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain transition-all duration-300 ease-in-out z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/assets/images/logos2.png"
              alt="Perfect World Effects"
              fill
              className="object-contain transition-all duration-300 ease-in-out z-20 p-2.5 drop-shadow-[0_0_8px_rgba(255,213,213,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(255,213,213,1)]"
            />
          </div>
          <span className="sr-only">Fidelity</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-2xl z-20"
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegação */}
        <nav
          className={`font-head absolute md:static top-full left-0 w-full md:w-auto z-10 bg-[var(--primary-dark)] md:bg-transparent transition-all duration-300 ease-in-out
            ${
              isMobileMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2 md:opacity-100 md:visible md:translate-y-0'
            }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-12 p-4 md:p-0">
            {NavItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.href}
                  className="uppercase font-semibold text-sm md:text-base tracking-[0.5px] transition-all duration-300 text-[var(--menu-text)] hover:text-[var(--primary-light)]"
                >
                  {item.label}
                </Link>

                {/* Submenu */}
                {item.subItems && (
                  <ul className="md:absolute md:top-full md:left-0 uppercase font-semibold md:bg-[var(--primary-dark)] min-w-[200px] md:shadow-lg rounded-b-sm md:opacity-0 md:invisible md:translate-y-2 md:group-hover:opacity-100 md:group-hover:visible z-10">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="border-b border-[var(--menu-text)/80] text-[var(--menu-text)] py-3 hover:bg-[rgba(178,31,52,0.3)] last:border-0"
                      >
                        <Link
                          href={subItem.href}
                          className="px-4 block transition-all duration-300 text-sm"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Botões de Ação - visível apenas no desktop */}
        <div className="hidden md:flex gap-4 z-10">
          <Link
            href="/download"
            className="group relative inline-flex items-center justify-center py-2 px-4 uppercase text-[0.85rem] tracking-wider font-bold text-[var(--primary)] transition-all duration-300 min-w-[120px] text-center hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 border border-[rgba(255,213,213,0.3)] pointer-events-none transition-all duration-300 group-hover:border-[rgba(255,213,213,0.6)] group-hover:scale-105"></span>
            <span className="relative flex items-center">
              <FaCloudDownloadAlt className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Download
              </span>
            </span>
          </Link>

          <Link
            href="https://painel.fidelitygames.net/"
            rel="noopener noreferrer"
            target="_blank"
            className="group relative inline-flex items-center justify-center py-2 px-4 uppercase text-[0.85rem] tracking-wider font-bold text-[var(--menu-text)] transition-all duration-300 min-w-[120px] text-center hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 border border-[rgba(255,213,213,0.3)] pointer-events-none transition-all duration-300 group-hover:border-[rgba(255,213,213,0.6)] group-hover:scale-105"></span>
            <span className="relative flex items-center">
              <FaUser className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Painel
              </span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
