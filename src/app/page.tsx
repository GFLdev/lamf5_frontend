import FirstSection from "@/components/home/FirstSection";
import { lato } from "./layout";

function SecondSection() {
  return (
    <section
      className="
        flex
        w-full
        h-full
        bg-gray-200
        px-4
        py-8"
    >
      <div
        className="
          w-full
          h-full"
      >
        <h1 className="font-lato text-black">Funcionamento</h1>
        <div
          className="
            flex
            flex-col
            md:flex-row
            mx-4
            justify-center
            items-center
            gap-10
            [&>*]:bg-black
            [&>*]:px-4
            [&>*]:py-8
            [&>*]:w-full
            [&>*]:max-w-md
            [&>*]:h-full
            [&>*]:text-center
            [&>*]:rounded-lg
            [&>*]:shadow-xl"
        >
          <div>
            <h2 className="font-bold text-3xl mb-8">Estudo</h2>
            <p className="text-xl">
              Ambiente voltado à permuta de conhecimento acerca do mercado
              financeiro e assuntos relacionados
            </p>
          </div>
          <div>
            <h2 className="font-bold text-3xl mb-8">Pesquisa</h2>
            <p className="text-xl">
              Atividade voltada para o desenvolvimento e aprofundamento de
              artigos e pesquisas acadêmicas
            </p>
          </div>
          <div>
            <h2 className="font-bold text-3xl mb-8">Extensão</h2>
            <p className={`${lato.className}`}>
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
    <main>
      <FirstSection />
      <SecondSection />
    </main>
  );
}
