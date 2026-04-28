import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Rocket } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-black text-white' 
          : 'bg-gradient-to-br from-blue-50 via-slate-50 to-white'
      }`}>
        <Header 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        
        <Footer darkMode={darkMode} />
      </div>
    </LanguageProvider>
  );
}

export default App;