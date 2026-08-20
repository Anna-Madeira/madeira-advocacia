import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Direito do Trabalho",
  description:
    "Assessoria trabalhista para empregados e empresas: reclamações trabalhistas, defesa de empresas, acordos e consultoria.",
};

export default function DireitoTrabalhoPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Direito do Trabalho
        </h2>
        <div className="bg-gray-100 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4 italic">
            O Direito do Trabalho rege as relações entre empregadores e empregados. Seja você trabalhador buscando seus direitos ou empresa buscando conformidade,
            nosso time oferece assessoria jurídica para um ambiente de trabalho justo e equilibrado.
            Nossa área de atuação abrange:
          </p>
          <ul className="list-inside mb-4 text-center">
            <li className="mb-2 italic">
              <span className="font-bold">Reclamações Trabalhistas:</span> Representação de trabalhadores em busca de direitos como horas extras, adicionais (insalubridade, periculosidade), verbas rescisórias, equiparação salarial e assédio.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Defesa de Empresas:</span> Assessoria jurídica preventiva e contenciosa para empresas, na defesa de seus interesses em ações trabalhistas.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Acordos e Negociações:</span> Mediação e elaboração de acordos para solução amigável de conflitos.
            </li>
            <li className="mb-2 italic">
              <span className="font-bold">Consultoria e Pareceres:</span> Orientação sobre legislação trabalhista, contratos de trabalho, demissões e compliance.
            </li>
          </ul>
          <p className="mb-4 italic">
            Nosso time acompanha cada caso com atenção à legislação trabalhista, buscando o correto encaminhamento de cada situação.
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
