import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Reviews } from "./components/Reviews.tsx";
import { Team } from "@/components/Team.tsx";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <HowItWorks />
            <Services />
            <Reviews />
            <Team />
            <Footer />
            <ScrollToTop />
            {/*<FAQ />*/}
            {/*<Cta />*/}
          </>
        } />
        <Route path="/projects" element={
          <>
            <Projects />
            <Footer />
            <ScrollToTop />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;