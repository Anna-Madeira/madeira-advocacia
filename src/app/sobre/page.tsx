import Link from 'next/link';
import Image from 'next/image';

export default function about(){
<div className="min-h-screen bg-blue-900 text-gray-800">
      <header className="bg-blue-900 shadow-sm py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center">
        <Image src = '/logo.png' alt='logo' width={190} height={190} className="items-center justify-items-center m-6"/>
          <Link href="/" className="text-4xl font-bold text-white text-center">
            Madeira Advocacia
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="/sobre" className="text-white">Sobre</Link></li>
            <li><Link href="/areas-atuacao" className="text-white">Áreas de Atuação</Link></li>
            <li><Link href='/Contato' className="text-white">Contato</Link></li>
          </ul>
        </nav>
      </header>
      </div>
}
 