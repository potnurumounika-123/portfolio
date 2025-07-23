import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    institution: 'CHALAPATHI INSTITUTE OF ENGINEERING AND TECHNOLOGY',
    degree: 'B.Tech',
    branch: 'COMPUTER SCIENCE AND ENGINEERING (CYBER SECURITY)',
    period: 'Oct 2022 – Mar 2026',
    gpa: '8.60/10',
    location: 'Guntur, Andhra Pradesh',
    highlights: [
      'Specialized in Cybersecurity with focus on ethical hacking and network security',
      'Maintained excellent academic performance with 8.60 GPA',
      'Active participation in coding competitions and technical events',
      'Completed projects in web development and security analysis',
    ],
  };

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
      id="education" 
      className="py-20 bg-gray-800 relative overflow-hidden"
      animate={{
        y: [0, -11, 0],
      }}
      transition={{
        duration: 15,
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
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Academic foundation in Computer Science with specialization in Cybersecurity
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {education.institution}
                    </h3>
                    <div className="text-purple-400 font-medium mb-2">
                      {education.degree} - {education.branch}
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-500/30">
                      <Award size={16} className="text-purple-400 mr-2" />
                      <span className="text-purple-300 font-medium">GPA: {education.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                  {education.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-start"
                    >
                      <span className="text-purple-400 mr-3 mt-2">•</span>
                      <span className="text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Graduating March 2026
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;