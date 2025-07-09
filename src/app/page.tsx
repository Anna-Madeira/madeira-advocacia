// app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header (Você criará um componente separado para isso depois) */}
      <header className="bg-white shadow-sm py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            Madeira Advocacia
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="/sobre" className="hover:text-blue-600">Sobre</Link></li>
            <li><Link href="/areas-atuacao" className="hover:text-blue-600">Áreas de Atuação</Link></li>
            <li><Link href="/contato" className="hover:text-blue-600">Contato</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Advocacia Humanizada e Soluções Jurídicas Eficazes
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Sua parceira legal para Direito de Família, Trabalho e Cível.
            </p>
            <Link
              href="/contato"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Agende Sua Consulta Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
              Nossas Áreas de Atuação Principais
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
                </p>
                <Link href="/areas-atuacao/direito-sucessoes" className="text-blue-600 hover:underline font-medium">
                  Saiba Mais &rarr;
                </Link>
              </div>

              {/* Card de Serviço 3 */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Direito Cível</h3>
                <p className="text-gray-700 mb-4">
                </p>
                <Link href="/areas-atuacao/direito-imobiliario" className="text-blue-600 hover:underline font-medium">
                  Saiba Mais &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-800 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto(a) para Discutir Seu Caso?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato hoje mesmo para agendar sua consulta e encontrar a solução jurídica que você precisa.
            </p>
            <Link
              href="/contato"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Fale Conosco
            </Link>
          </div>
        </section>
      </main>

      {/* Footer (Você criará um componente separado para isso depois) */}
      <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Madeira Advocacia. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-4">
            <Link href="/politica-privacidade" className="hover:underline">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:underline">Termos de Uso</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}