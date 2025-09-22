import { motion } from "framer-motion";
import { useRef } from "react";
import instagram from "./photos/instagram.png";
import facebook from "./photos/facebook.png";
import linkedin from "./photos/linkedin.png";
import { useTranslation } from 'react-i18next';
export default function Contact({contactRef}) {
    const { t, i18n } = useTranslation();
    return (
        <section 
            id="contact" 
            ref={contactRef} 
            className="py-20 px-4 md:px-10 min-h-screen flex flex-col items-center justify-start bg-gray-900"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold mb-3">{t('contact.title')}</h2>
                <div className="h-1 w-20 bg-green-400 mx-auto"></div>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    {t('contact.paragraph')}
                </p>
            </motion.div>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Informations de contact */}
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-400 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm">{t('contact.phone')}</h3>
                            <p className="text-gray-300">+212 660 849 356</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-400 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm">Email</h3>
                            <p className="text-gray-300">amineelidrissi190@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-400 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm">{t('contact.address')}</h3>
                            <p className="text-gray-300">N 203 ETG 01 LOT NAIM 02 MEKNES</p>
                        </div>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="pt-6">
                        <h3 className="font-medium text-sm mb-3">{t('contact.pparagraph')}</h3>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.instagram.com/amine__el_idrissi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                            >
                                <img src={instagram} alt="Instagram" className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.facebook.com/amine.idrissi.145689/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                            >
                                <img src={facebook} alt="Facebook" className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.linkedin.com/in/amine-el-idrissi-027046283/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                            >
                                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Formulaire de contact */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        // Handle form submission logic here 
                        alert("Votre message a été envoyé!");
                        // Reset form fields
                        e.target.reset();
                    }}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">{t('contact.name')}</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
                                placeholder={t('contact.placeHoldername')}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
                                placeholder={t('contact.placeHolderemail')}
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-1">{t('contact.Sujet')}</label>
                            <input
                                type="text"
                                id="subject"
                                required
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
                                placeholder={t('contact.placeholdersujet')}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                required
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors resize-none"
                                placeholder={t('contact.placeholdermesage')}
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                        >
                            <span>{t('contact.send')}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}