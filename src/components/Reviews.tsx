import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV_SbgZUR8Y4r2kx9QKT_Tc7iWGtkVpaWbHbAjsYyOGBxaMb2c=s54-c-rp-mo-ba3-br100",
    name: "Samuel Andraws",
    comment: "Peter is a fantastic engineer! He consistently delivers high-quality work and is always punctual, which is a major plus. His experience truly shines through in his problem-solving abilities. I highly recommend Peter for any mechanical, electrical, or HVAC engineering design or inspection projects. Thanks Peter for all the work you have done for us.",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocLCUoEsD6xHprTPMBg4r8XhB94ZtTUUcz8QP3GAKMN_0s-Xwg=s54-c-rp-mo-br100",
    name: "Nermin Ayoub",
    comment: "Perspective Engineering & Consulting is a unique MEP firm , costumer oriented, do their best to comply with standards/codes , costumer requirements & budget.",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocKsvPqdSW_ilz8vvNm5NWp6_xYnMSXOuNv3WjHvdg34Gj3u8A=s54-c-rp-mo-br100",
    name: "Sarah Abdelmassih",
    comment: "I had a fantastic experience with them . The team was professional, knowledgeable, and went above and beyond to ensure I was satisfied with their service., and I highly recommend them to anyone in need of their services. Thank you for a job well done!",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocI7f-Bb9s0ottpTCXSHpnvDz3Obc1_PcKO2XUfKwWULwlbT_Q=s54-c-rp-mo-br100",
    name: "Theodore Earley",
    comment: "Great service, nice experience with honesty consulting.",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocIy6ki8hO5Upa8Hp4dU5AdISQ3zyZqAnctKtv-i0XGL0ge37Q=s54-c-rp-mo-br100",
    name: "Mireille Zaky",
    comment: "Amazing services provided. Peter is a pleasure to work with. I would highly recommend.",
  },
];

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Clients Prefer{" "}
        </span>
        Perspective Engineering & Consulting
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, comment }: TestimonialProps) => (
            <Card
              key={name}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
