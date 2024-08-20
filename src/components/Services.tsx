import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  ElectricalIcon,
  MechanicalIcon,
  PlumbingIcon,
  EnergyIcon,
  FireIcon, InspectionIcon, ConstructionIcon
} from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Mechanical",
    description:
      "PEC designs HVAC systems to meet and exceed all of the latest energy code requirements in order to provide an environment that is both comfortable and energy-efficient.  Utilizing the latest computerized heating and cooling load calculation software, we can ensure that your system is sized just right for your needs.  Whether the project is new construction or renovation, PERSPECTIVE will work closely with the architect or owner to provide the most practical and aesthetic solution for your home or building.  With in-depth knowledge of all types of cutting-edge HVAC systems, the client will have the ability to choose what system they likes best for the application at hand.  Having years of experience in the design of residential, commercial and institutional buildings, PEC can help with any project that comes your way.",
    icon: <MechanicalIcon />,
  },
  {
    title: "Electrical",
    description:
      "Innovation using the NEC guidelines enables us to design the most effective and safe electrical systems. Our familiarity with all types of power aids in designing new or modifying existing power systems, co-generation facilities, emergency power generation, load shedding, grounding, fire alarm, and lighting systems.  Full service design is undertaken for projects including multi-family residential, manufacturing plants, sports facilities, ice rinks, fuel cell facilities and restaurants among the many we have accomplished over the years.",
    icon: <ElectricalIcon />,
  },
  {
    title: "Plumbing",
    description:
        "When it comes to plumbing systems design, cost effectiveness is at the top of our list.  PEC takes the time to analyze all domestic water, sanitary waste/vents, storm water and natural gas piping solutions in order to minimize piping and materials.  In addition, high efficiency gas water heaters are always viewed as the first option for domestic water heating applications.  PEC has years of proven experience with residential, commercial and multi-family plumbing system engineering and design.",
    icon: <PlumbingIcon />,
  },
  {
    title: "Energy Modeling",
    description:
        "With green building design and LEED on the rise, energy modeling requirements are becoming standardized for many building project developments and contract document submissions.  PEC houses expert energy modelers that have over 10 years of experience in the field.  Using the latest energy modeling software, we can provide a model of your home or building to show that our Mechanical, Electrical and Plumbing designs give significant annual electrical and fossil fuel savings compared to the minimum energy code requirements.  Upon completion of the model, a detailed report including all of the necessary filing paperwork will be provided to the client.",
    icon: <EnergyIcon />,
  },
  {
    title: "Fire Protection/Sprinkler Design",
    description:
        "PEC has the capacity to produce full shop drawings including pipe sizing, calculations, flow testing and head layout. Varying levels of design can be incorporated.  Our experience with NFPA-13 and 13R as well as municipality requirements.  Testing and inspections of FP systems and certification of backflow devices is all part of our complete program.  We employ the latest computerized techniques in fire protection engineering.",
    icon: <FireIcon />,
  },
  {
    title: "Construction Management / Owner's Representation",
    description:
      "Avoid costly mistakes by taking advantage of PEC 's years of proven expertise in PMP®, design, bidding, and contractor management, scheduling and budgeting.  PEC is familiar with the entire process including scheduling, change orders, RFIs, inspections and whatever else it takes to assist the Owner to success.",
    icon: <InspectionIcon />,
  },
  {
    title: "Expert Witness / Inspection Engineering",
    description:
        "Experience with so many aspects of construction techniques gives us the expertise to deal with the problems that take place during the building process.  Whether it be incorrect design, poor workmanship, faulty materials, or poor preparation, PEC brings a customized approach to each client’s needs.  Investigation from preliminary, design and building parameters, quality assurance to inspecting and verifying contract conformance.  Cases included in our resume include faulty equipment and materials, improper preparation, code violations are all cases that we have concluded.",
    icon: <ConstructionIcon />,
  },
];

export const Services = () => {
  return (
    <section
        id="services"
        className="container py-24 sm:py-32"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="lg:col-span-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          </p>
        </div>

        {serviceList.map(({ icon, title, description }: ServiceProps) => (
          <Card key={title}>
            <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
              <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                {icon}
              </div>
              <div>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-md mt-2">
                  {description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
