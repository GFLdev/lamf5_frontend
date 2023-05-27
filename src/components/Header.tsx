import { lato } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="
      flex
      justify-between
      fixed self-center
      gap-20
      z-50
      py-4">
        <div className="
          flex
          flex-row
          items-center
          hover:cursor-pointer">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="LAMF5"
              width={65}
              height={65}
            />
          </Link>
        </div>
        <div className={`
          flex
          flex-row
          justify-between
          items-center
          gap-20
          ${lato.className}
          text-lg hover:[&>*]:cursor-pointer
          hover:[&>*]:text-red-600
          [&>*]:transition-colors
          [&>*]:duration-100
          hover:[&>*]:transition-colors
          hover:[&>*]:duration-100`}>
          <div>
            <Link href="/members">
              <p>Membros</p>
            </Link>
          </div>
          <div>
            <Link href="/articles">
              <p>Artigos</p>
            </Link>
          </div>
          <div>
            <Link href="/events">
              <p>Eventos</p>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <p>Projetos</p>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <p>Contato</p>
            </Link>
          </div>
        </div>
    </header>
  );
}