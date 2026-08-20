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
            Dra. Teresa Cristina Madeira é advogada inscrita na OAB/SP sob o nº 519862, com atuação nas áreas de
            Direito de Família, Direito Cível e Direito do Trabalho.
          </p>
          <p className="text-gray-700 mb-4 text-center">
            Seu trabalho é pautado por atendimento próximo e personalizado, com atenção ao contexto de cada
            cliente diante de questões que muitas vezes envolvem momentos sensíveis da vida pessoal ou
            profissional.
          </p>
          <p className="font-bold mb-4">
            Direito de Família — Atuação em processos de divórcio, guarda de filhos, pensão alimentícia e
            questões de herança.
          </p>
          <p className="font-bold mb-4">
            Direito do Trabalho — Orientação e representação de trabalhadores e empregadores em temas como
            rescisão de contrato, horas extras, assédio, justa causa e demais direitos trabalhistas.
          </p>
          <p className="font-bold mb-4">
            Direito Cível — Atuação em contratos, responsabilidade civil, indenizações, direito do consumidor
            e disputas imobiliárias.
          </p>
          <p className="text-center">
            Dra. Teresa preza por uma comunicação clara e transparente ao longo de todo o processo, mantendo
            o cliente informado sobre cada etapa do seu caso.
          </p>
        </div>
      </div>
    </main>
  );
}
