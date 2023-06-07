import '@/app/globals.css';
import client from "@/api/api";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { lato, montserrat } from "@/app/layout";
import { Card } from 'antd';
import Image from 'next/image';
import { UpOutlined } from '@ant-design/icons';
import ToTopBtn from '@/components/BackToTop';
import BaseLayout from '@/components/layout';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getAllMembers {
        getAllMembers {
          id
          name
          position
          linkedin
        }
      }
    `,
  });

  return {
    props: {
      members: data.getAllMembers,
    },
  };
};

function getPosition(position: string): string {
  switch (position) {
    case "PRESID":
      return "Presidente";
    case "DIREST":
      return "Diretor(a) de Estudos";
    case "DIRPRO":
      return "Diretor(a) de Projetos";
    case "DIRCOM":
      return "Diretor(a) de Comunicação";
    case "DIRPES":
      return "Diretor(a) de Pessoas";
    case "AUXEST":
      return "Auxiliar de Estudos";
    case "AUXPRO":
      return "Auxiliar de Projetos";
    case "AUXCOM":
      return "Auxiliar de Comunicação";
    case "AUXPES":
      return "Auxiliar de Pessoas";
    case "MEMBER":
      return "Membro";
    default:
      return "";
  }
}

function MemberCard(member: Member): ReactElement {
  return (
    <a href={member.linkedin} rel="noopener noreferrer" target="_blank">
      <Card
        className="
          w-80
          text-center
          bg-1
          text-1
          border-none
          h-36
          flex
          flex-col
          justify-end
          relative
          hover:shadow-lg
          hover:transition-shadow
          hover:duration-200
          duration-200
          transition-shadow"
      >
        <div
          className="
          bg-2
          rounded-full
          h-28
          w-28
          border-4
          absolute
          -top-16
          left-1/2
          right-1/2
          transform
          -translate-x-1/2
          select-none
          ease-in
          duration-200"
        >
          {/* 
            Fallback icon available at: https://www.flaticon.com/free-icons/user"
            User icons created by Freepik - Flaticon
          */}
          <Image
            src="/assets/members/fallbackMember.png"
            alt="Avatar"
            width={112}
            height={112}
          />
        </div>
        <p className="text-xl font-bold">{member.name}</p>
        <p className="text-lg">{getPosition(member.position)}</p>
      </Card>
    </a>
  );
}

function FirstSection(): ReactElement {
  return (
    <section
      className="
        w-full
        h-screen
        relative
      "
    >
      <video
        autoPlay
        loop
        muted
        onContextMenu={(e) => e.preventDefault()}
        className="
          object-cover
          h-full
          w-full
          absolute
          shadow-lg
          blur-sm"
      >
        <source src="/assets/members/bg.mp4" type='video/mp4' />
      </video>
      <div
        className="
        h-full
        z-40
        relative
        flex
        flex-col
        items-center
        justify-center
        pt-20
        gap-8"
      >
        <h1
          className={`
            ${montserrat.className}
            text-6xl
            text-1
            w-fit
            mx-8
            sm:m-0`}
        >
          Sobre a LAMF5
        </h1>
        <p
          className="
            text-lg
            mx-8
            sm:m-0
            sm:text-xl
            sm:w-1/2
            sm:text-center
            text-left"
        >
          A LAMF5 foi fundada em 2019 pelos alunos de graduação em economia,
          pela a Universidade Federal de Viçosa, com principal objetivo de
          desenvolver estudos e pesquisas acadêmicas de alta aplicabilidade e, a
          partir disso, produzir conteúdos para o público externo
        </p>
      </div>
    </section>
  );
}

class Member {
  "id": string;
  "name": string;
  "position": string;
  "linkedin": string;
}

export default function Members(props: {members: Member[]}) {
  const presid: Member[] = props.members.filter((member) =>
    member.position === "PRESID"
  );
  const directors: Member[] = props.members.filter((member) =>
    /^DIR/.test(member.position)
  );
  const aux: Member[] = props.members.filter((member) =>
    /^AUX/.test(member.position)
  );
  const members: Member[] = props.members.filter(
    (member) => member.position === "MEMBER"
  );

  return (
    <BaseLayout>
      <div
        className={`
      ${lato.className}`}
      >
        <FirstSection />
        <section
          className="
          bg-3"
        >
          <div
            className="
            flex
            flex-col
            justify-center"
          >
            <div className="flex flex-col items-center">
              <h1
                className={`
                text-black
                ${montserrat}
                text-6xl
                w-min
                mt-20`}
              >
                Board
              </h1>
              <div
                className="
                flex
                flex-col
                justify-center
                items-center
                sm:w-4/5
                max-w-[1360px]
                mt-28
                gap-y-32"
              >
                <MemberCard {...presid[0]} key={presid[0].id} />
                <div
                  className="
                  flex
                  flex-row
                  flex-wrap
                  gap-x-16
                  gap-y-32
                  justify-center"
                >
                  {directors.map((director) => {
                    return <MemberCard {...director} key={director.id} />;
                  })}
                  {aux.map((a) => {
                    return <MemberCard {...a} key={a.id} />;
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
                w-min
                mt-20`}
              >
                Membros
              </h1>
              <div
                className="
                flex
                flex-row
                flex-wrap
                gap-x-16
                gap-y-32
                justify-center
                items-center
                sm:w-4/5
                max-w-[1360px]
                mt-28"
              >
                {members.map((member) => {
                  return <MemberCard {...member} key={member.id} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
}
