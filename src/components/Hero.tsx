import React, { useState, useEffect } from 'react';
import { Github, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Construyo ideas con código...';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Saludo principal */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block">¡Hola, soy</span>
              <span className="block bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                Berny Baez
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium">
              y creo código de calidad! 🧙‍♂️💻🔍
            </p>
          </div>

          {/* Texto mecanografiado */}
          <div className="h-16 flex items-center justify-center">
            <p className={`text-lg sm:text-xl font-mono ${
              darkMode ? 'text-green-400' : 'text-green-600'
            }`}>
              {typewriterText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Descripción */}
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Desarrollador full stack con experiencia en qa y devops apasionado por crear experiencias digitales 
            increíbles y garantizar la calidad del software. Especializado en React, JavaScript, testing y aseguramiento de calidad.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#proyectos"
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Ver mis proyectos ✨
            </a>
            
            <a
              href="#contacto"
              className={`px-8 py-3 rounded-full font-medium border-2 transition-all duration-200 hover:scale-105 transform ${
                darkMode
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
                  : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
              }`}
            >
              Contáctame 📞
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: 'https://github.com/bernibaez', label: 'GitHub' },
              { icon: Mail, href: '#contacto', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 transform ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-md'
                }`}
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
        </div>
      </div>
    </section>
  );
};

export default Hero;