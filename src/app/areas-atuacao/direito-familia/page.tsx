import Link from 'next/link';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/next';

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
                  O Direito de Família lida com as relações mais íntimas, exigindo um olhar humano e estratégico.
                  Nosso time oferece suporte jurídico completo e empático para guiar você em cada etapa, sempre buscando o bem-estar de todos os envolvidos, especialmente das crianças.
                    Nossa atuação especializada abrange:</p>
                  <ul className="list-inside mb-4 text-center">
                        <li className='mb-2 italic'>
                          <span className="font-bold">Divórcio e Separação:</span> Orientação para dissolução do casamento, seja consensual ou litigiosa.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Guarda e Convivência:</span> Definição da guarda dos filhos e do regime de visitação, priorizando o desenvolvimento das crianças.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Pensão Alimentícia:</span> Fixação, revisão ou exoneração, assegurando o sustento e a justa contribuição.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">União Estável:</span> Reconhecimento, dissolução e conversão, com foco nos aspectos patrimoniais.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Paternidade e Filiação:</span> Ações de investigação e reconhecimento, garantindo os direitos de filiação.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Partilha de Bens:</span> Divisão do patrimônio em casos de divórcio, união estável ou sucessão.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-semibold">Inventário e Sucessões:</span> Apoio em processos de herança e testamentos.
                        </li>
                      </ul>
                    <p className='mb-4  italic'>
                      Nosso time se dedica a oferecer orientação clara e soluções eficazes, proporcionando segurança e tranquilidade para que você possa seguir em frente com confiança.
                    </p>
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
          <p> Dra. Teresa Cristina Madeira - OAB/SP: 519862</p>
          <div className="mt-2 space-x-4">
          </div>
        </div>
      </footer>
      <Analytics/>
    </div>
  )
}
 