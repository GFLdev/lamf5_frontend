// First section template

interface ISection {
    title: string,
    content: string
}

export default function FirstSection({ title, content }:ISection ) {

  return (
    <section
      className="relative w-full h-screen "
    >
      <video
        autoPlay
        loop
        muted
        className="absolute object-cover w-full h-full shadow-lg blur-sm"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>
      <div
        className="relative z-40 flex flex-col items-start justify-center h-full gap-12 sm:items-center md:pt-20 md:gap-16 "
      >
        <h1
          className="mx-8 text-6xl sm:text-7xl md:text-8xl sm:m-0 2xl:text-9xl"
        >
          {title}
        </h1>
        <p
          className="max-w-2xl mx-8 text-xl text-left sm:text-2xl sm:text-center sm:mx-16 2xl:text-4xl"
        >
          {content}
        </p>
      </div>
    </section>
  );
}