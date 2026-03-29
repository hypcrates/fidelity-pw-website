import type { Metadata } from 'next';
import './globals.css';
import NewsTicker from '@/components/ui/newsTicker';
import Header from '@/components/ui/header/header';
import Footer from '@/components/ui/footer/footer';

//todo: insert images
export const metadata: Metadata = {
  title: {
    default: 'Fidelity - Perfect World',
    template: '%s | Fidelity PW',
  },
  description: 'Servidor privado de Perfect World com experiências únicas',
  openGraph: {
    title: 'Fidelity - Perfect World',
    description: 'O melhor servidor privado de Perfect World',
    siteName: 'Fidelity PW',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fidelity - Perfect World',
    description: 'O melhor servidor privado de Perfect World',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`font-body min-h-screen relative`}>
        <NewsTicker />
        <Header />
        <div className="min-h-screen bg-[url('/assets/images/Fundo-site2.png')] bg-cover bg-[center_40px] bg-fixed">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

