import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect, useRef } from "react";
import firstp from "./photos/firstp.png";
import ph1 from "./photos/ph1.png";
import { useTranslation } from "react-i18next";
function Main() {
  const [src, setSrc] = useState(firstp);
  const [size, setSize] = useState("w-80");
  const homeRef = useRef(null);
   const { t, i18n } = useTranslation();
   const downloadCV = () => {
    // Créer un lien vers le fichier CV dans le dossier public
    const link = document.createElement('a');
    link.href = '/Amine El idrissi cv.pdf'; // Chemin vers le fichier dans le dossier public
    link.download = 'Amine El idrissi cv.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Liste des tags à animer
  const codeTags = [
    { text: "<compiling />", color: "text-pink-400" },
    { text: "<testing />", color: "text-purple-400" },
    { text: "<deploying />", color: "text-red-400" },
    { text: "<learning />", color: "text-cyan-300" },
    { text: "<debugging />", color: "text-yellow-300" },
    { text: "<coding />", color: "text-green-400" }
  ];

  // Compétences
  const skills = [
    { name: "HTML / CSS / Tailwindcss", level: 90 },
    { name: "JavaScript / React", level: 85 },
    { name: "Node.js / Express js", level: 65 },
    { name: "PHP / MVC", level: 70 },
    { name: "MongoDB / MySQL", level: 85 },
    { name: "Laravel / Livewire", level: 90 },
    { name: "Git / GitHub", level: 90 },
    { name: "Python basics / OOP", level: 90 },
    { name: "Java basics / OOP", level: 90 },
  ];
  const generateRandomTags = () => {
    return codeTags.map((tag) => {
      const randomX = Math.floor(Math.random() * 80) - 40; 
      const randomY = Math.floor(Math.random() * 80) - 40; 
      
      // Animations aléatoires
      const animX = [
        randomX, 
        randomX + Math.random() * 60 - 30,
        randomX + Math.random() * 60 - 30,
        randomX
      ];
      
      const animY = [
        randomY,
        randomY + Math.random() * 60 - 30,
        randomY + Math.random() * 60 - 30,
        randomY
      ];
      
      // Durée aléatoire entre 10 et 20 secondes (animations plus lentes)
      const duration = 10 + Math.random() * 10;
      
      return {
        ...tag,
        initialX: randomX,
        initialY: randomY,
        animX,
        animY,
        duration,
        delay: Math.random() * 2, // Delay aléatoire pour ne pas tout démarrer en même temps
      };
    });
  };

  const [randomTags, setRandomTags] = useState([]);

  useEffect(() => {
    setRandomTags(generateRandomTags());
  }, []);

  const handleImageHover = () => {
    setSrc(ph1);
    setSize("w-80 md:w-96");
  };

  const handleImageLeave = () => {
    setSrc(firstp);
    setSize("w-80");
  };

  return (
    <main id="home" ref={homeRef} className="flex flex-col-reverse md:flex-row items-center justify-evenly min-h-screen relative overflow-hidden">
      {/* Animated Tags distribués aléatoirement */}
      {randomTags.slice(0, 8).map((tag, index) => (
        <motion.div
          key={index}
          className={`${tag.color} font-mono text-sm md:text-sm absolute z-0 opacity-50 select-none`}
          style={{ 
            left: '50%',
            top: '50%'
          }}
          initial={{ 
            x: tag.initialX + 'vw', 
            y: tag.initialY + 'vh',
            opacity: 0.4
          }}
          animate={{ 
            x: tag.animX.map(x => x + 'vw'),
            y: tag.animY.map(y => y + 'vh'),
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: tag.duration, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: tag.delay,
            ease: "easeInOut"
          }}
        >
          {tag.text}
        </motion.div>
      ))}

      {/* Contenu principal */}
      <motion.div
        className="w-full md:w-1/2 space-y-1 z-10 text-start relative p-3"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-xs hidden md:flex md:text-sm text-green-400 font-mono">
          <Typewriter
            words={[t('main.title1'), t('main.title2'), t('main.title3'), t('main.title4')]}

            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-gray-300 hidden md:flex md:text-sm">{t('main.description')}</p>

        {/* Barre de compétences animées */}
        <div className="">
          <h3 className="text-sm md:mt-0 mt-10 font-semibold mb-3">{t('main.skills')}</h3>
          <div className="space-y-1">
            {skills.map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-xs md:text-sm">{skill.name}</span>
                  <span className="text-sm text-green-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-500 to-green-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 mt-4">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/212660849356"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition duration-300 inline-flex items-center space-x-2 text-sm md:text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.2 282.2 32 224 32c-123.5 0-224 100.5-224 224 0 39.6 10.2 78.4 29.5 112.5L0 480l113.6-29.5c32.8 17.9 69.8 27.5 110.4 27.5h.1c123.5 0 224-100.5 224-224 0-58.2-23.2-115-65.2-157zm-156.9 320c-35.3 0-69.9-9.5-100-27.4l-7.2-4.3-67.3 17.5 18-65.6-4.7-7.5C46 297.7 36.4 261.4 36.4 224c0-103.2 84.4-187.6 187.6-187.6 50.1 0 97.2 19.5 132.7 55s55 82.6 55 132.7c0 103.2-84.4 187.6-187.7 187.6zm101.2-138.9c-5.5-2.8-32.5-16-37.5-17.8-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 17.8-17.5 21.5c-3.2 3.7-6.4 4.2-11.9 1.4s-23.2-8.5-44.2-27.1c-16.4-14.6-27.5-32.7-30.7-38.2-3.2-5.5-.3-8.4 2.4-11.2 2.5-2.5 5.5-6.4 8.3-9.6 2.8-3.2 3.7-5.5 5.5-9.2s.9-6.9-.5-9.7c-1.4-2.8-12.5-30-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.4s19.9 53.8 22.7 57.5c2.8 3.7 39.1 59.6 94.8 83.6 13.2 5.7 23.5 9.1 31.5 11.7 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.5-13.3 37.1-26.1 4.6-12.8 4.6-23.7 3.2-26.1-1.3-2.4-5-3.8-10.5-6.6z" />
              </svg>
              <span>{t('main.button1')}</span>
            </a>
            <button onClick={downloadCV} className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-5 py-2 rounded-full transition duration-300 inline-flex items-center space-x-2 text-sm md:text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{t('main.button2')}</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Image animée */}
      <motion.div 
        className="relative z-10 mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={src}
          alt="Amine"
          className={`${size} rounded-full border-4 border-green-400/30 shadow-lg shadow-green-400/20 transition-all duration-300`}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
        <motion.div 
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-30 blur-sm -z-10"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </main>
  );
}

export default Main;