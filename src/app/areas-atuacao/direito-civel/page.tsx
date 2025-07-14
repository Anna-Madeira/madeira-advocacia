import Link from 'next/link';
import Image from 'next/image';

export default function atuation(){
  return(
  <div className="min-h-screen bg-blue-900 text-gray-800">
      <header className="bg-blue-900 shadow-sm py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center">
        <Image src = '/logo.png' alt='logo' width={190} height={190} className="items-center justify-items-center m-6"/>
          <Link href="/" className="text-4xl font-bold text-white text-center">
            Madeira Advocacia
          </Link>
          <ul className="flex space-x-6">
            <li> <Link href='/' className='text-white'>Início</Link></li>
            <li><Link href="/sobre" className="text-white">Sobre</Link></li>
            <li><Link href='/Contato' className="text-white">Contato</Link></li>
          </ul>
        </nav>
      </header>
      <main>
       <section className="py-2  bg-blue-900"/>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Direito de Família
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gray-100 p-8 rounded-lg">
                <p className="text-gray-700 mb-4  italic">
                 O Direito Cível rege as relações jurídicas entre pessoas, empresas e instituições, abrangendo uma vasta gama de situações cotidianas.
                Nosso time oferece suporte jurídico abrangente para defender seus direitos e resolver conflitos de forma eficiente e justa.
                Nossa atuação especializada abrange:</p>
                  <ul className="list-inside mb-4 text-center">
                        <li className='mb-2 italic'>
                          <span className="font-bold">Contratos:</span> Análise, elaboração e revisão de contratos, além da resolução de disputas contratuais.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Responsabilidade Civil:</span> Ações de indenização por danos materiais, morais e estéticos resultantes de acidentes, falhas de serviço ou outras violações de direitos.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Direito do Consumidor:</span> Defesa dos direitos de consumidores contra práticas abusivas, produtos defeituosos ou serviços inadequados.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Execução de Dívidas:</span> Cobrança judicial e extrajudicial de débitos e recuperação de créditos.
                        </li>
                      </ul>
                    <p className='mb-4  italic'>
                Com uma abordagem prática e focada em resultados, nosso time está preparada para oferecer a orientação
                e a representação necessárias para proteger seus interesses no universo do Direito Cível.</p>
                    <div className="flex justify-center items-center">
                     <Link
                        href='/Contato'
                          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 items-center justify-items-center
                          px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                          Entre em contato conosco!
                       </Link>
                       </div>
                </div> 
                </div>
                </div>
                </main>
                 <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Madeira Advocacia. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-4">
            
          </div>
        </div>
      </footer>
    </div>
  )
}
 