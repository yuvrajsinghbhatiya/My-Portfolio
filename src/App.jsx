import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
