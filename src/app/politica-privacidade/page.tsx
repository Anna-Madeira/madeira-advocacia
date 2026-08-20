import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Madeira Advocacia.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
          Política de Privacidade
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto text-gray-700 space-y-6">
          <p>
            A Madeira Advocacia respeita a sua privacidade e está comprometida com a proteção dos dados
            pessoais tratados neste site, em conformidade com a Lei Geral de Proteção de Dados
            (Lei nº 13.709/2018 — LGPD).
          </p>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">1. Dados coletados</h2>
            <p>
              Coletamos apenas os dados fornecidos voluntariamente por você ao entrar em contato conosco
              por e-mail, WhatsApp ou formulário, como nome, telefone, e-mail e informações relacionadas
              à sua solicitação de atendimento jurídico.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">2. Finalidade do tratamento</h2>
            <p>
              Os dados são utilizados exclusivamente para viabilizar o atendimento, responder às suas
              solicitações e, quando aplicável, prestar os serviços jurídicos contratados.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">3. Compartilhamento de dados</h2>
            <p>
              Seus dados não são vendidos ou compartilhados com terceiros para fins de marketing.
              Poderão ser compartilhados apenas quando estritamente necessário à prestação do serviço
              jurídico ou por exigência legal.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">4. Seus direitos</h2>
            <p>
              Nos termos da LGPD, você pode solicitar a qualquer momento a confirmação, o acesso,
              a correção ou a exclusão dos seus dados pessoais, entrando em contato pelos canais
              disponíveis na página de Contato.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-800 mb-2">5. Alterações desta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos a consulta regular desta
              página para acompanhar eventuais alterações.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
