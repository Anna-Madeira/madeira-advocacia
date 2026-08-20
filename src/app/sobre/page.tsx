import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Dra. Teresa Cristina Madeira, advogada especializada em Direito de Família, Direito Cível e Direito do Trabalho.",
};

export default function SobrePage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Conheça nosso time jurídico
        </h2>
        <div className="bg-gray-100 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4 text-center">
            A Dra. Teresa Cristina Madeira é uma advogada altamente qualificada e com vasta experiência, inscrita na OAB/SP sob o número 519862.
            Especialista nas complexas áreas do Direito de Família, Direito Cível e Direito do Trabalho, oferece um atendimento jurídico focado em soluções eficazes e no bem-estar de seus clientes.
            Com uma abordagem personalizada e empática, ela se dedica a:
          </p>
          <p className="font-bold mb-4">
            Direito de Família: Oferecer suporte em momentos delicados, como divórcio, guarda de filhos, pensão alimentícia e questões de herança, sempre buscando o melhor interesse da família.
          </p>
          <p className="font-bold mb-4">
            Direito do Trabalho: Proteger os interesses de trabalhadores e empregadores em questões como rescisão de contrato, horas extras, assédio, justa causa e direitos trabalhistas em geral.
          </p>
          <p className="font-bold mb-4">
            Direito Cível: Atuar em diversas questões, incluindo contratos, responsabilidade civil, indenizações, direito do consumidor e disputas imobiliárias, garantindo a defesa dos seus direitos.
          </p>
          <p className="text-center">
            A Dra. Teresa Cristina Madeira está comprometida em fornecer orientação clara, representação jurídica sólida e resultados positivos, construindo relacionamentos de confiança com cada cliente.
          </p>
        </div>
      </div>
    </main>
  );
}
