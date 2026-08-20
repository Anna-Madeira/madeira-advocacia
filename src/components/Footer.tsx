import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Madeira Advocacia. Todos os direitos reservados.</p>
        <div className="mt-2 space-x-4">
          <Link href="/politica-privacidade" className="hover:underline">Política de Privacidade</Link>
          <Link href="/termos-de-uso" className="hover:underline">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
