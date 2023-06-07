import Footer from "./Footer";
import Header from "./Header";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
  return (
    <section className="flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}