import { notFound } from 'next/navigation';
import { guidesContent } from '../_data/guidesContents';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug?: string }>;
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) return notFound();

  const guide = guidesContent.find((g) => g.slug === slug);
  if (!guide) return notFound();

  return (
    <article className="font-body px-4 py-12 max-w-3xl mx-auto">
      <div className="bg-[var(--sand)] p-8 pb-24">
        <h1 className="text-4xl font-head text-primary-dark mb-4 lowercase">
          {guide.title}
        </h1>
        <div className="text-sm text-gray-600 mb-6">
          Publicado em {guide.date} • Leitura em {guide.readTime} min
        </div>
        <Image
          src={guide.image}
          alt={guide.title}
          className="w-full mb-8"
          width={800}
          height={400}
        />
        <div
          className="prose prose-lg prose-neutral max-w-none text-black 
    prose-headings:font-head prose-p:font-body prose-li:marker:text-primary-dark 
    prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />
      </div>
    </article>
  );
}
