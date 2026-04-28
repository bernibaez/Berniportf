import React from 'react';
import { Code, Coffee, Music, Gamepad2, Database, Brush } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const t = useTranslation();
  
  const interests = [
    { icon: Code, label: t.about.interestsList.desarrolloWeb, color: 'text-blue-900' },
    { icon: Database, label: t.about.interestsList.basesDatos, color: 'text-orange-600' },
    { icon: Brush, label: t.about.interestsList.disenoSoftware, color: 'text-purple-600' },
    { icon: Coffee, label: t.about.interestsList.cafe, color: 'text-amber-600' },
    { icon: Music, label: t.about.interestsList.musica, color: 'text-green-500' },
    { icon: Gamepad2, label: t.about.interestsList.devops, color: 'text-blue-700' }
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.about.title}
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Foto/Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`w-80 h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-400 to-pink-400'
              }`}>
                {/* Placeholder para foto - puedes reemplazar con una imagen real */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                {t.about.hello}
              </h3>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {t.about.description1}
                </p>
                
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {t.about.description2}
                </p>
                
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {t.about.description3}
                </p>
                
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {t.about.description4}
                </p>
              </div>
            </div>

            {/* Intereses */}
            <div className={`p-6 rounded-2xl shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h4 className="text-xl font-bold mb-4">{t.about.interests}</h4>
              
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {interests.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`${color}`} size={20} />
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;