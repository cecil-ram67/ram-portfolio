import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-900 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="text-2xl font-bold tracking-tighter cursor-pointer text-slate-900 dark:text-white inline-block mb-2"
            >
              <span className="text-blue-600 dark:text-blue-500">Seetharam</span>.
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Java Backend Engineer from Bangalore, India.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/cecil-ram67" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/seetharam-g-81b241352/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:seetharamg17@gmail.com" className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
              &copy; {currentYear} Seetharam Gundlamadugu. <br className="md:hidden" /> All rights reserved.
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-xs">
              Built with React & Tailwind CSS.
            </p>
          </div>

        </div>
      </div>

      <Link 
        to="home" 
        smooth={true} 
        duration={500}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={20} />
      </Link>
    </footer>
  );
};

export default Footer;
