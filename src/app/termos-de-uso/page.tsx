import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site da Madeira Advocacia.",
};

export default function TermosDeUsoPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
          Termos de Uso
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto text-gray-700 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">1. Objetivo do site</h2>
            <p>
              Este site tem caráter meramente informativo, apresentando as áreas de atuação da
              Madeira Advocacia e os canais de contato do escritório. O conteúdo aqui disponibilizado
              não constitui consultoria ou aconselhamento jurídico e não substitui uma avaliação
              individualizada do seu caso.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">2. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site — textos, imagens e identidade visual — pertence à
              Madeira Advocacia, sendo vedada a reprodução total ou parcial sem autorização prévia.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">3. Links externos</h2>
            <p>
              Este site pode conter links para serviços de terceiros, como WhatsApp e Google Maps.
              A Madeira Advocacia não se responsabiliza pelo conteúdo ou pelas práticas de privacidade
              desses serviços externos.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">4. Alterações destes termos</h2>
            <p>
              Estes termos podem ser atualizados periodicamente, sem aviso prévio. Recomendamos a
              consulta regular desta página.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">5. Contato</h2>
            <p>
              Em caso de dúvidas sobre estes termos, entre em contato pelos canais disponíveis na
              página de Contato.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
