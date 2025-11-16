import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
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
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXjhLUFCdErlmL_31IxcK2Si1XcQ3sKqfonKQ009XeSXrR2RWcF=s54-c-rp-mo-ba4-br100",
    name: "Youssef Israel",
    comment: "As an architect, I had the pleasure of working with Peter on the mechanical and electrical systems for my own residence. I can confidently say he is a highly professional and knowledgeable engineer who truly understands his work.\n" +
        "His design is fully compliant with code requirements, and the drawings are exceptionally clear, accurate, and easy to follow. He uses the latest design software, which ensures high quality and efficiency in his work.\n" +
        "What really stood out to me was his collaborative spiri, he's very supportive, always ready with smart, practical suggestions, and made the whole process smooth and enjoyable. Even after delivering the final drawings, he continued to follow up and provide guidance during the implementation stage.\n" +
        "Working with him was a great experience. He’s not only technically skilled but also genuinely committed to delivering the best. I highly recommend him to anyone looking for top quality MEP work.",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocK341C5gWtS--V1zUTtEhYZDnaC5n4GQ-c9_mwoVeP6uo8n_Q=s54-c-rp-mo-br100",
    name: "kier levesque",
    comment: "This was my first experience working with Peter and his team. They were very professional and accommodating to every request. I would recommend them without hesitation for MEP services.",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocIwpn3qxgpK_jQdkJ0XPz2ViN2V4FCRoRI62wzmurdNKmSfSQ=s54-c-rp-mo-br100",
    name: "Thomas Connolly",
    comment: "Peter is great. I have done numerous jobs with Peter. Every job was done on time . Peter is very easy to get a hold of for questions that come up on the job.",
  },
  {
    image: "https://lh3.googleusercontent.com/a/ACg8ocI7f-Bb9s0ottpTCXSHpnvDz3Obc1_PcKO2XUfKwWULwlbT_Q=s54-c-rp-mo-br100",
    name: "Theodore Earley",
    comment: "Great service, nice experience with honesty consulting.",
  },
  {
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXU8y4VJ3dANlMYzRzZeqvZZzo4NfrBb9OtF7e5ueOEWZg52y95=s54-c-rp-mo-ba3-br100",
    name: "Natalie Castro",
    comment: "As a new homeowner navigating renovations without a general contractor, I can't say enough great things about Asheer and Peter. They went above and beyond in providing structural services and made sure I fully understood every requirement—no question was too small. Their responsiveness and turnaround time far exceeded my expectations and outshined any engineering firm I've worked with professionally.\n" +
        "\n" +
        "What really stood out was their customer service. They were not only incredibly knowledgeable, but also took the time to ensure both I and my contractor understood the plan. They even quality checked the contractor’s work to make sure it was done exactly to spec.\n" +
        "\n" +
        "If you're looking for engineers who are professional, patient, thorough, and just genuinely great to work with—these are your guys. I highly recommend them! They maintain their 5 stars for a reason!",
  }
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

      <a href="https://www.google.com/search?q=Perspective+Engineering+%26+Consulting&rlz=1C1UEAD_enUS1088US1088&oq=per&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDwyCAgBEEUYJxg7MhUIAhAuGEMYxwEYsQMY0QMYgAQYigUyBggDEEUYPTIGCAQQRRg8MgYIBRBFGD0yBggGEEUYPDIGCAcQRRhB0gEINjE4NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#">
        <img src="/reviews.png" className="h-14 rounded-lg" />
      </a>

      <p className="text-xl text-muted-foreground pt-4">
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
