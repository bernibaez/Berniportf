import React from 'react';
import { Mail, Phone, MapPin, Github, MessageCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const t = useTranslation();
  
  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'berni2dox@gmail.com',
      href: 'mailto:berni2dox@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: t.contact.info.telefono,
      value: '829-987-8357',
      href: 'tel:8299878357',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: t.contact.info.ubicacion,
      value: 'República Dominicana',
      href: '#',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      href: '#',
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3 text-2xl">📞</span>
                {t.contact.info.email} / {t.contact.info.telefono}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <contact.icon className={`${contact.color}`} size={24} />
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3 text-2xl">🌐</span>
                Sígueme en
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                    } ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilidad */}
            <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-2xl">⏰</span>
                Disponibilidad
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Disponible para proyectos</span>
                </div>
                
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Horario: Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-4)
                </p>
                
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Tiempo de respuesta: Generalmente dentro de 24 horas
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3 text-2xl">💬</span>
              Contáctame por WhatsApp
            </h3>
            
            <div className="text-center space-y-6">
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                ¿Prefieres hablar directamente? ¡Contáctame por WhatsApp para una respuesta rápida!
              </p>
              
              <div className="flex flex-col items-center space-y-4">
                <a
                  href="https://wa.me/18299878357?text=Hola%20Berny,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20para%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chatear en WhatsApp</span>
                </a>
                
                <a
                  href="mailto:berni2dox@gmail.com?subject=Contacto%20desde%20Portafolio&body=Hola%20Berny,%0D%0A%0D%0AVi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20para%20un%20proyecto.%0D%0A%0D%0A[Describe%20aquí%20tu%20proyecto]%0D%0A%0D%0ASaludos."
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>Enviar por Gmail</span>
                </a>
                
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  📱 WhatsApp: 829-987-8357 | 📧 Gmail: berni2dox@gmail.com
                </p>
              </div>
              
              <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <strong>¿Por qué WhatsApp?</strong><br/>
                  • Respuesta más rápida<br/>
                  • Comunicación directa<br/>
                  • Compartir archivos fácilmente<br/>
                  • Sin complicaciones
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para crear algo increíble juntos? 🚀
            </h3>
            
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No dudes en contactarme para cualquier proyecto, colaboración o simplemente para charlar sobre desarrollo web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Berny_Baez_CV.pdf"
                download="Berny_Baez_CV.pdf"
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>📄</span>
                <span>Descargar CV (Estándar)</span>
              </a>
              
              <a
                href="/Berny_Baez_CV_Accented.pdf"
                download="Berny_Baez_CV_Accented.pdf"
                className={`px-8 py-3 rounded-full font-medium border-2 transition-all duration-200 hover:scale-105 transform flex items-center justify-center space-x-2 ${
                  darkMode
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
                    : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
                }`}
              >
                <span>📄</span>
                <span>Descargar CV (Con Acento)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;