import {LogoIcon} from "./Icons";

export const Footer = () => {
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto"/>

            <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2">
                    <a
                        rel="noreferrer noopener"
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        <LogoIcon/>
                        Perspective Engineering & Consulting
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Menu</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Home
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Portfolio
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            About
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Follow Us</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Facebook
                        </a>
                    </div>

                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Perspective Engineering & Consulting</h3>
                    <h2 className="text-sm">
                        1234 Street Name, <br/>
                        City Name, United States
                    </h2>
                    <h2 className="text-sm">
                        +1 234 567 8901
                    </h2>
                    <h2 className="text-sm">
                        <a
                            rel="noreferrer noopener"
                            href="mailto:email@email.com"
                            className="opacity-60 hover:opacity-100"
                        >
                            email@email.com
                        </a>
                    </h2>
                </div>
            </section>

            <section className="container pb-14 text-center">
                <h3>
                    &copy; 2024 Designed and Developed by{" "}
                    <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.elkommos.com"
                        className="text-primary transition-all border-primary hover:border-b-2"
                    >
                        Anthony Elkommos Youssef
                    </a>
                </h3>
            </section>
        </footer>
    );
};
