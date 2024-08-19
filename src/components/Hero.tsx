import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#A8E6CF] to-[#56C596] text-transparent bg-clip-text">
              Perspective
            </span>{" "}
            Engineering & Consulting
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#FFA500] via-[#FFBF71] to-[#FF7F50] text-transparent bg-clip-text">
              MEP Projects
            </span>{" "}
            and Designs
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We are a leading MEP Engineering and Design service provider in the tristate area. We assist with various
          projects, including hospitals, residential buildings, apartments, and educational institutions. Our team
          consists of registered, licensed PE engineers.
        </p>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
