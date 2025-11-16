import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// interface TeamProps {
//   imageUrl: string;
//   name: string;
//   position: string;
//   socialNetworks: SociaNetworkslProps[];
// }

// interface SociaNetworkslProps {
//   name: string;
//   url: string;
// }

// const teamList: TeamProps[] = [
//   {
//     imageUrl: "https://i.pravatar.cc/150?img=35",
//     name: "Emma Smith",
//     position: "Product Manager",
//     socialNetworks: [
//       {
//         name: "Linkedin",
//         url: "https://www.linkedin.com/in/leopoldo-miranda/",
//       },
//       {
//         name: "Facebook",
//         url: "https://www.facebook.com/",
//       },
//       {
//         name: "Instagram",
//         url: "https://www.instagram.com/",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://i.pravatar.cc/150?img=60",
//     name: "John Doe",
//     position: "Tech Lead",
//     socialNetworks: [
//       {
//         name: "Linkedin",
//         url: "https://www.linkedin.com/in/leopoldo-miranda/",
//       },
//       {
//         name: "Facebook",
//         url: "https://www.facebook.com/",
//       },
//       {
//         name: "Instagram",
//         url: "https://www.instagram.com/",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://i.pravatar.cc/150?img=36",
//     name: "Ashley Ross",
//     position: "Frontend Developer",
//     socialNetworks: [
//       {
//         name: "Linkedin",
//         url: "https://www.linkedin.com/in/leopoldo-miranda/",
//       },
//
//       {
//         name: "Instagram",
//         url: "https://www.instagram.com/",
//       },
//     ],
//   },
//   {
//     imageUrl: "https://i.pravatar.cc/150?img=17",
//     name: "Bruce Rogers",
//     position: "Backend Developer",
//     socialNetworks: [
//       {
//         name: "Linkedin",
//         url: "https://www.linkedin.com/in/peterashayapepmp/",
//       },
//       {
//         name: "Facebook",
//         url: "https://www.facebook.com/profile.php?id=61560803636778",
//       },
//     ],
//   },
// ];

export const Team = () => {
  // const socialIcon = (iconName: string) => {
  //   switch (iconName) {
  //     case "Linkedin":
  //       return <Linkedin size="20" />;
  //
  //     case "Facebook":
  //       return <Facebook size="20" />;
  //
  //     case "Instagram":
  //       return <Instagram size="20" />;
  //   }
  // };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/*{teamList.map(*/}
        {/*  ({ imageUrl, name, position, socialNetworks }: TeamProps) => (*/}
        {/*    <Card*/}
        {/*      key={name}*/}
        {/*      className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"*/}
        {/*    >*/}
        {/*      <CardHeader className="mt-8 flex justify-center items-center pb-2">*/}
        {/*        <img*/}
        {/*          src={imageUrl}*/}
        {/*          alt={`${name} ${position}`}*/}
        {/*          className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"*/}
        {/*        />*/}
        {/*        <CardTitle className="text-center">{name}</CardTitle>*/}
        {/*        <CardDescription className="text-primary">*/}
        {/*          {position}*/}
        {/*        </CardDescription>*/}
        {/*      </CardHeader>*/}

        {/*      <CardContent className="text-center pb-2">*/}
        {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>*/}
        {/*      </CardContent>*/}

        {/*      <CardFooter>*/}
        {/*        {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (*/}
        {/*          <div key={name}>*/}
        {/*            <a*/}
        {/*              rel="noreferrer noopener"*/}
        {/*              href={url}*/}
        {/*              target="_blank"*/}
        {/*              className={buttonVariants({*/}
        {/*                variant: "ghost",*/}
        {/*                size: "sm",*/}
        {/*              })}*/}
        {/*            >*/}
        {/*              <span className="sr-only">{name} icon</span>*/}
        {/*              {socialIcon(name)}*/}
        {/*            </a>*/}
        {/*          </div>*/}
        {/*        ))}*/}
        {/*      </CardFooter>*/}
        {/*    </Card>*/}
        {/*  )*/}
        {/*)}*/}
        <Card className="bg-muted/80 relative mt-8 flex flex-col justify-center items-center">
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
                src="/peter.jpg"
                alt="Peter Ashaya"
                className="absolute grayscale-[0%] -top-12 rounded-lg w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center pb-3">Peter Ashaya, PE PMP®</CardTitle>
          </CardHeader>

          <CardContent className="text-center pb-2 px-4">
            <p className="text-sm">
              I am a P.E. licensed professional engineer with extensive experience in electrical and mechanical system design, & PMP® projects and contracts management.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted/80 relative mt-8 flex flex-col justify-center items-center">
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
                src="/asheer.jpg"
                alt="Asheer Aboulkhir"
                className="absolute grayscale-[0%] -top-12 rounded-lg w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center pb-3">Asheer Aboulkhir</CardTitle>
          </CardHeader>

          <CardContent className="text-center pb-2 px-4">
            <p className="text-sm">
              I am a senior structural engineer with comprehensive expertise in structural analysis and design, specializing in commercial and residential projects.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted/80 relative mt-8 flex flex-col justify-center items-center">
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
                src="/peggy.jpg"
                alt="Peggy Macaluso"
                className="absolute grayscale-[0%] -top-12 rounded-lg w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center pb-3">Peggy Macaluso</CardTitle>
          </CardHeader>

          <CardContent className="text-center pb-2 px-4">
            <p className="text-sm">
              I am a senior plumbing engineer with extensive experience in plumbing system design and water management solutions for diverse building types.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted/80 relative mt-8 flex flex-col justify-center items-center">
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
                src="/scott.jpg"
                alt="Scott D."
                className="absolute grayscale-[0%] -top-12 rounded-lg w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center pb-3">Scott D., PE, CFPS, CPD</CardTitle>
          </CardHeader>

          <CardContent className="text-center pb-2 px-4">
            <p className="text-sm">
              I am a fire protection engineer with advanced certifications and comprehensive experience in fire alarm and fire protection systems engineering.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 flex flex-col gap-4 rounded bg-muted/80 p-6">
        <p className="text-sm pb-1">
          With over 10 years of experience PERSPECTIVE ENGINEERING CONSULTING P.L.L.C. is one of the leading
          Engineering and Design service providers in the tristate area. We have successfully completed more than 45
          Projects within 2023 and we can assist you in any kind of projects ranging from Hospitals, Residential
          ,Apartments, Education, Mixed Use etc. We are a team of MEP professional designers, HVAC, Electrical,
          Structural, Plumbing, Fire alarm and Fire protection.
        </p>
        <p className="text-sm">
          Our design team worked together in large range of occupancy projects:
        </p>
        <ul className="list-disc list-inside text-sm pl-2 pb-2">
          <li>Health care facilities</li>
          <li>Storage buildings and varieties of commercial buildings</li>
          <li>Between small size apartment buildings (4-6 units) to a large Mid-rise building (100-150 units)</li>
          <li>Schools and Daycares</li>
          <li>Office buildings</li>
          <li>Small convenience store and food chain to high end restaurant and kitchens</li>
        </ul>
        <p className="text-sm">
          Licensed in many states, we provide our services in: {" "}
          <span className="text-gray-700">
            NY (PE# 10693), NJ (PE# 24GE06036000), CT (PE# 31301), SC (PE# 42922), TX (PE# 124382), FL (PE# 101427)
          </span>
        </p>
      </div>
    </section>
  );
};
