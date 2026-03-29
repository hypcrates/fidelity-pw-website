'use client';

import React from 'react';
import { sections } from './_data/sections';

const Page = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="relative overflow-hidden my-20 py-8 font-[var(--font-body)] max-w-8/12 bg-[var(--sand)]">
        <div className="px-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="md:border-r border-[var(--gray)] pr-6 pt-12">
              <ul className="flex flex-col gap-4 text-xs text-gray-700">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="hover:text-[var(--primary)] transition-colors duration-300 font-medium capitalize"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Conteúdo Principal */}
            <main className="flex-1 space-y-10">
              <h1 className="font-[--font-head] font-bold text-2xl capitalize text-[var(--primary-dark)] bg-[url('/assets/images/top-header.jpg')] bg-no-repeat bg-center bg-cover p-2">
                Regras de Conduta
              </h1>
              <p className="text-sm text-[var(--black)] leading-8">
                As Regras de Conduta poderão ser modificadas pela Equipe PW
                Fidelity a qualquer momento. Os usuários serão informados
                previamente em caso de inclusões ou alterações de regra.
                Consulte a tabela de punições para checar as consequências da
                quebra de regras. Além dessas regras de conduta, você deve ter
                sempre em mente o respeito ao direito dos outros usuários de
                aproveitarem corretamente o jogo.
              </p>

              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="space-y-4 scroll-mt-20"
                >
                  <h2 className="text-xl capitalize text-[var(--primary-dark)] font-[--font-head] font-semibold">
                    {section.title}
                  </h2>
                  <div
                    className="text-[var(--black)] text-sm leading-7 space-y-2"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
