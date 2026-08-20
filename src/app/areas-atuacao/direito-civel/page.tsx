import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Direito Cível",
  description:
    "Atuação em contratos, responsabilidade civil, direito do consumidor e cobrança de dívidas, com foco em resultados.",
};

export default function DireitoCivelPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Direito Cível
        </h2>
        <div className="bg-gray-100 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4 italic">
            O Direito Cível rege as relações jurídicas entre pessoas, empresas e instituições, abrangendo uma vasta gama de situações cotidianas.
            Nosso time oferece suporte jurídico para orientar sobre seus direitos e conduzir a resolução de conflitos.
            Nossa área de atuação abrange:
          </p>
          <ul className="list-inside mb-4 text-center">
            <li className="mb-2 italic">
              <span className="font-bold">Contratos:</span> Análise, elaboração e revisão de contratos, além da resolução de disputas contratuais.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Responsabilidade Civil:</span> Ações de indenização por danos materiais, morais e estéticos resultantes de acidentes, falhas de serviço ou outras violações de direitos.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Direito do Consumidor:</span> Defesa dos direitos de consumidores contra práticas abusivas, produtos defeituosos ou serviços inadequados.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Execução de Dívidas:</span> Cobrança judicial e extrajudicial de débitos e recuperação de créditos.
            </li>
          </ul>
          <p className="mb-4 italic">
            Com uma abordagem prática e atenta a cada caso, nosso time está preparado para oferecer a orientação
            e a representação necessárias no universo do Direito Cível.
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="/contato"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3
                px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Entre em contato conosco!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
