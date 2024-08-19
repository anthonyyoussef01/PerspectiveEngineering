import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">John Doe React</CardTitle>
            <CardDescription>@john_doe</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Perspective Engineering is awesome!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://media-lga3-1.cdn.whatsapp.net/v/t61.24694-24/409039660_349385954796302_1906468738147331685_n.jpg?ccb=11-4&oh=01_Q5AaIC-Pthi0CZqPC0tPGvlT8lsHUpgBieb_F2B-2dej-0gB&oe=66C7A6CA&_nc_sid=5e03e0&_nc_cat=111"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Peter Ashaya</CardTitle>
          <CardDescription className="font-normal text-primary">
            PE Engineer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
                rel="noreferrer noopener"
                href="mailto:email@email.com"
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
            >
              <span className="sr-only">Email icon</span>
              <svg
                  role="img"
                  viewBox="0 0 20 21"
                  className="fill-foreground w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>Email</title>
                <defs>

                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -959.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                          d="M208,801.586 C208,801.034 208.448,801 209,801 L219,801 C219.552,801 220,801.034 220,801.586 L220,802.835 L214.447,805.612 C214.166,805.752 213.834,805.752 213.553,805.612 L208,802.835 L208,801.586 Z M206.276,804.209 L213.106,807.624 C213.669,807.906 214.331,807.906 214.894,807.624 L221.724,804.209 C221.893,804.125 222,803.952 222,803.762 L222,800.586 C222,799.481 221.105,799 220,799 L208,799 C206.895,799 206,799.481 206,800.586 L206,803.762 C206,803.952 206.107,804.125 206.276,804.209 L206.276,804.209 Z M222,815.586 C222,816.138 221.552,817 221,817 L207,817 C206.448,817 206,816.138 206,815.586 L206,809.116 C206,808.745 206.391,808.503 206.724,808.669 C210.9,810.757 209.617,810.116 213.119,811.867 C213.674,812.145 214.328,812.149 214.886,811.877 C218.357,810.193 216.898,810.897 221.284,808.791 C221.615,808.631 222,808.873 222,809.242 L222,815.586 Z M221.106,806.518 L214.447,809.848 C214.166,809.988 213.834,809.988 213.553,809.848 L206.894,806.518 C205.565,805.854 204,806.821 204,808.307 L204,816.586 C204,817.691 204.895,819 206,819 L222,819 C223.105,819 224,817.691 224,816.586 L224,808.307 C224,806.821 222.435,805.854 221.106,806.518 L221.106,806.518 Z"
                          id="email-[#1564]">

                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>

            <a
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/peterashayapepmp/"
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20"/>
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
                alt=""
                src="https://github.com/shadcn.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">John Doe React</CardTitle>
            <CardDescription>@john_doe</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </CardContent>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
