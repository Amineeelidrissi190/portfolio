import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Liste des langues disponibles
  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Changer de langue et fermer le dropdown
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setDropdownOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center text-white hover:text-green-400 transition-all p-2 rounded-full"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="Change language"
      >
        {/* Globe SVG Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="feather feather-globe"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className="ml-1 text-sm font-medium">{i18n.language.toUpperCase()}</span>
      </button>
      
      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${
                i18n.language === lang.code ? 'font-medium text-green-600' : 'text-gray-700'
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;