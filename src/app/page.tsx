'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; 




export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
  return (
   <div className="min-h-screen bg-blue-900 text-gray-800">
      <header className="bg-blue-900 shadow-sm py-4">
        <nav className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
            <Image
              src='/logo.png'
              alt='logo'
              width={100} 
              height={100} 
              className="mb-2 md:mb-6 md:mr-6 max-md:"/>
            <Link href="/" className="text-2xl md:text-4xl font-bold text-white text-center md:text-center">
              Madeira Advocacia
            </Link>
          </div>
          <button
            className="md:hidden absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu">
            {isMenuOpen ? (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>) : (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>)}
          </button>
          <ul
            className={`
              flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6
              mt-4 md:mt-0 w-full md:w-auto items-center
              ${isMenuOpen ? 'block' : 'hidden'} md:flex
            `}>
            <li> <Link href='/' className='text-white text-lg hover:text-blue-200' onClick={() => setIsMenuOpen(false)}>Início</Link></li>
            <li><Link href="/sobre" className="text-white text-lg hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Sobre</Link></li>
            <li><Link href='/Contato' className="text-white text-lg hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
              Nossas Principais Áreas de Atuação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Direito de Família</h3>
                <p className="text-gray-700 mb-4">
                  Assessoria em divórcios, pensão alimentícia, guarda de filhos e união estável.
                  Cuidado e sensibilidade em momentos delicados.
                </p>
                <Link href="/areas-atuacao/direito-familia" className="text-blue-600 hover:underline font-medium">
                  Saiba Mais &rarr;
                </Link>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Direito do trabalho</h3>
                <p className="text-gray-700 mb-4">
                  Assessoria completa em questões trabalhistas para empregados e empregadores.
                  Garantimos seus direitos e a conformidade legal.
                </p>
                <Link href="/areas-atuacao/direito-trabalho" className="text-blue-600 hover:underline font-medium">
                  Saiba Mais &rarr;
                </Link>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Direito Cível</h3>
                <p className="text-gray-700 mb-4">
                  Atuação em contratos, responsabilidade civil, indenizações, propriedade e obrigações.
                  Soluções jurídicas para proteger seus interesses e resolver conflitos do dia a dia.
                </p>
                <Link href="/areas-atuacao/direito-civel" className="text-blue-600 hover:underline font-medium">
                  Saiba Mais &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-900 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto(a) para Discutir Seu Caso?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato hoje mesmo para agendar sua consulta e encontrar a solução jurídica que você precisa.
            </p>
            <Link
            href='/Contato'
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3
              px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Fale Conosco
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Madeira Advocacia. Todos os direitos reservados.</p>
          <p> Dra. Teresa Cristina Madeira - OAB/SP: 519862</p>
          <div className="mt-2 space-x-4">
          </div>
        </div>
      </footer>
    </div>
  );
}