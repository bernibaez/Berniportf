import React from 'react';
import { Moon, Sun, Menu, X, Download, Rocket } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  mobileMenuOpen, 
  toggleMobileMenu 
}) => {
  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900/95 backdrop-blur-md border-gray-700' 
        : 'bg-white/95 backdrop-blur-md border-gray-200'
    } border-b`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Berny Baez 🚀
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:scale-105 transform ${
                    darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="file:///C:/Users/Owner/Downloads/Berny%20B%C3%A1ez%20cv.pdf"
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transform transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Rocket size={16} />
              <span>Ver CV</span>
            </a>
            
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 transform ${
                darkMode
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                  : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-800 text-yellow-400'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </a>
              ))}
              
              <a
                href="file:///C:/Users/Owner/Downloads/Berny%20Báez%20cv.pdf"
                className="block bg-gradient-to-r from-blue-900 to-blue-700 text-white px-3 py-2 rounded-md font-medium mt-4 text-center"
              >
                <Rocket size={16} className="inline mr-2" />
                Ver CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;