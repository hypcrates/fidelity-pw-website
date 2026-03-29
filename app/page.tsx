'use client';

import Slider from '@/components/ui/slider';
import { allPosts } from '@/app/news/_data/news';
import Image from 'next/image';
import Link from 'next/link';
import { serversList } from './download/_data/serverList';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/assets/images/Fundo-site2.png')] bg-cover bg-[center_40px] bg-fixed">
      <main className="text-black font-body px-4 py-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-6">
          {/* HERO SECTION */}
          <section className="col-span-12 relative h-[300px] md:h-[400px] lg:h-[500px] rounded overflow-hidden mb-8 shadow-lg">
            {/* Slider como background */}
            <div className="absolute inset-0 z-0">
              <Slider />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </section>

          {/* COLUNA PRINCIPAL */}
          <section className="col-span-12 md:col-span-8 space-y-6">
            {/* Notícias */}
            {allPosts.slice(0, 3).map((post, i) => (
              <article
                key={i}
                className="bg-[var(--sand)] border border-[var(--gray)] p-4 rounded shadow-sm"
              >
                <div className="mb-2">
                  <span className="bg-[var(--primary)] text-white px-2 py-1 text-xs font-bold rounded">
                    {post.tags[0]}
                  </span>
                </div>
                <h3 className="font-head text-[var(--primary-dark)] text-lg mb-1">
                  {post.title}
                </h3>
                <div className="text-xs text-gray-500 mb-2">
                  📅 {post.date} · ⏱ {post.readTime}
                </div>
                <p className="text-sm">{post.excerpt}</p>
              </article>
            ))}

            {/* Eventos */}
            <section className="bg-[var(--sand)] shadow-md rounded overflow-hidden">
              <h2 className="font-head text-[var(--black)] text-lg px-4 py-2 bg-[url('/assets/images/top-header.jpg')] bg-cover bg-center ">
                Próximos Eventos
              </h2>
              <div className="p-4">
                <ul className="text-sm list-disc ml-4">
                  <li>Sab 20/04 - Screenshot de Páscoa</li>
                  <li>Ter 22/04 - Arena PvP 3x3</li>
                </ul>
              </div>
            </section>
          </section>

          {/* COLUNA LATERAL */}
          <aside className="col-span-12 md:col-span-4 space-y-6">
            {/* Sobre o Servidor */}
            <section className="bg-[var(--sand)] shadow-md rounded overflow-hidden">
              <h2 className="font-head text-[var(--black)] text-lg px-4 py-2 bg-[url('/assets/images/top-header.jpg')] bg-cover bg-center">
                Saiba mais!
              </h2>
              <div className="p-4 flex flex-col items-center text-center">
                <Image
                  width={1170}
                  height={658}
                  src="/assets/images/news/thumb1-1.png"
                  alt="Banner Saiba Mais"
                  className="w-full mb-4"
                />
                <h3 className="font-head text-[var(--primary)] text-xl mb-2 uppercase">
                  Saiba mais sobre
                </h3>
                <p className="mb-4 font-body text-base font-normal text-[var(--black)] max-w-2xs">
                  O maior servidor de Perfect World, aqui você se encontrará
                  naquela boa e velha atmosfera.
                </p>
                <Link href="/about-server">
                  <button className="cursor-pointer font-body px-4 py-2 border uppercase text-xs font-bold bg-[var(--sand)] border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition">
                    Saiba mais
                  </button>
                </Link>
              </div>
            </section>
          </aside>
          {/* BLOCO EM DUAS COLUNAS */}
          <div className="col-span-12 grid grid-cols-12 gap-6">
            {/* COLUNA DIREITA: outras seções */}
            <div className="col-span-12 md:col-span-8 space-y-6">
              {/* Download */}
              <section
                id="download"
                className="bg-[var(--sand)] shadow-md rounded overflow-hidden"
              >
                <h2 className="font-head text-[var(--black)] text-lg px-4 py-2 bg-[url('/assets/images/top-header.jpg')] bg-cover bg-center">
                  Download
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
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

                        {/* Botão de Ação */}
                        {server.active ? (
                          <Link
                            href={server.url}
                            className="mt-2 inline-block px-6 py-2 bg-[var(--primary)] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[var(--primary-light)] hover:text-[var(--black)] transition"
                          >
                            Acessar
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
              </section>

              {/* Regras */}
              <section
                id="rules"
                className="bg-[var(--sand)] shadow-md rounded overflow-hidden"
              >
                <h2 className="font-head text-[var(--black)] text-lg px-4 py-2 bg-[url('/assets/images/top-header.jpg')] bg-cover bg-center">
                  Regras
                </h2>
                <div className="p-4 text-sm space-y-4">
                  <p>
                    Nosso Código de Conduta foi criado para garantir uma
                    experiência justa e divertida para todos.
                  </p>
                  <p className="text-xs italic">
                    *As regras podem ser modificadas a qualquer momento. Fique
                    atento às atualizações.
                  </p>
                  <Link
                    href="/rules"
                    className="inline-block mt-2 px-4 py-2 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    Ver todas as regras
                  </Link>
                </div>
              </section>

              {/* Influenciadores */}
              <section
                id="influencers"
                className="bg-[var(--sand)] shadow-md rounded overflow-hidden"
              >
                <h2 className="font-head text-[var(--black)] text-lg px-4 py-2 bg-[url('/assets/images/top-header.jpg')] bg-cover bg-center">
                  Influenciadores
                </h2>
                <div className="p-4 text-sm space-y-4">
                  <p>
                    Acompanhe os criadores de conteúdo parceiros do Fidelity!
                    Lives, vídeos e dicas para todos os estilos de jogo.
                  </p>
                  <Link
                    href="/influencers"
                    className="inline-block px-4 py-2 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    Ver influenciadores
                  </Link>
                </div>
              </section>

              {/* Utilitários */}
              <section
                id="utilities"
                className="bg-[var(--sand)] shadow-md rounded overflow-hidden"
              >
                <h2 className="font-head text-[var(--black)] text-lg px-4 py-2 bg-[url('/assets/images/top-header.jpg')] bg-cover bg-center">
                  Utilitários
                </h2>
                <div className="p-4 text-sm space-y-4">
                  <p>
                    Tenha uma melhor performance em TW, PvP e mapas cheios
                    usando nossos arquivos de otimização: GFX, Trees e mais.
                  </p>
                  <Link
                    href="/utilities"
                    className="inline-block px-4 py-2 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    Acessar utilitários
                  </Link>
                </div>
              </section>

              {/* Guias */}
              <section
                id="guides"
                className="bg-[var(--sand)] shadow-md rounded overflow-hidden"
              >
                <h2 className="font-head text-[var(--black)] text-lg px-4 py-2 bg-[url('/assets/images/top-header.jpg')] bg-cover bg-center">
                  Guias
                </h2>
                <div className="p-4 text-sm space-y-4">
                  <p>
                    Domine o mundo de PW Fidelity com tutoriais completos sobre
                    classes, builds, farm, cultivo e estratégias PvP/PvE.
                  </p>
                  <Link
                    href="/guides"
                    className="inline-block px-4 py-2 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
                  >
                    Acessar guias
                  </Link>
                </div>
              </section>
            </div>
            {/* Discord */}
            <div className="col-span-12 md:col-span-4 space-y-6">
              <section className="bg-[var(--sand)] shadow-md rounded overflow-hidden h-full">
                <h2 className="font-head text-[var(--black)] text-lg px-4 py-2 bg-[url('/assets/images/top-header.jpg')] bg-cover bg-center">
                  Discord
                </h2>
                <div className="p-4">
                  <iframe
                    src="https://discord.com/widget?id=1286060874431205399&theme=dark"
                    width="100%"
                    sandbox="allow-popups allow-same-origin allow-scripts"
                    className='h-screen'
                  ></iframe>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

