"use client";

import {
  FacebookOutlined,
  InstagramOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
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
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollControll);
      return () => {
        window.removeEventListener("scroll", scrollControll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <header
        className={`
        z-50
        w-full
        fixed
        hidden
        md:flex
        lg:gap
        gap-16
        py-4
        justify-center
        ${show ? "md:animate-show" : "md:animate-hide"}`}
      >
        <div className="flex flex-row items-center">
          <Link href="/">
            <Image src="/assets/logo.png" alt="LAMF5" width={65} height={65} />
          </Link>
        </div>
        <div
          className="
          flex
        text-white
          justify-between
          items-center
          lg:gap-20
          gap-16
          font-light
          text-lg
          2xl:text-2xl
          [&>*]:transition-colors
          [&>*]:duration-100
          hover:[&>*]:text-gray-400"
        >
          <Link href="/about">
            <p>Sobre</p>
          </Link>
          <Link href="/articles">
            <p>Artigos</p>
          </Link>
          <Link href="/events">
            <p>Eventos</p>
          </Link>
          <Link href="/projects">
            <p>Projetos</p>
          </Link>
        </div>
      </header>
      <button
        onClick={() => {
          setAnimationActive(() => true);
          setCollapsed(() => false);
        }}
        className={`
          text-4xl
          select-none
          fixed
          right-4
          top-4
          z-50
          md:hidden
          ${show ? "animate-show" : "animate-hide"}`}
      >
        <LeftCircleOutlined />
      </button>
      <nav
        className={`
          w-52
          -right-56
          h-screen
          shadow-2xl
          bg-black
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
          text-white
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
            setCollapsed(() => true);
          }}
          className={`
          text-4xl
          select-none
          absolute
          left-4
          top-2`}
        >
          <RightCircleOutlined />
        </button>
        <div className="flex flex-col items-center select-none hover:cursor-pointer">
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
        font-light
        text-xl hover:[&>*]:cursor-pointer
        hover:[&>*]:text-gray-400
        [&>*]:transition-colors
        [&>*]:duration-100`}
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
            hover:[&>*]:text-gray-400
            [&>*]:transition-colors
            [&>*]:duration-100"
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
