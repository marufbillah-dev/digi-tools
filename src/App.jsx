import "./App.css";
import GetStarted from "./components/layout/GetStarted";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Products from "./components/layout/products/Products";
import Stats from "./components/layout/Stats";

const App = () => {
  return (
    <div className="font-manrope">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <GetStarted />
      </main>
    </div>
  );
};

export default App;
