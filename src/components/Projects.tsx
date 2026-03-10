import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'HealthTrack 🏥',
      description: 'Aplicación de seguimiento médico con gestión de pacientes, citas y historiales clínicos.',
      image: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      liveUrl: 'https://healttrack.netlify.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Jardín Verde 🌿',
      description: 'Diseño de sitio web para jardinería y paisajismo creado completamente en Figma con prototipos interactivos.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design System'],
      liveUrl: 'https://fade-blotch-73535759.figma.site/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'App Móvil Expo 📱',
      description: 'Aplicación móvil desarrollada con React Native y Expo, disponible para preview en Expo Dev.',
      image: 'https://images.pexels.com/photos/5380640/pexels-photo-5380640.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Expo', 'JavaScript', 'Mobile Development'],
      liveUrl: 'https://expo.dev/preview/update?message=Primera+publicaci%C3%B3n&updateRuntimeVersion=1.0.0&createdAt=2026-01-22T00%3A42%3A25.458Z&slug=exp&projectId=3bc9e73a-c06d-4903-a316-06ab32f385c8&group=c8d15f65-205b-4278-9625-980ca3d90de0',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Sistema de Restaurantes 🍽️',
      description: 'Sistema completo de gestión para restaurantes con pedidos, inventario y control de mesas.',
      image: 'https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges de tecnologías */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 2).map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
            >
              {tech}
            </span>
          ))}
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
    </section>
  );
};

export default Projects;