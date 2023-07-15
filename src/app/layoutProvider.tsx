"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  if (!/^\/auth/.test(pathname)) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
  return (
    <>
      {children}
    </>
  );
};