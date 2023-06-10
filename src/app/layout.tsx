import Header from '@/components/Header';
<<<<<<< HEAD
import Footer from "@/components/Footer";
import './globals.css'
import { Montserrat, Lato } from 'next/font/google'

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  display: "swap"
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
=======
import './globals.css'
import { Montserrat, Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700']
});

const montserrat = Montserrat({subsets: ['latin']});
>>>>>>> 1418410 (Redesigning)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="pt-BR">
      <body className="relative text-white bg-black">
        <Header />
        {children}
        <Footer />
=======
    <html lang="en">
      <body className={`${lato.className} bg-black text-white`}>
        <Header />
        {children}
>>>>>>> 1418410 (Redesigning)
      </body>
    </html>
  );
}
