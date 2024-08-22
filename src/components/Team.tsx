import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Emma Smith",
    position: "Product Manager",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "John Doe",
    position: "Tech Lead",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Ashley Ross",
    position: "Frontend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Bruce Rogers",
    position: "Backend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/peterashayapepmp/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61560803636778",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

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

      <div className="flex flex-row gap-8">
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
                src="https://media-lga3-1.cdn.whatsapp.net/v/t61.24694-24/409039660_349385954796302_1906468738147331685_n.jpg?ccb=11-4&oh=01_Q5AaIC-Pthi0CZqPC0tPGvlT8lsHUpgBieb_F2B-2dej-0gB&oe=66C7A6CA&_nc_sid=5e03e0&_nc_cat=111"
                alt="user avatar"
                className="absolute grayscale-[0%] -top-12 rounded-lg w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center pb-3">Peter Ashaya</CardTitle>
          </CardHeader>

          <CardContent className="text-center pb-2 min-w-56">
            <img
                src="/peter-qr.png"
                alt="I am a P.E. licensed professional engineer with extensive experience electrical and mechanical system design, & PMP® projects and contracts management."
                className="rounded-full w-44 aspect-square object-cover"
            />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4 rounded bg-muted/80 p-4">
          <p className="text-sm pb-1">
            With over 10 years of experience PERSPECTIVE ENGINEERING CONSULTING P.L.L.C. is one of the leading
            Engineering and Design service providers in the tristate area. We have successfully completed more than 45
            Projects within 2023 and we can assist you in any kind of projects ranging from Hospitals, Residential
            ,Apartments, Education, Mixed Use etc. We are a team of MEP professional designers, HVAC, Electrical,
            Plumbing, Fire alarm and Fire protection.
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
              NY (PE# 10693), NJ (PE# 24GE06036000), CT (PE# 31301), SC (PE# 42922), TX (PE# 124382)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
