"use client";
import { IMember } from "@/interfaces/IMember";
import { Card } from "antd";
import Image from "next/image";

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

export default function MemberCard({ member }: { member: IMember }) {
  return (
    <a href={member.linkedin} rel="noopener noreferrer" target="_blank">
      <Card className="relative flex flex-col justify-end text-center transition-shadow duration-200 bg-black border-none w-80 text-1 h-36 hover:shadow-lg hover:transition-shadow hover:duration-200">
        <div className="absolute duration-200 ease-in transform -translate-x-1/2 bg-white border-4 rounded-full select-none h-28 w-28 -top-16 left-1/2 right-1/2">
          {/* 
            Fallback icon available at: https://www.flaticon.com/free-icons/user"
            User icons created by Freepik - Flaticon
          */}
          <Image
            src="/assets/about/fallbackMember.png"
            alt="Avatar"
            width={112}
            height={112}
          />
        </div>
        <p className="text-xl font-bold text-white 2xl:text-2xl">{member.name}</p>
        <p className="text-lg text-white 2xl:text-xl">{getPosition(member.position)}</p>
      </Card>
    </a>
  );
}
