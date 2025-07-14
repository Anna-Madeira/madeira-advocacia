import Link from 'next/link';
import Image from 'next/image';

export default function about(){
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
                 Conheça nosso time jurídico
            </h2>
            <div className= "container flex mx-auto px-4 items-center justify-between">
              <div className="bg-gray-100 p-8 mx-auto px-4 rounded-lg items-center justify-between">
                <p className="text-gray-700 mb-4 text-center">
                  A Dra. Teresa Cristina Madeira é uma advogada altamente qualificada e com vasta experiência, inscrita na OAB/SP sob o número 519862.
                  Especialista nas complexas áreas do Direito de Família, Direito Cível e Direito do Trabalho, oferece um atendimento jurídico focado em soluções eficazes e no bem-estar de seus clientes.
                  Com uma abordagem personalizada e empática, ela se dedica a:  </p>
               <p className='font-bold mb-4'>
                  Direito de Família: Oferecer suporte em momentos delicados, como divórcio, guarda de filhos, pensão alimentícia e questões de herança, sempre buscando o melhor interesse da família.
                 </p>
                   <p className='font-bold mb-4'>
                   Direito do Trabalho: Proteger os interesses de trabalhadores e empregadores em questões como rescisão de contrato, horas extras, assédio, justa causa e direitos trabalhistas em geral.
                 </p>
                 <p className='font-bold mb-4'>
                  Direito Cível: Atuar em diversas questões, incluindo contratos, responsabilidade civil, indenizações, direito do consumidor e disputas imobiliárias, garantindo a defesa dos seus direitos.
                 </p>
                 <p className='text-center mb-4'>
                   A Dra. Teresa Cristina Madeira está comprometida em fornecer orientação clara, representação jurídica sólida e resultados positivos, construindo relacionamentos de confiança com cada cliente.
                 </p>

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
 