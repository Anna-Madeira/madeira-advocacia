import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Direito de Família",
  description:
    "Assessoria em divórcio, guarda de filhos, pensão alimentícia, união estável e inventário, com atendimento humano e estratégico.",
};

export default function DireitoFamiliaPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Direito de Família
        </h2>
        <div className="bg-gray-100 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4 italic">
            O Direito de Família lida com as relações mais íntimas, exigindo um olhar humano e atento.
            Nosso time oferece suporte jurídico completo, acompanhando você em cada etapa, sempre com foco no bem-estar de todos os envolvidos, especialmente das crianças.
            Nossa área de atuação abrange:
          </p>
          <ul className="list-inside mb-4 text-center">
            <li className="mb-2 italic">
              <span className="font-bold">Divórcio e Separação:</span> Orientação para dissolução do casamento, seja consensual ou litigiosa.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Guarda e Convivência:</span> Definição da guarda dos filhos e do regime de visitação, priorizando o desenvolvimento das crianças.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Pensão Alimentícia:</span> Fixação, revisão ou exoneração, assegurando o sustento e a justa contribuição.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">União Estável:</span> Reconhecimento, dissolução e conversão, com foco nos aspectos patrimoniais.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Paternidade e Filiação:</span> Ações de investigação e reconhecimento, garantindo os direitos de filiação.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Partilha de Bens:</span> Divisão do patrimônio em casos de divórcio, união estável ou sucessão.
            </li>
            <li className="mb-2 italic">
              <span className="font-semibold">Inventário e Sucessões:</span> Apoio em processos de herança e testamentos.
            </li>
          </ul>
          <p className="mb-4 italic">
            O atendimento é conduzido com orientação clara e acompanhamento próximo, para que você tenha as informações necessárias em cada etapa do processo.
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
