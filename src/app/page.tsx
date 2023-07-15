import FirstSection from "@/components/home/FirstSection";
import {lato} from "./layout";
import StyledCarousel from "@/components/home/StyledCarousel";
import { gql } from "@apollo/client";
import { getClient } from "@/api/client";

const queryArticles = gql`
  query getAllArticles {
    getAllArticles {
      authors {
        name
      }
      content
      title
    }
  }
`;

async function SecondSection() {
	const query = gql`
		query getAllPartners {
			getAllPartners {
				id
				name
			}
		}
	`;
	const { data } = await getClient().query({
		query,
		context: {
		fetchOptions: {
			next: { revalidate: 60 },
		},
		},
	});
	const partners = await data.getAllPartners;

	if (partners.length > 0) {
		return (
			<section>
				<h1>Parceiros</h1>
				{partners.map((partner) => {
					return (
						<p key={partner.id}>{partner.name}</p>
					);
				})}
			</section>
		);
	}
	return (<></>);
}

function ThirdSection() {
	return (
		<section>
			<h1>Artigos</h1>
		</section>
	);
}

function FourthSection() {
	return (
    <section className="relative w-full px-4 py-12 h-max animate-show">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 object-cover blur-sm -z-40"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>
      <h1 className="mb-12 text-5xl font-bold text-center text-white font-lato 2xl:text-6xl">
        Funcionamento
      </h1>
      <div className="hidden md:block">
        <div
          className="
            grid
            grid-cols-3
            grid-rows-1
            mx-4
            justify-items-center
            items-center
            gap-10
            [&>*]:px-4
            [&>*]:py-8
            [&>*]:w-full
            [&>*]:h-full
            [&>*]:max-w-md
            [&>*]:text-center"
        >
          <div>
            <h2 className="mb-8 text-3xl font-bold">Estudo</h2>
            <p className={`text-xl ${lato.className}`}>
              Ambiente voltado à permuta de conhecimento acerca do mercado
              financeiro e assuntos relacionados
            </p>
          </div>
          <div>
            <h2 className="mb-8 text-3xl font-bold">Pesquisa</h2>
            <p className={`text-xl ${lato.className}`}>
              Atividade voltada para o desenvolvimento e aprofundamento de
              artigos e pesquisas acadêmicas
            </p>
          </div>
          <div>
            <h2 className="mb-8 text-3xl font-bold">Extensão</h2>
            <p className={`text-xl ${lato.className}`}>
              Exercício voltado para disseminação de conhecimento para o público
              externo
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <StyledCarousel>
          <div>
            <h2 className="mb-8 text-3xl font-bold">Estudo</h2>
            <p className={`text-xl ${lato.className}`}>
              Ambiente voltado à permuta de conhecimento acerca do mercado
              financeiro e assuntos relacionados
            </p>
          </div>
          <div>
            <h2 className="mb-8 text-3xl font-bold">Pesquisa</h2>
            <p className={`text-xl ${lato.className}`}>
              Atividade voltada para o desenvolvimento e aprofundamento de
              artigos e pesquisas acadêmicas
            </p>
          </div>
          <div>
            <h2 className="mb-8 text-3xl font-bold">Extensão</h2>
            <p className={`text-xl ${lato.className}`}>
              Exercício voltado para disseminação de conhecimento para o público
              externo
            </p>
          </div>
        </StyledCarousel>
      </div>
    </section>
  );
}

function FifthSection() {
	return (
		<section className="bg-black">
			<h1>Entre em contato</h1>
		</section>
	);
}

export default function Home() {
	return (
		<main>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
		</main>
	);
}
