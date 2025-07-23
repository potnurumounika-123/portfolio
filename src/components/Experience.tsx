import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with design team to implement pixel-perfect UI/UX',
        'Optimized database queries resulting in 50% performance improvement',
        'Integrated third-party APIs and payment gateways',
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe API'],
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      description: [
        'Built responsive web applications using modern JavaScript frameworks',
        'Implemented real-time features using WebSocket connections',
        'Collaborated with backend team to design RESTful APIs',
        'Participated in agile development processes and code reviews',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Socket.io'],
    },
    {
      title: 'Junior Web Developer',
      company: 'WebCraft Agency',
      description: [
        'Developed custom WordPress themes and plugins',
        'Created responsive websites for small to medium businesses',
        'Learned modern web development practices and tools',
        'Contributed to open-source projects and community initiatives',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-gray-900 relative overflow-hidden"
      animate={{
        y: [0, -14, 0],
      }}
      transition={{
        duration: 11,
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
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Work </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              My professional journey in software development, building innovative solutions and growing with amazing teams
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full hidden md:block transform -translate-x-1/2 mt-6"></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="md:ml-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-purple-400 mb-2">
                          <ExternalLink size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center text-gray-400">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-3 mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
