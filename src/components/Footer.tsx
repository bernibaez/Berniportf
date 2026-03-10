import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    } border-t`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo y descripción */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Berny Baez 🚀
              </span>
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Desarrollador web y QA junior creando experiencias digitales increíbles, 
              una línea de código a la vez.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#sobre-mi', label: 'Sobre mí' },
                { href: '#proyectos', label: 'Proyectos' },
                { href: '#habilidades', label: 'Habilidades' },
                { href: '#contacto', label: 'Contacto' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm hover:text-purple-600 transition-colors duration-200 ${
                      darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm">
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                📧 berni2dox@gmail.com
              </p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                📍 República Dominicana
              </p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                🕒 Disponible para proyectos
              </p>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className={`border-t mt-8 pt-8 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                © {currentYear} Berny Baez. Hecho con
              </span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                y
              </span>
              <Coffee size={16} className="text-amber-600" />
            </div>

            {/* Tech stack */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Code size={16} className="text-blue-900" />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Construido con React, TypeScript & Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Mensaje divertido */}
        <div className="text-center mt-6">
          <p className={`text-sm italic ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            "El código es poesía, y el testing es la crítica constructiva" - Berny 🎭
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;