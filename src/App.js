import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import firstp from "./photos/firstp.png";
import ph1 from "./photos/ph1.png";
import Main from "./main";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import AboutComponent from "./About";
import { useTranslation } from "react-i18next";  


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
const { t } = useTranslation();
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);  // Renamed to aboutRef to avoid conflict

  // Liste des tags à animer
  const codeTags = [
    { text: "<compiling />", color: "text-pink-400" },
    { text: "<testing />", color: "text-purple-400" },
    { text: "<deploying />", color: "text-red-400" },
    { text: "<learning />", color: "text-cyan-300" },
    { text: "<debugging />", color: "text-yellow-300" },
    { text: "<coding />", color: "text-green-400" }
  ];

  // Observer pour détecter la section active
  const createObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.6 });

    if (homeRef.current) observer.observe(homeRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return observer;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = createObserver();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    // Vérifier si la référence existe et si elle a une valeur current
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    } else {
      console.log("La référence est null ou non définie");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 overflow-x-hidden text-white w-screen min-h-screen">
      <BrowserRouter>
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <Routes>
          <Route path="/" element={
            <Main 
              homeRef={homeRef} 
              projectsRef={projectsRef} 
              contactRef={contactRef}
            />
          } />
          
          <Route path="/About" element={<AboutComponent aboutRef={aboutRef} />} />
        </Routes>
        
        {/* Sections with refs */}
        <div id="home" ref={homeRef}>
          {/* Contenu de la section Home */}
        </div>
        
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
        
        <Footer />
        
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        
          </motion.button>
          
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;