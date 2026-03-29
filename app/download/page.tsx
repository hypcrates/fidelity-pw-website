'use client';

import Image from 'next/image';
import { serversList } from './_data/serverList';
import Link from 'next/link';

export default function ServersPage() {
  return (
    <section className="py-[var(--space-xl)] font-body">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-head text-center text-[var(--primary-dark)] uppercase tracking-wide mb-12 bg-[var(--sand)] py-4 bg-[url(/assets/images/top-header.jpg)]">
          Servidores Disponíveis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serversList.map((server, idx) => (
            <div
              key={idx}
              className="bg-[var(--primary-dark)] text-white rounded-md overflow-hidden shadow-lg flex flex-col items-center text-center pb-6"
            >
              {/* Imagem do banner */}
              <div className="w-full h-36 relative">
                <Image
                  src={server.image}
                  alt={server.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Título e conteúdo */}
              <div className="px-4 py-4">
                <h3 className="font-head text-xl uppercase tracking-widest mb-2 text-white">
                  {server.title}
                </h3>

                {/* Status */}
                <div className="flex justify-center gap-2 mb-4">
                  {server.active ? (
                    <span className="px-3 py-1 text-xs font-bold bg-green-600 rounded uppercase">
                      Ativo
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-bold bg-yellow-600 rounded uppercase">
                      Em Breve
                    </span>
                  )}
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded uppercase ${server.color}`}
                  >
                    {server.rate}
                  </span>
                </div>

                {/* Botão */}
                {server.active ? (
                  <Link
                    href={server.url}
                    className="mt-2 inline-block px-6 py-2 bg-[var(--primary)] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[var(--primary-light)] hover:text-[var(--black)] transition"
                  >
                    Acessar Servidor
                  </Link>
                ) : (
                  <button className="mt-2 px-6 py-2 bg-[var(--sand)] text-[var(--primary-dark)] font-semibold text-sm uppercase tracking-wider rounded cursor-not-allowed opacity-70">
                    Indisponível
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
