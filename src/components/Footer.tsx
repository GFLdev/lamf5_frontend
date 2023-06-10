"use client";

import { UpOutlined } from "@ant-design/icons";

export default function Footer() {
    function HandleCLick() {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
      <footer className="flex flex-col items-center gap-8 px-6 py-8 bg-black">
        <div className="flex flex-col md:flex-row"></div>
        <button
          onClick={HandleCLick}
          className="flex flex-row items-center gap-1 px-2 py-1 font-bold text-black transition-all duration-200 bg-white border-2 border-white rounded-md w-fit hover:bg-black hover:text-white"
        >
          <UpOutlined />
          <p>Voltar ao Topo</p>
        </button>
      </footer>
    );
}