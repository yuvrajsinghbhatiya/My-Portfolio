import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
