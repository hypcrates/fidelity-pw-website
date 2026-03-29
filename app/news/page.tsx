'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { allPosts } from './_data/news';
import Link from 'next/link';

export default function RecentPosts() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allPosts.length));
  };

  const posts = allPosts.slice(0, visibleCount);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-body bg-[url('/assets/images/Fundo-site2.png')] bg-cover bg-[center_40px] bg-fixed relative">
      <div className="bg-[var(--sand)] p-12">
        <h2 className="text-3xl font-bold mb-8 font-head w-full bg-[url('/assets/images/top-header.jpg')] p-2 pl-3">
          Notícias
        </h2>

        <div className="flex flex-col gap-12">
          {Array.from({ length: Math.ceil(posts.length / 3) }, (_, i) => {
            const slice = posts.slice(i * 3, i * 3 + 3);
            if (slice.length === 0) return null;

            return (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-16"
              >
                {/* Notícia destaque (grande) */}
                {slice[0] && (
                  <Link href={`/news/${slice[0].slug}`}>
                    <div className="lg:col-span-1">
                      <div className="overflow-hidden">
                        <Image
                          src={slice[0].image}
                          alt={slice[0].title}
                          width={600}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-500">{slice[0].date}</p>
                        <h3 className="text-xl font-bold font-head">
                          {slice[0].title}
                        </h3>
                        <p className="text-sm text-black">{slice[0].excerpt}</p>
                        <div className="flex items-center flex-wrap gap-2 text-xs mt-2">
                          {slice[0].tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-[var(--gray)] px-2 py-1 rounded-full text-[var(--primary-dark)] font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="text-gray-500">
                            {slice[0].readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Notícias secundárias (menores) */}
                <div className="lg:col-span-2 flex flex-col gap-6 pl-0 lg:pl-16">
                  {slice.slice(1).map((post, index) => (
                    <Link
                      href={`/news/${post.slug}`}
                      key={index}
                      className="group"
                    >
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                      >
                        <div className="w-full sm:w-1/3">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={300}
                            height={200}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-1 max-w-sm">
                          <p className="text-sm text-gray-500">{post.date}</p>
                          <h4 className="text-lg font-bold font-head">
                            {post.title}
                          </h4>
                          <div className="flex items-center flex-wrap gap-2 text-xs my-1">
                            {post.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="bg-[var(--gray)] py-1 px-2 rounded-full text-[var(--primary-dark)] font-semibold"
                              >
                                {tag}
                              </span>
                            ))}
                            <span className="text-gray-500">
                              {post.readTime}
                            </span>
                          </div>
                          <p className="text-sm text-black">{post.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão "Carregar mais" */}
        {visibleCount < allPosts.length && (
          <div className="mt-12 flex justify-center px-6 py-3 bg-[var(--primary-dark)] text-white font-semibold hover:bg-[var(--primary)] transition hover:scale-105 gap-4 items-center">
            <MdKeyboardDoubleArrowDown size={24} />
            <button onClick={loadMore}>Carregar mais</button>
            <MdKeyboardDoubleArrowDown size={24} />
          </div>
        )}
      </div>
    </section>
  );
}
