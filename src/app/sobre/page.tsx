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
        <div className="bg-gray-100 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">Quem somos</h2>
          <p className="text-gray-700 mb-8 text-center">
            Madeira Advocacia — Atuamos nas áreas de Direito de Família, Direito Cível e Direito do Trabalho,
            oferecendo atendimento próximo e atenção ao contexto de cada cliente. O atendimento é conduzido de
            forma direta e transparente, com explicações claras sobre cada etapa do processo.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center border-t border-gray-300 pt-8">
            Nossa atuação
          </h2>
          <p className="font-bold mb-4">
            No Direito de Família, acompanhamos casos de divórcio, guarda de filhos, pensão alimentícia e
            questões de herança.
          </p>
          <p className="font-bold mb-4">
            No Direito do Trabalho, atuamos em processos envolvendo rescisão de contrato, horas extras,
            assédio, justa causa e demais direitos trabalhistas, tanto para empregados quanto empregadores.
          </p>
          <p className="font-bold">
            No Direito Cível, cuidamos de questões contratuais, responsabilidade civil, indenizações, direito
            do consumidor e disputas imobiliárias.
          </p>
        </div>
      </div>
    </main>
  );
}
