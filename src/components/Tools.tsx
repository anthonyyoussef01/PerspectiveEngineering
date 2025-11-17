export const Tools = () => {
  const tools = [
    { title: "Autodesk Built", alt: "BLD", src: "/bld.jpg" },
    { title: "Revit", alt: "RVT", src: "/rvt.jpg" },
    { title: "AutoCAD", alt: "AutoCAD", src: "/cad.jpg" },
    { title: "Autodesk Insight 360", alt: "I360", src: "/i360.jpg" },
    { title: "Duct Sizer", alt: "Duct Sizer", src: "/blowdryer.jpg" },
    { title: "HAP v6", alt: "HAP v6", src: "/hap-v6.jpg" },
    { title: "K-Select", alt: "K-Select", src: "/k-select.jpg" },
    { title: "LATS HVAC", alt: "LATS-HVAC", src: "/lats-hvac.jpg" },
    { title: "McQuay", alt: "McQuay", src: "/mcquay.jpg" },
    { title: "Titus Teams Selection", alt: "Titus Teams Selection", src: "/titus.jpg" },
    { title: "Diamond Builder", alt: "DiamondBuilder", src: "/diamond-builder.jpg" },
    { title: "Trane", alt: "Trane", src: "/trane.webp" },
    { title: "Enercalc", alt: "Enercalc", src: "/enercalc.jpg" },
  ];

  return (
    <section className="container text-center py-1 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Professional tools{" "}
        </span>
        and software we use
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        We stay current with the latest tools and technology, equipped with trade-specific software solutions
      </p>

      <div className="bg-muted/50 border rounded-lg py-8 px-4 md:px-8 overflow-hidden">
        <div className="relative">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            @media (max-width: 767px) {
              .animate-scroll {
                animation: scroll 15s linear infinite;
              }
            }
            @media (min-width: 768px) and (max-width: 1024px) {
              .animate-scroll {
                animation: scroll 20s linear infinite;
              }
            }
          `}} />

          <div className="flex items-center gap-6 md:gap-8 animate-scroll">
            {/* First set of tools */}
            {tools.map((tool, index) => (
              <div key={index} className="group transition-transform hover:scale-110 duration-300 flex-shrink-0">
                <img
                  title={tool.title}
                  alt={tool.alt}
                  loading="lazy"
                  src={tool.src}
                  className="aspect-square object-contain h-14 md:h-20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              <div key={`duplicate-${index}`} className="group transition-transform hover:scale-110 duration-300 flex-shrink-0">
                <img
                  title={tool.title}
                  alt={tool.alt}
                  loading="lazy"
                  src={tool.src}
                  className="aspect-square object-contain h-14 md:h-20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

