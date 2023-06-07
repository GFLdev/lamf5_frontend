import { Lato, Montserrat } from 'next/font/google';
import Header from '../components/Header';
import Footer from "../components/Footer";
import './globals.css';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300']
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600']
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "LAMF5 - UFV",
  description:
    "Venha conhecer a Liga Acadêmica de Mercado Financeiro da Universidade Federal de Viçosa. Realizamos pesquisa, grupos de estudo, projetos de extensão, além de elaborarmos eventos, workshop e minicursos para o público externo, em parceria de professores e profissionais do mercado financeiro.",
  applicationName: "LAMF5",
  referrer: "origin-when-cross-origin",
  keywords: ["Mercado", "Financeiro", "Liga", "Acadêmica"],
  authors: [{ name: "Gabriel Franco", url: "https://github.com/GabFrancoL" }],
  creator: "Gabriel Franco",
  publisher: "LAMF5",
  icons: {
    favicon: "/assets/favicon.ico",
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/apple-touch-icon.png"
  },
  twitter: {
    card: "summary_large_image",
    title: "LAMF5",
    description:
      "Venha conhecer a Liga Acadêmica de Mercado Financeiro da Universidade Federal de Viçosa. Realizamos pesquisa, grupos de estudo, projetos de extensão, além de elaborarmos eventos, workshop e minicursos para o público externo, em parceria de professores e profissionais do mercado financeiro.",
    images: {
      url: "/assets/logo.png",
      alt: "LAMF5 Logo",
    },
  },
  openGraph: {
    images: "/assets/logo.png",
    description:
      "Venha conhecer a Liga Acadêmica de Mercado Financeiro da Universidade Federal de Viçosa. Realizamos pesquisa, grupos de estudo, projetos de extensão, além de elaborarmos eventos, workshop e minicursos para o público externo, em parceria de professores e profissionais do mercado financeiro.",
    url: "https://lamf5.com.br",
    siteName: "LAMF5",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html
      lang="pt-BR"
      className="
      snap-y
      snap-mandatory"
    >
      <body
        className="
        box-border
        flex flex-col
        [&>*]:z-0"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
