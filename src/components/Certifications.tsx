import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';

const Certifications: React.FC = () => {
  const certs = [
    {
      title: "Java Full Stack Certification",
      issuer: "ThopsTech",
      icon: <FaAward size={40} className="text-yellow-500" />
    },
    {
      title: "Introduction to Data Concepts",
      issuer: "IBM SkillsBuild",
      icon: <FaCertificate size={40} className="text-blue-500" />
    },
    {
      title: "Overview of Data Tools and Languages",
      issuer: "IBM SkillsBuild",
      icon: <FaCertificate size={40} className="text-blue-500" />
    },
    {
      title: "SQL Gold Badge",
      issuer: "HackerRank",
      icon: <FaAward size={40} className="text-yellow-400" />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-full group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
