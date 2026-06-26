import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-600 dark:text-blue-500 font-semibold tracking-wider uppercase mb-3">
            Hello, I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Seetharam <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Gundlamadugu
            </span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6">
            Java Backend Engineer
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Developing scalable backend services and REST APIs using Java and Spring Boot. Passionate about microservices, databases, and building robust systems.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/SeethaRam_G_Backend_Java.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Download Resume
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 font-medium rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              View Projects
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/cecil-ram67"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/seetharam-g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:seetharamg17@gmail.com"
              className="text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              {/* Profile Image */}
              <img
                src="/profile.jpg"
                alt="Seetharam Gundlamadugu"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
