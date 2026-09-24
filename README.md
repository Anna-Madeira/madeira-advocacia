# Madeira Advocacia ⚖️

Site institucional da **Madeira Advocacia**, escritório em São Paulo que atua em Direito de Família, Direito Cível e Direito do Trabalho. O atendimento é online em todo o Brasil e presencial em São Paulo, com horário agendado.

🔗 **[www.madeiraadvocacia.com.br](https://www.madeiraadvocacia.com.br)**

## 📸 Telas

<p align="center">
  <img src="docs/screenshots/home-desktop.png" alt="Página inicial no desktop" width="68%" />
  &nbsp;
  <img src="docs/screenshots/home-mobile.png" alt="Página inicial no celular" width="24%" />
</p>

<p align="center">
  <img src="docs/screenshots/contato-desktop.png" alt="Página de contato" width="68%" />
</p>

## 🚀 Tecnologias

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- ESLint (`eslint-config-next`)

## 📄 Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Página inicial com as áreas de atuação e chamada para contato |
| `/sobre` | Apresentação do escritório |
| `/areas-atuacao/direito-familia` | Direito de Família |
| `/areas-atuacao/direito-civel` | Direito Cível |
| `/areas-atuacao/direito-trabalho` | Direito do Trabalho |
| `/contato` | WhatsApp, e-mail, endereço e link para o Google Maps |
| `/politica-privacidade` | Política de Privacidade |
| `/termos-de-uso` | Termos de Uso |

## ✨ Destaques

- Layout responsivo, pensado primeiro para o celular, com menu mobile no cabeçalho.
- SEO: metadados por página (título e descrição), `sitemap.xml` e `robots.txt` gerados automaticamente.
- Contato direto pelo WhatsApp.
- Páginas renderizadas no servidor. O único componente do lado do cliente é o menu do cabeçalho.

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz (Header + Footer) e metadados globais
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Import do Tailwind
│   ├── sitemap.ts          # Gera /sitemap.xml
│   ├── robots.ts           # Gera /robots.txt
│   ├── sobre/
│   ├── contato/
│   ├── areas-atuacao/
│   │   ├── direito-familia/
│   │   ├── direito-civel/
│   │   └── direito-trabalho/
│   ├── politica-privacidade/
│   └── termos-de-uso/
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação e menu mobile
│   └── Footer.tsx
└── lib/
    └── site.ts             # URL base do site (SITE_URL)
public/
└── logo.png
```

## 🛠️ Como rodar localmente

Pré-requisito: Node.js 20.9 ou superior.

```bash
# instalar as dependências
npm install

# servidor de desenvolvimento em http://localhost:3000
npm run dev
```

### Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run start` | Serve a build de produção |
| `npm run lint` | Roda o ESLint |

## ⚙️ Configuração

- **URL do site:** definida em `src/lib/site.ts` (`SITE_URL`) e usada nos metadados, no sitemap e no robots.
- **Contatos:** WhatsApp, e-mail e endereço ficam em constantes no topo de `src/app/contato/page.tsx`.
- **Novas páginas:** ao criar uma rota, adicione-a também à lista em `src/app/sitemap.ts`.

## 📝 Licença

Projeto privado. Todos os direitos reservados © Madeira Advocacia.
