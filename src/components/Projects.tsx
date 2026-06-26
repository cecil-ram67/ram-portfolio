import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "FinCore: Distributed Banking & ATM Microservice",
      image: "https://images.unsplash.com/photo-1616803140344-6682afb13cda?q=80&w=800&auto=format&fit=crop",
      problem: "Traditional monolithic banking systems struggle with scale and high transaction volumes.",
      architecture: "Microservices architecture utilizing Spring Boot and REST APIs.",
      features: [
        "Account creation, deposits, withdrawals, fund transfers, and balance enquiries.",
        "Secure authentication using JWT.",
        "Maintained transaction records with audit logging."
      ],
      techStack: ["Java", "Spring Boot", "REST APIs", "JWT", "Redis"],
      challenges: "Integrated Redis caching to significantly improve application performance and data retrieval speeds.",
      githubUrl: "https://github.com/cecil-ram67",
      demoUrl: "#"
    },
    {
      title: "PayStream: Real-Time Payment Processing Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      problem: "Need for a robust system to handle real-time payment events reliably.",
      architecture: "Event-driven architecture for decoupled services.",
      features: [
        "Payment confirmations, refunds, and notification services modules.",
        "Reliable message processing and error handling mechanisms for payment workflows.",
      ],
      techStack: ["Java", "Spring Boot", "Apache Kafka", "Event-Driven Architecture"],
      challenges: "Built event-driven payment services using Apache Kafka to ensure message reliability and fault tolerance.",
      githubUrl: "https://github.com/cecil-ram67",
      demoUrl: "#"
    },
    {
      title: "RideMate: Bike Pooling Platform",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
      problem: "Lack of efficient commuting solutions for short-distance daily travelers.",
      architecture: "Client-Server architecture with robust backend APIs.",
      features: [
        "User registration and role management (Rider/Driver).",
        "Trip scheduling and matching logic.",
        "Fare calculation and ride history tracking."
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "Hibernate"],
      challenges: "Implementing scalable matchmaking algorithms and real-time trip status updates.",
      githubUrl: "https://github.com/cecil-ram67",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1 leading-tight">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Problem</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{project.problem}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center">
                    <FaServer className="mr-2" /> Architecture
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{project.architecture}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 text-sm space-y-1">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Challenges Solved</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{project.challenges}</p>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    <FaGithub className="mr-2" size={18} />
                    GitHub
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="mr-2" size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
