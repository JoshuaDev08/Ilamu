import "./App.css";
import Navbar from "./components/UI/Navbar";
import Hero from "./pages/Hero";
import TrustStats from "./pages/TrustStat";
import About from "./pages/About-us";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Services />
      </main>
    </>
  );
}

export default App;
