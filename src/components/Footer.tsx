"use client";

import { FacebookOutlined, InstagramOutlined, TwitterOutlined, UpOutlined } from "@ant-design/icons";

export default function Footer() {
    function HandleCLick() {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
      <footer className="flex flex-col items-center gap-8 px-6 py-8 bg-black">
        <button
          onClick={HandleCLick}
          className="flex flex-row items-center gap-1 px-2 py-1 font-bold text-black transition-all duration-200 bg-white border-2 border-white rounded-md w-fit hover:bg-black hover:text-white"
        >
          <UpOutlined />
          <p>Voltar ao Topo</p>
        </button>
        <div className="flex flex-col items-center gap-6">
          <div>
            <h2 className="mb-2">Siga-nos em nossas redes sociais</h2>
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
          </div>
          <p className="text-center">
            &copy;LAMF5 {new Date().getFullYear()} | Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/gfrancolourenco/"
              className="transition-colors duration-100 hover:text-gray-400"
              target="_blank"  
            >
              Gabriel Franco
            </a>
          </p>
        </div>
      </footer>
    );
}