import React, { useState } from 'react';
import { ExternalLink, Github, X, Monitor, Smartphone } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      id: 1,
      title: 'HealthTrack 🏥',
      description: 'Aplicación de seguimiento médico con gestión de pacientes, citas y historiales clínicos.',
      image: '/Healthtrack.png',
      demoType: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      liveUrl: 'https://healttrack.netlify.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Jardín Verde ',
      description: 'Diseño de sitio web para jardinería y paisajismo creado completamente en Figma con prototipos interactivos.',
      image: '/jardinverde.png',
      demoType: 'design',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design System'],
      liveUrl: 'https://jardinverde.netlify.app/',
      githubUrl: 'https://github.com/bernibaez/Jardin-Verde.git',
      featured: true
    },
    {
      id: 3,
      title: 'App Móvil de Pedidos',
      description: 'Aplicación móvil de pedidos de comida rápida con interfaz intuitiva y proceso de pedido optimizado.',
      image: '/Captura de pantalla 2026-04-21 203714.png',
      demoType: 'mobile',
      technologies: ['React Native', 'Expo', 'JavaScript', 'Mobile Development'],
      liveUrl: 'https://sky-dizzy-19110080.figma.site/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Sistema de Restaurantes 🍽️',
      description: 'Sistema completo de gestión para restaurantes con pedidos, inventario y control de mesas.',
      image: 'https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoType: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bernibaez/orderly-eats.git',
      featured: true
    },
    ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard: React.FC<{ project: any; featured?: boolean }> = ({ project, featured = false }) => (
    <div className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    } ${featured ? 'lg:col-span-1' : ''}`}>
      {/* Imagen con botón de preview */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Botón de vista previa */}
        <button
          onClick={() => setSelectedProject(project)}
          className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
          title="Ver vista previa"
        >
          <Monitor size={16} />
        </button>
        
        {/* Badges de tecnologías y tipo de demo */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.demoType === 'web' && (
            <span className="px-2 py-1 text-xs font-medium bg-blue-500/80 backdrop-blur-sm text-white rounded-full flex items-center gap-1">
              <Monitor size={12} />
              Web
            </span>
          )}
          {project.demoType === 'mobile' && (
            <span className="px-2 py-1 text-xs font-medium bg-green-500/80 backdrop-blur-sm text-white rounded-full flex items-center gap-1">
              <Smartphone size={12} />
              Móvil
            </span>
          )}
          {project.demoType === 'design' && (
            <span className="px-2 py-1 text-xs font-medium bg-purple-500/80 backdrop-blur-sm text-white rounded-full">
              Design
            </span>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className={`text-sm mb-4 leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex space-x-3">
          <a
            href={project.liveUrl}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-medium hover:scale-105 transform transition-all duration-200 text-sm"
          >
            <ExternalLink size={16} />
            <span>Ver Demo</span>
          </a>
          
          <a
            href={project.githubUrl}
            className={`flex items-center space-x-2 px-4 py-2 border-2 rounded-lg font-medium hover:scale-105 transform transition-all duration-200 text-sm ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Github size={16} />
            <span>Código</span>
          </a>
        </div>
      </div>
    </div>
  );

  // Modal para vista previa ampliada
  const DemoPreview: React.FC<{ project: any }> = ({ project }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
           onClick={() => setSelectedProject(null)}>
        <div className={`relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-2xl shadow-2xl ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
             onClick={(e) => e.stopPropagation()}>
          
          {/* Header */}
          <div className={`sticky top-0 z-10 flex items-center justify-between p-6 border-b ${
            darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <X size={24} />
            </button>
          </div>

          {/* Contenido del preview */}
          <div className="p-6">
            {/* Tipo de demo y preview principal */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                {project.demoType === 'web' && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    <Monitor size={16} />
                    <span className="font-medium">Aplicación Web</span>
                  </div>
                )}
                {project.demoType === 'mobile' && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    <Smartphone size={16} />
                    <span className="font-medium">Aplicación Móvil</span>
                  </div>
                )}
                {project.demoType === 'design' && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    <span className="font-medium">Diseño UI/UX</span>
                  </div>
                )}
              </div>
              
              {/* Preview principal */}
              <div className={`relative rounded-xl overflow-hidden shadow-lg ${
                project.demoType === 'mobile' ? 'max-w-sm mx-auto' : ''
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay con información */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Vista Previa del Proyecto</h4>
                  <p className="text-white/90 text-sm">
                    {project.demoType === 'web' && 'Aplicación web responsiva con interfaz moderna'}
                    {project.demoType === 'mobile' && 'Aplicación móvil nativa con experiencia optimizada'}
                    {project.demoType === 'design' && 'Diseño de interfaz con prototipado interactivo'}
                  </p>
                </div>
              </div>
            </div>

            {/* Tecnologías */}
            <div className="mb-6">
              <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Tecnologías Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.liveUrl}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-medium hover:scale-105 transform transition-all duration-200"
              >
                <ExternalLink size={20} />
                <span>Ver Demo en Vivo</span>
              </a>
              
              <a
                href={project.githubUrl}
                className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 border-2 rounded-lg font-medium hover:scale-105 transform transition-all duration-200 ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Github size={20} />
                <span>Ver Código Fuente</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Mis Proyectos 🚀
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Una selección de mis trabajos más recientes
          </p>
        </div>

        {/* Proyectos destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="mr-2">⭐</span>
            Proyectos Destacados
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        {/* Otros proyectos */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="mr-2">💻</span>
            Otros Proyectos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            ¿Te gustaron mis proyectos? ¡Hay muchos más en mi GitHub!
          </p>
          
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            <span>Ver todos en GitHub</span>
          </a>
        </div>
      </div>
      
      {/* Modal de vista previa */}
      {selectedProject && <DemoPreview project={selectedProject} />}
    </section>
  );
};

export default Projects;