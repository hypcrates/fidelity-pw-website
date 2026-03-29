'use client';
import Link from 'next/link';
import Image from 'next/image';
import { guidesContent } from './_data/guidesContents';

export default function Page() {
  return (
    <section className="font-body text-black py-16 px-4 max-w-screen-xl mx-auto">
      <div className="bg-[var(--sand)] p-8 shadow-md">
        {/* Título da seção */}
        <h1 className="text-4xl font-head text-[var(--primary-dark)] mb-10 uppercase tracking-wide text-center">
          Guias Fidelity
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Guia em destaque */}
          {guidesContent.length > 0 && (
            <div className="lg:col-span-2">
              <Link href={`/guides/${guidesContent[0].slug}`}>
                <div className="overflow-hidden shadow-lg bg-white">
                  <Image
                    src={guidesContent[0].image}
                    alt={guidesContent[0].title}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl md:text-3xl font-head text-[var(--primary-dark)] mb-2">
                      {guidesContent[0].title}
                    </h2>
                    <p className="text-base text-black/80 mb-4">
                      {guidesContent[0].excerpt}
                    </p>
                    Ler mais
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Lista lateral de novos guias */}
          <aside className="bg-[var(--primary-dark)] text-white p-6 h-fit shadow-md">
            <h3 className="text-xl font-head text-[var(--primary-light)] mb-6 uppercase">
              Novos Guias
            </h3>
            <div className="space-y-6">
              {guidesContent.slice(1, 4).map((guide) => (
                <div key={guide.slug}>
                  <Link href={`/guides/${guide.slug}`}>
                    <h4 className="text-lg font-semibold hover:underline">
                      {guide.title}
                    </h4>
                  </Link>
                  <p className="text-sm text-white/80">
                    {guide.excerpt.slice(0, 90)}...
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Guias extras em cards pequenos */}
        <div className="mt-16">
          <h3 className="text-2xl font-head text-[var(--primary-dark)] mb-6 uppercase tracking-wide">
            Outros Guias
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {guidesContent.slice(1, 4).map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="flex bg-white p-4 gap-4 items-start shadow hover:shadow-lg transition"
              >
                <Image
                  src={guide.image}
                  alt={guide.title}
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div>
                  <h4 className="text-md font-semibold text-[var(--primary-dark)] mb-1">
                    {guide.title}
                  </h4>
                  <p className="text-sm text-black/70 leading-snug">
                    {guide.excerpt.slice(0, 80)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
