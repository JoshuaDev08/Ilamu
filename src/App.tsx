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
import { useEffect, useState } from "react";
import PageLoader from "./components/LoadingComponent";

import HeroBackground from "./assets/hero.jpeg";

const App = () => {
  const [heroReady, setHeroReady] = useState(false);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const image = new Image();

    image.src = HeroBackground;

    const handleReady = () => {
      setHeroReady(true);
    };

    image.onload = handleReady;

    // Covers cached images too.
    if (image.complete) {
      handleReady();
    }

    return () => {
      image.onload = null;
    };
  }, []);

  useEffect(() => {
    if (!heroReady) return;

    const exitTimer = window.setTimeout(() => {
      setLoaderExiting(true);
    }, 350);

    const removeTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, 900);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, [heroReady]);

  return (
    <>
      {showLoader && <PageLoader exiting={loaderExiting} />}

      <div
        className={`
          transition-opacity
          duration-700

          ${heroReady ? "opacity-100" : "opacity-0"}
        `}
      >
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
      </div>
    </>
  );
};

export default App;
