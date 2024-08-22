import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  title: string;
}

const features: FeatureProps[] = [
  {
    title: "Survey",
  },
  {
    title: "Proposal",
  },
  {
    title: "Kickoff Meeting",
  },
  {
    title: "Preliminary Design",
  },
  {
    title: "Review Drawing Set",
  },
  {
    title: "Final Stamped and Sealed Drawing Set",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        PEC{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Workflow
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {features.map(({ title }: FeatureProps) => (
            <Card
                key={title}
                className="bg-muted/80"
            >
              <CardHeader className="flex items-center justify-center h-full">
                <CardTitle className="text-md">
                  {title}
                </CardTitle>
              </CardHeader>
            </Card>
        ))}
      </div>
    </section>
  );
};
