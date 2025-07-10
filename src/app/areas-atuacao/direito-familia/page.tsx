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
                <p className="text-gray-700 mb-4">
                  Prestamos assessoria jurídica personalizada para casos de divórcios, pensão alimentícia, guarda de filhos e união estável.
                </p>
                </div>
                </div>
                </div>
                </main>
                </div>
  )
}
 