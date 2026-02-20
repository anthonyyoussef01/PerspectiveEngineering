export const Tools = () => {
  const tools = [
    { title: "Autodesk Built", alt: "BLD", src: "/bld.jpg", url: "https://construction.autodesk.com/trial/autodesk-build" },
    { title: "Revit", alt: "RVT", src: "/rvt.jpg", url: "https://www.autodesk.com/products/revit" },
    { title: "AutoCAD", alt: "AutoCAD", src: "/cad.jpg", url: "https://www.autodesk.com/products/autocad" },
    { title: "Autodesk Insight 360", alt: "I360", src: "/i360.jpg", url: "https://www.autodesk.com/products/insight-360" },
    // These entries don't have working links so set url to null
    { title: "Duct Sizer", alt: "Duct Sizer", src: "/blowdryer.jpg", url: null },
    { title: "HAP v6", alt: "HAP v6", src: "/hap-v6.jpg", url: null },
    { title: "K-Select", alt: "K-Select", src: "/k-select.jpg", url: null },
    { title: "LATS HVAC", alt: "LATS-HVAC", src: "/lats-hvac.jpg", url: null },
    { title: "McQuay", alt: "McQuay", src: "/mcquay.jpg", url: null },
    { title: "Titus Teams Selection", alt: "Titus Teams Selection", src: "/titus.jpg", url: "https://www.titus-hvac.com/" },
    { title: "Diamond Builder", alt: "DiamondBuilder", src: "/diamond-builder.jpg", url: null },
    { title: "Trane", alt: "Trane", src: "/trane.webp", url: "https://www.trane.com/" },
    { title: "Enercalc", alt: "Enercalc", src: "/enercalc.jpg", url: "https://www.enercalc.com/" },
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

      <div className="bg-muted/50 border rounded-lg py-4 px-4 md:px-8">
        {/* Mobile scrollable view (hidden on md and above) */}
        <div className="md:hidden">
          <div className="relative">
            {/* Scroll hint text */}
            <p className="text-xs text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <span>← Swipe to explore →</span>
            </p>

            {/* Horizontal scrollable container */}
            <div className="overflow-x-auto pb-4 scroll-smooth">
              <div className="flex items-center gap-4 px-2">
                {tools.map((tool, index) => (
                  tool.url ? (
                    <a
                      key={index}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-transform hover:scale-110 duration-300 flex-shrink-0 cursor-pointer"
                      title={`Visit ${tool.title}`}
                    >
                      <img
                        title={tool.title}
                        alt={tool.alt}
                        loading="lazy"
                        src={tool.src}
                        className="aspect-square object-contain h-14 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                    </a>
                  ) : (
                    // Non-clickable but visually same as others; no hover scale and cursor is default
                    <div
                      key={index}
                      className="group transition-transform duration-300 flex-shrink-0 cursor-default"
                      title={`${tool.title} — link unavailable`}
                      role="img"
                      aria-label={`${tool.title} (link unavailable)`}
                    >
                      <img
                        title={tool.title}
                        alt={tool.alt}
                        loading="lazy"
                        src={tool.src}
                        className="aspect-square object-contain h-14 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop auto-scroll view (visible on md and above) */}
        <div className="hidden md:block relative overflow-hidden">
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
          `}} />

          <div className="flex items-center gap-8 animate-scroll">
            {/* First set of tools */}
            {tools.map((tool, index) => (
              tool.url ? (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-transform hover:scale-110 duration-300 flex-shrink-0 cursor-pointer"
                  title={`Visit ${tool.title}`}
                >
                  <img
                    title={tool.title}
                    alt={tool.alt}
                    loading="lazy"
                    src={tool.src}
                    className="aspect-square object-contain h-20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              ) : (
                // Non-clickable duplicate for desktop; visually same but no hover scale and cursor default
                <div
                  key={index}
                  className="group transition-transform duration-300 flex-shrink-0 cursor-default"
                  title={`${tool.title} — link unavailable`}
                  role="img"
                  aria-label={`${tool.title} (link unavailable)`}
                >
                  <img
                    title={tool.title}
                    alt={tool.alt}
                    loading="lazy"
                    src={tool.src}
                    className="aspect-square object-contain h-20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )
            ))}
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              tool.url ? (
                <a
                  key={`duplicate-${index}`}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-transform hover:scale-110 duration-300 flex-shrink-0 cursor-pointer"
                  title={`Visit ${tool.title}`}
                >
                  <img
                    title={tool.title}
                    alt={tool.alt}
                    loading="lazy"
                    src={tool.src}
                    className="aspect-square object-contain h-20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              ) : (
                <div
                  key={`duplicate-${index}`}
                  className="group transition-transform duration-300 flex-shrink-0 cursor-default"
                  title={`${tool.title} — link unavailable`}
                  role="img"
                  aria-label={`${tool.title} (link unavailable)`}
                >
                  <img
                    title={tool.title}
                    alt={tool.alt}
                    loading="lazy"
                    src={tool.src}
                    className="aspect-square object-contain h-20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
