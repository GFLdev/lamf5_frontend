import Header from '@/components/Header';
import Footer from "@/components/Footer";
import './globals.css'
import { Montserrat, Lato } from 'next/font/google'
import LayoutProvider from './layoutProvider';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="relative text-white bg-black">
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
