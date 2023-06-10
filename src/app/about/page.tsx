import { getClient } from "@/api/client";
import FirstSection from "@/components/FirstSectTemplate";
import MemberCard from "@/components/about/MemberCard";
import { IMember } from "@/interfaces/IMember";
import { gql } from "@apollo/client";
import { montserrat } from "../layout";

const query = gql`
  query getAllMembers {
    getAllMembers {
      id
      name
      position
      linkedin
    }
  }
`;

async function SecondSection() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });
  const members: IMember[] = await data.getAllMembers;
  const presid: IMember[] = members.filter((member) =>
    member.position === "PRESID"
  );
  const directors: IMember[] = members.filter((member) =>
    /^DIR/.test(member.position)
  );
  const aux: IMember[] = members.filter((member) =>
    /^AUX/.test(member.position)
  );
  const mem: IMember[] = members.filter(
    (member) => member.position === "MEMBER"
  );

  return (
    <section
          className="bg-gray-200 "
        >
          <div
            className="flex flex-col justify-center "
          >
            <div className="flex flex-col items-center">
              <h1
                className={`
                text-black
                ${montserrat.className}
                text-6xl
                2xl:text-7xl
                w-min
                mt-20`}
              >
                Board
              </h1>
              <div
                className="flex flex-col items-center justify-center max-w-4xl sm:w-4/5 mt-28 gap-y-32"
              >
                <MemberCard key={presid[0].id} member={presid[0]} />
                <div
                  className="flex flex-row flex-wrap justify-center gap-x-16 gap-y-32"
                >
                  {directors.map((director) => {
                    return <MemberCard key={director.id} member={director} />;
                  })}
                  {aux.map((a) => {
                    return <MemberCard key={a.id} member={a} />;
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mb-20">
              <h1
                className={`
                text-black
                ${montserrat}
                text-6xl
                2xl:text-7xl
                w-min
                mt-20`}
              >
                Membros
              </h1>
              <div
                className="flex flex-row flex-wrap items-center justify-center max-w-4xl gap-x-16 gap-y-32 sm:w-4/5 mt-28"
              >
                {mem.map((member) => {
                  return <MemberCard key={member.id} member={member} />;
                })}
              </div>
            </div>
          </div>
        </section>
  );
}

export default function About() {
  return (
    <main>
      <FirstSection
        title="Sobre a LAMF5"
        content="
          A LAMF5 foi fundada em 2019 pelos alunos de graduação em economia,
          pela a Universidade Federal de Viçosa, com principal objetivo de
          desenvolver estudos e pesquisas acadêmicas de alta aplicabilidade e, a
          partir disso, produzir conteúdos para o público externo"
      />
      {/* @ts-expect-error Async Server Component */}
      <SecondSection />
    </main>
  );
}
