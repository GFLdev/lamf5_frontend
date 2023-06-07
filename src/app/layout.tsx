import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lato, Montserrat } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"]
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"]
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
};
