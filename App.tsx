
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Impact from './components/Impact';
import Process from './components/Process';
import Specs from './components/Specs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        <Roadmap />
        <Impact />
        <Process />
        <Team />
        <Specs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
