'use client';
import { Card } from "antd";

function StarterPage() {
  return (
    <section
      className="
        w-full
        h-screen"
    ></section>
  );
}

export default function Home() {
  return (
    <main>
      <StarterPage />
      <section
        className="
        flex
        h-screen
        w-full">
        <div>
          <h1>Funcionamento</h1>
          <div>
            <Card title="Estudo">
              <p>
                Ambiente voltado à permuta de conhecimento acerca do mercado
                financeiro e assuntos relacionados
              </p>
            </Card>
            <Card title="Pesquisa">
              <p>
                Atividade voltada para o desenvolvimento e aprofundamento de
                artigos e pesquisas acadêmicas
              </p>
            </Card>
            <Card title="Extensão">
              <p>
                Exercício voltado para disseminação de conhecimento para o
                público externo
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
