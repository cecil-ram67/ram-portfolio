import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiSpring, SiSpringboot, SiSpringsecurity, SiHibernate, 
  SiMysql, SiPostgresql, SiMongodb, SiRedis, 
  SiApachekafka, SiDocker, SiPostman, SiSwagger, SiLinux 
} from 'react-icons/si';
import { FaJava, FaGitAlt } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: <FaJava color="#007396" />, level: 90 },
      { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" />, level: 85 },
      { name: "Spring MVC", icon: <SiSpring color="#6DB33F" />, level: 80 },
      { name: "Spring Security", icon: <SiSpringsecurity color="#6DB33F" />, level: 75 },
      { name: "Hibernate", icon: <SiHibernate color="#59666C" />, level: 80 },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" />, level: 70 },
      { name: "Redis", icon: <SiRedis color="#DC382D" />, level: 75 },
    ]
  },
  {
    title: "Messaging & APIs",
    skills: [
      { name: "Apache Kafka", icon: <SiApachekafka color="#231F20" className="dark:text-white" />, level: 70 },
      { name: "REST APIs", icon: <TbApi color="#005571" className="dark:text-blue-400" />, level: 90 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" />, level: 85 },
      { name: "Docker", icon: <SiDocker color="#2496ED" />, level: 75 },
      { name: "Postman", icon: <SiPostman color="#FF6C37" />, level: 90 },
      { name: "Swagger", icon: <SiSwagger color="#85EA2D" />, level: 85 },
      { name: "Linux", icon: <SiLinux color="#FCC624" />, level: 70 },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                        className="bg-blue-500 dark:bg-blue-600 h-1.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
