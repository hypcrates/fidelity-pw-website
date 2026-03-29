import React from 'react';
import { FaDownload, FaMicrosoft, FaWindows } from 'react-icons/fa';
import { SiAmd, SiIntel, SiNvidia } from 'react-icons/si';
import { minRequirements, recRequirements } from './_data/systemRequirements';
import { downloadLinksBySlug } from './_data/downloadLinksBySlug';
import { notFound } from 'next/navigation';
import { formatSlugToTitle } from './utils/formatSlug';

interface PropsPageProps {
  params: Promise<{ slug?: string }>;
}

export default async function DownloadSection({ params }: PropsPageProps) {
  const { slug } = await params;

  if (!slug) return notFound();

  const links = downloadLinksBySlug[slug];
  if (!links) return notFound();

  const formattedTitle = formatSlugToTitle(slug);

  if (!links || links.length === 0) {
    const formattedTitle = formatSlugToTitle(slug);
    return (
      <section className="py-24 text-center text-[var(--primary-dark)] flex justify-center items-center h-screen flex-col">
        <div className="bg-[var(--sand)] py-16 px-8">
          <h1 className="text-3xl font-head mb-4">{formattedTitle}</h1>
          <p className="text-lg font-body">
            Este servidor estará disponível em breve. Fique atento às
            atualizações no site oficial!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-[var(--space-xl)] px-[var(--space-lg)] text-[var(--white)] font-[var(--font-body)] bg-[url('/assets/images/Fundo-site2.png')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-head text-4xl text-[var(--primary)] mb-6 mx-auto">
          Download - {formattedTitle}
        </h2>
        <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
          Baixe o cliente completo do Fidelity World e prepare-se para uma
          experiência única!
        </p>

        {/* Download Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href="#clientArchive"
            className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition-colors duration-300 text-[var(--white)] py-4 px-8 flex items-center gap-3 text-lg font-semibold"
          >
            <FaWindows size={24} />
            Download para Windows
          </a>
        </div>

        {/* Requisitos com display flex */}
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-8 flex-wrap max-w-5xl mx-auto">
          {/* Mínimos */}
          <div className="flex-1 min-w-[300px] bg-[var(--sand)] text-[var(--black)] p-6 shadow-md">
            <h3 className="font-head text-2xl text-[var(--primary-dark)] mb-4">
              Requisitos Mínimos
            </h3>
            <ul className="space-y-2 text-base">
              {minRequirements.map((req, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b border-[var(--gray)] pb-1"
                >
                  <strong className="font-head">{req.label}:</strong>
                  <span>{req.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recomendados */}
          <div className="flex-1 min-w-[300px] bg-[var(--sand)] text-[var(--black)] p-6 shadow-md">
            <h3 className="font-head text-2xl text-[var(--primary-dark)] mb-4">
              Requisitos Recomendados
            </h3>
            <ul className="space-y-2 text-base">
              {recRequirements.map((req, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b border-[var(--gray)] pb-1"
                >
                  <strong className="font-head">{req.label}:</strong>
                  <span>{req.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drivers */}
        <div
          className="mt-20 max-w-5xl mx-auto text-[var(--black)] p-8 shadow-md relative z-10"
          id="clientArchive"
        >
          <h3 className="font-head text-3xl text-[var(--primary-dark)] border-b-2 border-[var(--primary)] pb-2 mb-6">
            Importante Também
          </h3>
          <div className="flex flex-col text-center justify-center items-center">
            <h4 className="text-xl font-semibold text-[var(--primary)] mb-2">
              Download de drivers
            </h4>
            <p className="text-sm mb-4">
              Evite problemas na hora de rodar o jogo. Mantenha seus drivers
              atualizados!
            </p>
            <div className="flex gap-6 items-center text-5xl flex-wrap justify-center">
              <a
                href="https://www.amd.com/pt/support"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiAmd className="text-black hover:text-[var(--primary)]" />
              </a>
              <a
                href="https://www.intel.com.br/content/www/br/pt/download-center/home.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiIntel className="text-black hover:text-[var(--primary)]" />
              </a>
              <a
                href="https://www.nvidia.com/Download/index.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiNvidia className="text-black hover:text-[var(--primary)]" />
              </a>
              <a
                href="https://levelupgames.com.br/redirecionador/comum/pagina/direct-x"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMicrosoft className="text-black hover:text-[var(--primary)]" />
              </a>
            </div>
          </div>
        </div>

        {/* Arquivos para download */}
        <div className="mt-16 max-w-4xl mx-auto bg-[var(--primary-light)] p-6 shadow-md">
          <div className="mb-4">
            <h3 className="font-head text-2xl text-[var(--primary-dark)] font-semibold pb-2">
              Arquivos do Cliente Completo
            </h3>
            <p className="text-gray-600">
              Escolha um arquivo abaixo para iniciar o download
            </p>
          </div>
          <ul className="flex flex-wrap gap-4 justify-center">
            {links.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[var(--primary)] hover:text-white border border-[var(--primary)] hover:bg-[var(--primary)] text-center py-3 px-4 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  <FaDownload size={14} />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
