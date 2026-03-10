import React from 'react';
import { Code, Coffee, Music, Gamepad2, Database, Brush } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const interests = [
    { icon: Code, label: 'Desarrollo Web', color: 'text-blue-900' },
    { icon: Database, label: 'Bases de Datos', color: 'text-orange-600' },
    { icon: Brush, label: 'Diseño de Software', color: 'text-purple-600' },
    { icon: Coffee, label: 'Café', color: 'text-amber-600' },
    { icon: Music, label: 'Música', color: 'text-green-500' },
    { icon: Gamepad2, label: 'Testing QA', color: 'text-blue-700' }
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Sobre mí 👨‍💻
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Conoce un poco más sobre quién soy
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
                ¡Hola! Soy Berny 🚀
              </h3>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Soy un desarrollador web y QA junior apasionado por crear 
                  experiencias digitales que no solo funcionen perfectamente, sino que también 
                  sorprendan y diviertan a los usuarios. Me especializo tanto en el desarrollo como en garantizar la calidad del software.
                </p>
                
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Comencé mi viaje en el desarrollo y testing hace 3 años cuando descubrí que 
                  podía convertir ideas en realidad usando código y asegurar que funcionen perfectamente. 
                  Desde entonces, no he parado de aprender sobre desarrollo, metodologías de testing, 
                  bases de datos y diseño de software.
                </p>
                
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Además de mi experiencia en desarrollo y testing, he tenido la oportunidad de liderar 
                  proyectos de software, coordinando equipos y asegurando la entrega de soluciones de alta calidad.
                </p>
                
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Cuando no estoy programando o probando aplicaciones, me encontrarás jugando videojuegos, 
                  escuchando música o explorando nuevos lugares con mi cámara 📸
                </p>
              </div>
            </div>

            {/* Intereses */}
            <div className={`p-6 rounded-2xl shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h4 className="text-xl font-bold mb-4">Mis intereses 💫</h4>
              
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