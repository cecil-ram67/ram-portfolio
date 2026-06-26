import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Software Engineer I",
      company: "NetM Corp Solutions – Ferilion Labs",
      duration: "Oct 2025 – Mar 2026",
      location: "Bangalore, India",
      description: "Developed and maintained RESTful backend services using Java and Spring Boot for Financial and Learning Management System (LMS) platforms.",
      projects: [
        {
          name: "Learning Management System (LMS)",
          details: [
            "Designed APIs for course management, user registration, authentication, and role-based access for students and administrators.",
            "Implemented modules for course enrollment, assignment tracking, and progress monitoring within the LMS application.",
          ]
        },
        {
          name: "Database & Performance Optimization",
          details: [
            "Integrated MySQL databases and optimized SQL queries to improve application performance and data retrieval.",
          ]
        },
        {
          name: "Agile & Collaboration",
          details: [
            "Collaborated with frontend and QA teams to deliver new features and resolve production issues in Agile sprints.",
            "Prepared API documentation using Swagger and participated in code reviews and deployment activities.",
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative md:pl-10 pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] md:-left-[11px] top-1.5 border-4 border-white dark:border-slate-900 shadow"></div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">
                      <FaBriefcase className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 flex flex-col md:items-end">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {exp.duration}
                    </span>
                    <span className="text-sm mt-1">{exp.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                  {exp.description}
                </p>

                <div className="space-y-6">
                  {exp.projects.map((proj, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {proj.name}
                      </h4>
                      <ul className="list-none space-y-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700 ml-1">
                        {proj.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-slate-600 dark:text-slate-400 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-[1px] before:bg-slate-400 dark:before:bg-slate-500">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
