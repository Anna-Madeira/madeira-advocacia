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
                <p className="text-gray-700 mb-4  italic">
                 O Direito do Trabalho é a base das relações entre empregadores e empregados. Seja você trabalhador buscando seus direitos ou empresa buscando conformidade, 
                 nosso time oferece assessoria jurídica especializada para garantir um ambiente de trabalho justo e equilibrado.
                 Nossa atuação especializada abrange:</p>
                  <ul className="list-inside mb-4 text-center">
                        <li className='mb-2 italic'>
                          <span className="font-bold">Reclamações Trabalhistas:</span> Representação de trabalhadores em busca de direitos como horas extras, adicionais (insalubridade, periculosidade), verbas rescisórias, equiparação salarial e assédio.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Defesa de Empresas:</span> Assessoria jurídica preventiva e contenciosa para empresas, visando evitar litígios e defender seus interesses em ações trabalhistas.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Acordos e Negociações:</span> Mediação e elaboração de acordos para solução amigável de conflitos.
                        </li>
                        <li className='mb-2 italic'>
                          <span className="font-bold">Consultoria e Pareceres:</span> Orientação sobre legislação trabalhista, contratos de trabalho, demissões e compliance.
                        </li>
                      </ul>
                    <p className='mb-4  italic'>
                      Nosso time se dedica a oferecer soluções estratégicas para proteger seus interesses e garantir a aplicação correta da legislação trabalhista.
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
          <div className="mt-2 space-x-4">
            
          </div>
        </div>
      </footer>
    </div>
  )
}
 