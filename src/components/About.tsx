import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/80 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/logo.png"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Perspective Engineering & Consulting
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Perspective Engineering & Consulting is one of the leading MEP Engineering and Design service providers
                in the tristate area. We are registered licensed PE engineers, assisting with projects ranging from
                hospitals and residential buildings to apartments and educational institutions. Our team is dedicated
                to delivering high-quality engineering solutions tailored to the unique needs of each client.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
