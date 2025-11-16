export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "120+",
      description: "Projects",
    },
    {
      quantity: "65+",
      description: "MEP Designs",
    },
    {
      quantity: "35+",
      description: "Structural Designs",
    },
    {
      quantity: "75+",
      description: "Inspections",
    },
    {
      quantity: "9",
      description: "On-going RFI and Submittals",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
