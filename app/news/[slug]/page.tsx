import { notFound } from 'next/navigation';
import Image from 'next/image';
import { allPosts } from '../_data/news';
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from 'react-icons/fa';

interface PostPageProps {
  params: Promise<{ slug?: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="font-body flex justify-center flex-col items-center ">
      <div className="bg-[var(--sand)] px-6 pb-12">
        <div className="w-full max-w-4xl h-72 overflow-hidden relative">
          <Image
            src={post.image}
            alt={post.title}
            width={1080}
            height={400}
            className="w-full h-full object-cover brightness-90 rounded-b-lg"
          />
          <div className="absolute bottom-4 left-6 text-white bg-black/40 px-4 py-2 rounded">
            <h1 className="text-2xl md:text-4xl font-head font-bold">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Metadados */}
          <div className="mb-6 text-sm text-gray-500 flex flex-wrap items-center gap-3">
            <span>{post.date}</span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[var(--gray)] text-[var(--primary-dark)] px-3 py-1 text-xs font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
            <span>{post.readTime}</span>
          </div>

          {/* Corpo da notícia */}
          {post.content && (
            <div
              className="prose prose-sm sm:prose-base prose-headings:font-head prose-p:text-black prose-li:text-black prose-img:rounded-lg prose-img:mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
            />
          )}

          {/* Redes sociais */}
          <div className="mt-16 border-t pt-8 border-[var(--menu-text)]">
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://instagram.com/fidelityjogos2024"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[var(--primary)] text-white hover:opacity-90 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[var(--primary)] text-white hover:opacity-90 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://discord.gg/fidelityjogos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[var(--primary)] text-white hover:opacity-90 transition"
              >
                <FaDiscord />
              </a>
              <a
                href="https://youtube.com/@canaldofidelity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[var(--primary)] text-white hover:opacity-90 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitch.tv/canaldofidelity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[var(--primary)] text-white hover:opacity-90 transition"
              >
                <FaTwitch />
              </a>
              <a
                href="https://tiktok.com/@fidelityjogos_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[var(--primary)] text-white hover:opacity-90 transition"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
