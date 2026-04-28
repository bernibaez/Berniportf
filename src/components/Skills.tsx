import React, { useState, useEffect, useRef } from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML5', level: 90, icon: '🌐', color: 'from-blue-400 to-blue-600' },
    { name: 'CSS3', level: 85, icon: '🎨', color: 'from-blue-500 to-blue-700' },
    { name: 'JavaScript', level: 80, icon: '⚡', color: 'from-blue-600 to-blue-800' },
    { name: 'React', level: 75, icon: '⚛️', color: 'from-blue-700 to-blue-900' },
    { name: 'TypeScript', level: 70, icon: '📘', color: 'from-blue-800 to-blue-900' },
    { name: 'Node.js', level: 90, icon: '💚', color: 'from-green-600 to-green-800' },
    { name: 'Supabase', level: 90, icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'MongoDB', level: 90, icon: '🍃', color: 'from-green-600 to-green-800' },
    { name: 'Figma', level: 90, icon: '🎨', color: 'from-purple-500 to-purple-700' },
    { name: 'Adobe XD', level: 85, icon: '🖌️', color: 'from-purple-600 to-purple-800' },
    { name: 'Testing QA', level: 75, icon: '🔍', color: 'from-blue-500 to-blue-700' },
    { name: 'Git & GitHub', level: 80, icon: '🔀', color: 'from-slate-600 to-slate-800' },
    { name: 'Responsive Design', level: 85, icon: '📱', color: 'from-blue-600 to-blue-800' }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Selenium', icon: '🤖' },
    { name: 'Chrome DevTools', icon: '🔧' },
    { name: 'Jest/Cypress', icon: '🧪' },
    { name: 'Postman', icon: '📬' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar: React.FC<{ skill: any; index: number }> = ({ skill, index }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium flex items-center">
          <span className="mr-2 text-xl">{skill.icon}</span>
          {skill.name}
        </span>
        <span className={`text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {skill.level}%
        </span>
      </div>
      
      <div className={`w-full bg-gray-200 rounded-full h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div
          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        >
          <div className="h-full w-full rounded-full bg-gradient-to-r from-white/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Mis Habilidades 🛠️
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Las tecnologías que domino y con las que trabajo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Habilidades técnicas */}
          <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="mr-3 text-2xl">💻</span>
              Habilidades Técnicas
            </h3>
            
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Herramientas y soft skills */}
          <div className="space-y-8">
            {/* Herramientas */}
            <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3 text-2xl">🔧</span>
                Herramientas
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{tool.icon}</span>
                    <span className="font-medium text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3 text-2xl">🧠</span>
                Soft Skills
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { skill: 'Trabajo en equipo', icon: '🤝' },
                  { skill: 'Resolución de problemas', icon: '🧩' },
                  { skill: 'Aprendizaje continuo', icon: '📚' },
                  { skill: 'Comunicación efectiva', icon: '💬' },
                  { skill: 'Gestión del tiempo', icon: '⏰' },
                  { skill: 'Creatividad', icon: '💡' }
                ].map((item) => (
                  <div
                    key={item.skill}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificaciones y aprendizaje */}
        <div className="mt-16 text-center">
          <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold mb-6">
              En constante aprendizaje 🚀
            </h3>
            
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Actualmente estudiando y mejorando en:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'Playwright', 'Docker', 'AWS', 'Automation Testing'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full font-medium hover:scale-105 transform transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;