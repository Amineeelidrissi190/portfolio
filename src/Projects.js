import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import photo from './photos/photo.png'
import photo2 from './photos/photo2.png'

function Projects({projectsRef}) {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { t, i18n } = useTranslation();
  
  // Mock data pour les projets avec vidéos individuelles
  const allProjects = [
    {
      title: "ELITE",
      description: "Application web complète avec panier d'achat, paiement et tableau de bord administrateur.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/350x200",
      video: "/videos/medyoutech-demo.mp4", // Vidéo spécifique pour ce projet
      link: "#",
      category: "Web"
    },
    {
      title: "Modification sur une application web",
      description: "Saas qui fait la gestion des ecoles : suppliers, students , teachers mes taches primcipales sont l'impression des documents, la gestion des abscences pour les etudiants et les teachers,l'ajout des filtres. c'est un projet reel et jetait paye",
      technologies: ["Laravel", "Bootstrap", "Ajax"],
      image: photo,
      video: "/video.mp4", // Vidéo spécifique pour ce projet
      category: "Web"
    },
    {
      title: "E-commerce Platform",
      description: "Plateforme de commerce électronique avec gestion des produits, commandes et paiements sécurisés.",
      technologies: ["Laravel", "Livewire", "Alpinejs","Bootstraap"],
      image: photo2,
      video: "/videoMedTech.mp4", // Vidéo spécifique pour ce projet
      category: "Web"
    }
  ];

  const [projects, setProjects] = useState(allProjects);

  // Filtrer les projets par catégorie
  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === "Tous") {
      setProjects(allProjects);
    } else {
      setProjects(allProjects.filter(project => project.category === category));
    }
  };

  // Ouvrir le popup vidéo
  const openVideoPopup = (project) => {
    setSelectedProject(project);
    setShowVideoPopup(true);
  };

  // Fermer le popup vidéo
  const closeVideoPopup = () => {
    setShowVideoPopup(false);
    setSelectedProject(null);
  };

  const filters = ["Tous", "Web"];

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4 md:px-10 min-h-screen flex flex-col items-center justify-start">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-3">{t('projects.title')}</h2>
        <div className="h-1 w-20 bg-green-400 mx-auto"></div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          {t('projects.content')}
        </p>
      </motion.div>

      {/* Filtres de projets */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter, index) => (
          <button 
            key={index}
            onClick={() => filterProjects(filter)}
            className={`px-4 py-2 ${activeFilter === filter ? 'bg-green-500' : 'bg-gray-700 hover:bg-green-500'} rounded-full text-sm transition-colors duration-300`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/20 transition-all duration-300"
          >
            <div className="relative overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Afficher le bouton seulement si le projet a une vidéo */}
                {project.video && (
                  <button 
                    onClick={() => openVideoPopup(project)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Voir la démo
                  </button>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-sm font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs px-2 py-1 bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Indicateur de vidéo disponible */}
              {project.video && (
                <div className="flex items-center text-green-400 text-xs">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Démo disponible
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup vidéo */}
      <AnimatePresence>
        {showVideoPopup && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeVideoPopup}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête du popup */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeVideoPopup}
                  className="text-gray-400 hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Conteneur vidéo - Utilise la vidéo spécifique du projet sélectionné */}
              <div className="relative w-full h-0 pb-[56.25%] mb-4">
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  controls
                  autoPlay
                  muted
                  key={selectedProject.video} // Force le rechargement quand la vidéo change
                >
                  <source src={selectedProject.video} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>

              {/* Description du projet */}
              <div className="text-gray-300">
                <p className="mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-3 py-1 bg-green-500 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;