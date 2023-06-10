import FirstSection from "@/components/home/FirstSection";
<<<<<<< HEAD
import { lato } from "./layout";
=======
>>>>>>> 1418410 (Redesigning)

function SecondSection() {
  return (
    <section
      className="
        flex
<<<<<<< HEAD
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
=======
        w-full"
    >
      <div>
        <h1>Funcionamento</h1>
        <div>
          <div title="Estudo">
            <p>
>>>>>>> 1418410 (Redesigning)
              Ambiente voltado à permuta de conhecimento acerca do mercado
              financeiro e assuntos relacionados
            </p>
          </div>
<<<<<<< HEAD
          <div>
            <h2 className="font-bold text-3xl mb-8">Pesquisa</h2>
            <p className="text-xl">
=======
          <div title="Pesquisa">
            <p>
>>>>>>> 1418410 (Redesigning)
              Atividade voltada para o desenvolvimento e aprofundamento de
              artigos e pesquisas acadêmicas
            </p>
          </div>
<<<<<<< HEAD
          <div>
            <h2 className="font-bold text-3xl mb-8">Extensão</h2>
            <p className={`${lato.className}`}>
=======
          <div title="Extensão">
            <p>
>>>>>>> 1418410 (Redesigning)
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
<<<<<<< HEAD
    <main>
      <FirstSection />
      <SecondSection />
    </main>
=======
    <>
      <FirstSection />
      <SecondSection />
    </>
>>>>>>> 1418410 (Redesigning)
  );
}
