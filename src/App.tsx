import "./App.css";
import Navbar from "./components/UI/Navbar";
import Hero from "./pages/Hero";
import TrustStats from "./pages/TrustStat";
import About from "./pages/About-us";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import WhyChooseUs from "./pages/Why-us";
import Process from "./pages/Our-process";
import FaithSection from "./pages/FaithSections";
import CTASection from "./pages/Cta";
import Contact from "./pages/Contact";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Process />
        <FaithSection />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
