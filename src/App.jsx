import "./App.css";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Stats from "./components/layout/Stats";

const App = () => {
  return (
    <div className="font-manrope">
      <Navbar />
      <main>
        <Hero />
        <Stats />
      </main>
    </div>
  );
};

export default App;
