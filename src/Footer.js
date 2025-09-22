import instagram from "./photos/instagram.png";
import facebook from "./photos/facebook.png";
import linkedin from "./photos/linkedin.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { footer } from "framer-motion/client";
export default function Footer() {
    const { t, i18n } = useTranslation();
    return <footer className="bg-gray-900 border-t border-gray-800 py-10 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="text-center md:text-left">
                    <p className="font-bold text-sm text-green-400 mb-2">{"<Amine/>"}</p>
                    <p className="text-sm text-gray-400">{t("footer.paragraph1")}</p>
                    <p className="text-sm text-gray-400">{t("footer.paragraph2")}</p>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <div className="flex space-x-4 mb-4">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="#"
                            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                        >
                            <img src={instagram} alt="Instagram" className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="#"
                            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                        >
                            <img src={facebook} alt="Facebook" className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="#"
                            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                        >
                            <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
                        </motion.a>
                    </div>
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Amine El idrissi. {t("footer.rights")}</p>
                </div>
            </div>
        </div>
    </footer>
}