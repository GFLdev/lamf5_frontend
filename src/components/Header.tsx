import { lato } from "@/app/layout";
import { FacebookOutlined, InstagramOutlined, LeftCircleOutlined, RightCircleOutlined, TwitterOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";

export default function Header(): ReactElement {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [animationActive, setAnimationActive] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const scrollControll = (): void => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const handleResize = (): void => {
    if (typeof window !== "undefined") {
      setAnimationActive(() => false);
      setCollapsed(() => true);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollControll);
      return () => {
        window.removeEventListener("scroll", scrollControll);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      }
  }
  }, []);
  

  return (
    <>
      <header
        className={`
      md:flex
      justify-between
      fixed
      self-center
      lg:gap-20
      gap-16
      hidden
      z-50
      py-4
      ${show ? "md:animate-show" : "md:animate-hide"}
      `}
      >
        <div
          className="
          flex
          flex-row
          items-center
          hover:cursor-pointer"
        >
          <Link href="/">
            <Image src="/assets/logo.png" alt="LAMF5" width={65} height={65} />
          </Link>
        </div>
        <div
          className={`
          flex
          flex-row
          justify-between
          items-center
          lg:gap-20
          gap-16
          ${lato}
          font-light
          text-lg hover:[&>*]:cursor-pointer
          hover:[&>*]:text-2
          [&>*]:transition-colors
          [&>*]:duration-100
          hover:[&>*]:transition-colors
          hover:[&>*]:duration-100`}
        >
          <div>
            <Link href="/about">
              <p>Sobre</p>
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
        </div>
      </header>
      <nav
        className={`
          w-52
          -right-56
          h-screen
          shadow-2xl
          bg-1
          flex
          flex-col
          fixed
          justify-between
          top-0
          md:hidden
          self-end
          z-50
          border-l-2
          border-white
          py-4
          ${
            animationActive
              ? collapsed
                ? "animate-slideout"
                : "animate-slidein"
              : ""
          }`}
      >
        <button
          onClick={() => {
            setAnimationActive(() => true);
            setCollapsed(() => !collapsed);
          }}
          className={`
          text-4xl
          select-none
          fg1
          z-40
          ${collapsed ? "fixed right-4 top-4" : "absolute left-4 top-2"}`}
        >
          {collapsed ? <LeftCircleOutlined /> : <RightCircleOutlined />}
        </button>
        <div
          className="
        flex
        flex-col
        items-center
        hover:cursor-pointer"
        >
          <Link href="/">
            <Image src="/assets/logo.png" alt="LAMF5" width={48} height={48} />
          </Link>
        </div>
        <div
          className={`
        flex
        flex-col
        justify-between
        items-center
        gap-8
        ${lato}
        font-light
        text-xl hover:[&>*]:cursor-pointer
        hover:[&>*]:text-2
        [&>*]:transition-colors
        [&>*]:duration-100
        hover:[&>*]:transition-colors
        hover:[&>*]:duration-100`}
        >
          <div>
            <Link href="/about">
              <p>Sobre</p>
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
        </div>
        <div
          className="
            flex
            flex-row
            text-xl
            items-center
            justify-center
            px-8
            gap-6
            hover:[&>*]:text-2
            [&>*]:transition-colors
            [&>*]:duration-100
            hover:[&>*]:transition-colors
            hover:[&>*]:duration-100"
        >
          <a
            href="https://www.instagram.com/lamf5.ufv/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://twitter.com/lamf5_ufv"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.facebook.com/lamf5.oficial?_rdc=1&_rdr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookOutlined />
          </a>
        </div>
      </nav>
    </>
  );
}