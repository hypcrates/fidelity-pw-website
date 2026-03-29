import Image from 'next/image';
import React from 'react';
import { FaCheckCircle, FaDownload } from 'react-icons/fa';
import UtilitiesImage from '@/public/assets/images/utilities.png';

export default function Page() {
  return (
    <section className="w-full py-[var(--space-xl)] px-[var(--space-lg)] text-[var(--white)] font-[--font-body] bg-[url('/assets/images/Fundo-site.png')] bg-cover bg-center bg-fixed text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-[--font-head] text-[var(--primary)] mb-4 text-center">
          Utilitários do PW Fidelity
        </h1>

        <p className="text-lg text-gray-600 mb-8 text-center">
          Arquivos opcionais para melhorar o desempenho do jogo sem impactar a
          jogabilidade.
        </p>

        {/* O que são? */}
        <div className="mb-10 bg-[var(--sand)] p-6 shadow-md">
          <h2 className="text-2xl font-[--font-head] text-[var(--primary-dark)] mb-3">
            O que são?
          </h2>
          <p className="text-base text-[var(--black)]">
            Os utilitários são arquivos opcionais que ajudam a melhorar o
            desempenho do seu jogo, reduzindo o lag e os efeitos visuais
            excessivos. Eles não influenciam na jogabilidade e podem ser
            revertidos facilmente.
          </p>
        </div>

        {/* Arquivos disponíveis */}
        <div className="mb-10 bg-[var(--sand)] p-6  shadow-md">
          <h2 className="text-2xl font-[--font-head] text-[var(--primary-dark)] mb-3">
            Arquivos disponíveis
          </h2>

          <div className="space-y-4 text-[var(--black)]">
            <div>
              <h3 className="text-lg font-semibold text-[var(--primary)]">
                GFX
              </h3>
              <p>
                Reduz drasticamente os efeitos visuais das skills e animações.
                Ideal para PvP, TW e mapas com muitos jogadores.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--primary)]">
                Tress
              </h3>
              <p>
                Remove efeitos das árvores e vegetação, deixando o ambiente mais
                limpo e leve. Perfeito para PCs mais modestos.
              </p>
            </div>

            <div className="mt-4">
              <a
                href="https://drive.google.com/drive/folders/1I80P4RQ01Ty-QAf1VWNROcO6imReU-PD?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white py-2 px-4 transition-colors font-semibold"
              >
                <FaDownload />
                Acessar arquivos no Google Drive
              </a>
            </div>
          </div>
        </div>

        {/* Recomendação importante */}
        <div className="mb-10 bg-[var(--sand)] p-6  shadow-md text-[var(--black)] gap-4 flex flex-col">
          <h2 className="text-xl font-semibold text-[var(--primary-dark)] mb-2">
            Recomendação importante:
          </h2>
          <p>
            <strong>
              É altamente recomendado que você tenha dois clientes instalados do
              PW Fidelity:
            </strong>
            <ul className="list-[upper-roman] list-inside mt-2 space-y-1">
              <li>Um com o jogo original (sem alterações).</li>
              <li>Outro para modificações e uso de utilitários.</li>
            </ul>
            Isso evita problemas gráficos que, uma vez ocorridos, só são
            resolvidos com a reinstalação completa do cliente.
          </p>
        </div>

        {/* Como instalar */}
        <div className="mb-10 bg-[var(--sand)] p-6  shadow-md text-[var(--black)]">
          <h2 className="text-2xl font-[--font-head] text-[var(--primary-dark)] mb-3">
            Como instalar os utilitários
          </h2>
          <ol className="list-decimal list-inside space-y-2 flex justify-center flex-col items-center gap-8">
            <li>Faça o download do arquivo .zip</li>
            <Image
              src={UtilitiesImage}
              alt="iamgens de como fazer o utilitario"
              className="flex"
            />
            <li>Extraia os arquivos com WinRAR ou 7zip</li>
            <li>
              Localize a pasta do seu PW Fidelity:
              <br />
              <code className="bg-[var(--gray)] text-[var(--black)] px-2 py-1 block mt-1">
                C:\FidelityPW\element\
              </code>
            </li>
            <li>
              Copie os arquivos extraídos (GFX ou Tress) e cole na pasta{' '}
              <strong>element</strong>, substituindo os originais
            </li>
            <li>
              Clique em <em>“Substituir os arquivos no destino”</em> se
              solicitado
            </li>
            <li>Inicie o jogo com esse cliente modificado</li>
          </ol>
        </div>

        {/* Como reverter */}
        <div className="mb-10 bg-[var(--sand)] p-6  shadow-md text-[var(--black)]">
          <h2 className="text-xl font-semibold text-[var(--primary-dark)] mb-2">
            Como reverter?
          </h2>
          <ul className="list-inside space-y-2 list-[upper-roman]">
            <li>
              Use o cliente original sem alterações (por isso recomendamos dois
              clients).
            </li>
            <li>Ou reinstale o cliente completo do Fidelity.</li>
          </ul>
        </div>

        {/* Conclusão */}
        <div className="bg-[var(--primary)] text-white p-6  shadow-md text-center">
          <FaCheckCircle className="mx-auto mb-2 text-3xl" />
          <p>
            Esses arquivos são opcionais, mas podem melhorar bastante seu
            desempenho em combates e eventos massivos.
            <br />
            <strong>Use com responsabilidade</strong> e sempre mantenha uma
            cópia do cliente limpo para evitar dores de cabeça.
          </p>
        </div>
      </div>
    </section>
  );
}
