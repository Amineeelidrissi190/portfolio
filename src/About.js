import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
function About({ aboutRef }) {  // Changed parameter name to match App.jsx
  const [randomTags, setRandomTags] = useState([]);
const { t, i18n } = useTranslation();
  // Liste des tags à animer
  const codeTags = [
    { text: "<login />", color: "text-pink-400" },
    { text: "<secure />", color: "text-purple-400" },
    { text: "<connect />", color: "text-red-400" },
    { text: "<access />", color: "text-cyan-300" },
    { text: "<authenticate />", color: "text-yellow-300" },
    { text: "<welcome />", color: "text-green-400" }
  ];

  // Générer des positions initiales aléatoires pour chaque tag
  const generateRandomTags = () => {
    return codeTags.map((tag) => {
      const randomX = Math.floor(Math.random() * 80) - 40;
      const randomY = Math.floor(Math.random() * 80) - 40;

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

      const duration = 10 + Math.random() * 10;

      return {
        ...tag,
        initialX: randomX,
        initialY: randomY,
        animX,
        animY,
        duration,
        delay: Math.random() * 2,
      };
    });
  };

  useEffect(() => {
    setRandomTags(generateRandomTags());
  }, []);

  return (
    <div ref={aboutRef} id="about" className="flex items-center justify-center min-h-screen relative overflow-hidden bg-gray-900">
      {/* Animated Tags distribués aléatoirement */}
      {randomTags.map((tag, index) => (
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

      <motion.div
        className="z-10 w-11/12 md:w-1/2 p-4 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-400/20 shadow-lg shadow-green-400/10">
          <div className="mb-6 text-center">
            <p className="text-xs text-green-400 font-mono mb-4">
              <Typewriter
                words={[t('auth.word1'), t('auth.word2'), t('auth.word3')]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>

          {/* Bio section avec Typewriter */}
          <motion.div
            className="text-white text-sm mb-6 px-2 py-4 bg-gray-900/50 rounded-lg border border-green-400/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-lg font-bold text-green-400 mb-3 text-center">{t('about.title')}</h2>
            <p className="mb-4 flex flex-col space-y-3 text-gray-300">
              <span>{t('about.description')}</span>
            </p>
          </motion.div>
        </div>

        {/* Effet de lueur */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 opacity-20 rounded-xl blur-xl -z-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

export default About;