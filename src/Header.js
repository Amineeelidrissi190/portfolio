import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import traduction from "./photos/traduction.png"
import LanguageSwitcher from "./LanguageSwitcher";
export default function Header({ activeSection, scrollToSection, homeRef, projectsRef, contactRef, aboutRef, menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (ref) => {
    if (ref) {
      scrollToSection(ref);
      setMenuOpen(false);
    }
  };

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const navItem = (label, section, ref) => (
    <li
      onClick={() => handleNavigation(ref)}
      className={`cursor-pointer transition-all duration-300 hover:text-green-400 ${
        activeSection === section ? "text-green-400" : "text-white"
      }`}
    >
      {label}
    </li>
  );

  return (
    <header className={`fixed w-full z-50 px-6 py-4 md:px-10 transition-all duration-300 flex justify-between items-center ${
      scrolled ? 'bg-black bg-opacity-90 shadow-lg backdrop-blur' : 'bg-transparent'
    }`}>
      <Link to="/" className="text-green-400 font-bold text-lg tracking-wide">{"<Amine/>"}</Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link to="/" className={`${activeSection === "home" ? "text-green-400" : "text-white"} hover:text-green-400 transition-all`}>{t('header.Accueil')}</Link>
        {navItem("Projets", "projects", projectsRef)}
        {navItem("Contact", "contact", contactRef)}
        <Link to="/About" className={`${activeSection === "about" ? "text-green-400" : "text-white"} hover:text-green-400 transition-all`}>{t('header.About')}</Link>

        {/* Langue */}
        <div className="relative group">
          <LanguageSwitcher/>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-black bg-opacity-95 z-40 shadow-xl animate-slide-down">
          <ul className="flex list-none flex-col py-6 space-y-3 text-center text-white font-medium">
            <Link to="/" className={`py-2 ${activeSection === "home" ? "text-green-400" : ""}`} onClick={() => setMenuOpen(false)}>{t('header.Accueil')}</Link>
            <li onClick={() => handleNavigation(projectsRef)} className={`py-2 list-none ${activeSection === "projects" ? "text-green-400" : ""}`}>{t('header.Projets')}</li>
            <li onClick={() => handleNavigation(contactRef)} className={`py-2 list-none ${activeSection === "contact" ? "text-green-400" : ""}`}>{t('header.A propos')}</li>
            <Link to="/About" className={`py-2 ${activeSection === "about" ? "text-green-400" : ""}`} onClick={() => setMenuOpen(false)}>{t("header.S'authentifier")}</Link>
            <div className="flex justify-center gap-4 mt-4">
              <button onClick={() => changeLanguage('en')} className="text-sm text-gray-300 hover:text-white">English</button>
              <button onClick={() => changeLanguage('fr')} className="text-sm text-gray-300 hover:text-white">Français</button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
