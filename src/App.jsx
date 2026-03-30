import "./App.css";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className="font-manrope">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
