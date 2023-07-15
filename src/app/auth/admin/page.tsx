
import Image from "next/image";

export default function Admin() {
    return (
      <section>
        <Image
          src="/assets/fullLogo.png"
          alt="LAMF5"
          width={300}
          height={300}
        />
        <p>Bem vindo à página de administrador da LAMF5!</p>
        <p>Selecione ao lado a área que pretende modificar:</p>
      </section>
    );
}