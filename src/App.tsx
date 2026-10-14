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
  const [showLoader, setShowLoader] = useState(false);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const image = new Image();

    image.src = HeroBackground;

    // If already cached and ready, skip loader
    if (image.complete && image.naturalWidth > 0) {
      setAppReady(true);
      setShowLoader(false);
      return;
    }

    // Only show loader when the asset is actually not ready
    setShowLoader(true);

    const handleReady = () => {
      setAppReady(true);
      setLoaderExiting(true);

      window.setTimeout(() => {
        setShowLoader(false);
      }, 500);
    };

    image.onload = handleReady;

    return () => {
      image.onload = null;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showLoader ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && <PageLoader exiting={loaderExiting} />}

      <div
        className={`
          transition-opacity
          duration-500
          ${appReady ? "opacity-100" : "opacity-0"}
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
