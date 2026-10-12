import "./App.css";
import Navbar from "./components/UI/Navbar";
import Hero from "./pages/Hero";
import TrustStats from "./pages/TrustStat";
import About from "./pages/About-us";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
      </main>
    </>
  );
}

export default App;
