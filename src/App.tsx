import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Reviews } from "./components/Reviews.tsx";
import "./App.css";
import {Team} from "@/components/Team.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      {/*<Cta />*/}
      <Reviews />
      <Team />
      {/*<FAQ />*/}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
