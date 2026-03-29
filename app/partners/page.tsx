import Image from 'next/image';
import Link from 'next/link';
import { getPlatformIcon } from './_utils/getPlatformIcon';
import { partners } from './_data/partners';

export default function Page() {
  return (
    <section className="py-16 font-body bg-[var(--sand-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-head font-bold text-[var(--primary-dark)] uppercase tracking-wide bg-[url(/assets/images/top-header.jpg)] py-2">
            Parceiros
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {partners.map(({ name, photo, social }) => (
            <div
              key={name}
              className="bg-[var(--sand)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Header decoration */}
              <div className="bg-[var(--primary-dark)] h-3 w-full" />

              {/* Card content */}
              <div className="p-6 flex flex-col items-center flex-grow">
                <div className="relative group mb-5">
                  <Link
                    href={social[0]?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={photo}
                      alt={name}
                      width={120}
                      height={120}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-[var(--sand-light)] group-hover:border-[var(--primary-light)] transition-all duration-300"
                    />
                  </Link>
                </div>

                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4">
                  {name}
                </h3>

                <div className="flex flex-wrap justify-center gap-3 mt-auto">
                  {social.map(({ platform, url }) => (
                    <Link
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-[var(--primary-dark)] text-white rounded-full hover:bg-[var(--primary-light)] hover:text-[var(--primary-dark)] transition-colors duration-200"
                      aria-label={`${platform} de ${name}`}
                    >
                      {getPlatformIcon(platform)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer decoration */}
              <div className="bg-[var(--primary-light)] h-3 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
