import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaServer, FaDatabase, FaDocker } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a dedicated <strong className="text-slate-900 dark:text-white">Java Backend Engineer</strong> with experience in developing robust backend services and REST APIs. My expertise lies in designing scalable applications using Java and the Spring Boot ecosystem.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I have hands-on experience building microservices, working with SQL/NoSQL databases, and implementing JWT authentication. I'm passionate about writing clean, maintainable code and optimizing system performance.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether it's building Learning Management Systems (LMS) or financial platform services in Agile environments, I thrive on solving complex backend challenges and delivering reliable software solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <FaJava size={32} />, title: "Java / Spring", desc: "Core language & framework" },
              { icon: <FaServer size={32} />, title: "Microservices", desc: "Distributed architecture" },
              { icon: <FaDatabase size={32} />, title: "Databases", desc: "SQL & NoSQL optimization" },
              { icon: <FaDocker size={32} />, title: "Deployment", desc: "Docker & CI/CD" }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
