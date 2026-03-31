import { ToastContainer } from "react-toastify";
import "./App.css";
import CallToAction from "./components/layout/CallToAction";
import Footer from "./components/layout/Footer";
import GetStarted from "./components/layout/GetStarted";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Pricing from "./components/layout/pricing/Pricing";
import Products from "./components/layout/products/Products";
import Stats from "./components/layout/Stats";
import { useState } from "react";

const App = () => {
  // State: Manage Cart Item
  const [cart, setCart] = useState([]);

  return (
    <div className="font-manrope">
      <Navbar cart={cart} />
      <main>
        <Hero />
        <Stats />
        <Products cart={cart} setCart={setCart} />
        <GetStarted />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
