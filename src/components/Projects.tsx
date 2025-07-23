import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Amazon – E-commerce Frontend Web Application',
      description: 'Developed a responsive and interactive e-commerce web application replicating the core UI and features of Amazon.Builtstatic and dynamic sections including product grids, category menus, and a cart UI using vanilla JavaScript.Ensured cross-browser compatibility and mobile responsiveness using media queries and modern CSS techniques.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      github: 'https://github.com/potnurumounika-123/FUTURE_FS_02',
    },
    {
      title: 'FreshMart - Online Grocery Delivery Website',
      description: `Developed a static clone of the FreshMart platform with a pixel-perfect and responsive user interface using HTML andCSS.Implemented core interactive elements including a functional navigation bar, product listing grid, search bar simulation,and cart animations using vanilla JavaScript. Designed mobile-first layouts with media queries to ensure smooth responsiveness across devices.`,
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
      github: 'https://github.com',
    },
    {
      title: 'Saviour Blood Connect - Java | Console-based Application',
      description: 'Developed a backend console-level application to manage blood donation and request system. Implemented donor and recipient registration, blood inventory management, and request processing.Applied object-oriented programming (OOP) concepts and modular design for maintainability.',
      technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/potnurumounika-123',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-gray-800 relative overflow-hidden"
      animate={{
        y: [0, -16, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}></div>
        
        {/* Dynamic Background Animation */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(75, 0, 130, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(128, 0, 128, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-24 h-24 bg-purple-950/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          rotate: [0, -8, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-36 h-36 bg-purple-950/25 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 25, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/4 w-20 h-20 bg-indigo-950/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
          rotate: [0, -12, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-violet-950/25 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Featured </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies and user-centered design
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </motion.section>
  );
};

export default Projects;