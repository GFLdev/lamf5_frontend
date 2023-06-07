"use client";
import Model from "../../components/home/Model";
import { Canvas } from "@react-three/fiber";
import { GetStaticProps } from "next";
import useWindowDimensions from "@/hooks/useWindowDimensions";

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

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://brapi.dev/api/quote/B3SA3?range=1mo&interval=1d"
  );
  const data = await res.json();
  console.log(data)
  return {
    props: {
      data
    },
  };
};

function StarterSection() {
  const { height, width } = useWindowDimensions();

  return (
    <section
      className="
        w-full
        h-screen
        z-0"
    >
      <Canvas camera={{ position: [width/2, 0, 50], rotation: [10, 0, 0] }} frameloop="demand" className="-z-50">
        <Model />
      </Canvas>
    </section>
  );
}

function SecondSection() {
  return (
    <section
      className="
        flex
        min-h-fit
        max-h-screen
        w-full"
    >
      <div>
        <h1>Sobre a Liga</h1>
      </div>
    </section>
  );
}

function ThirdSection() {
  return (
    <section
      className="
        flex
        h-screen
        w-full"
    >
      <div>
        <h1>Funcionamento</h1>
        <div>
          <div title="Estudo">
            <p>
              Ambiente voltado à permuta de conhecimento acerca do mercado
              financeiro e assuntos relacionados
            </p>
          </div>
          <div title="Pesquisa">
            <p>
              Atividade voltada para o desenvolvimento e aprofundamento de
              artigos e pesquisas acadêmicas
            </p>
          </div>
          <div title="Extensão">
            <p>
              Exercício voltado para disseminação de conhecimento para o público
              externo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main
      className="
      snap-y
      snap-mandatory
      [&>*]:snap-start
      h-screen
      "
    >
      <StarterSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
