import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Record from './components/Record';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sectionElement = document.getElementById(currentSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentSection} currentSection={currentSection} />

      <main className="pt-20">
        <div id="home">
          <Hero onNavigate={setCurrentSection} />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="record">
          <Record />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            &copy; {new Date().getFullYear()} VoiceArtistry. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Professional voice over services for brands worldwide
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
