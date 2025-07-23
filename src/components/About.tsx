import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Expertise in modern web technologies and best practices',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Developing applications with mobile-first approach',
    },
  ];

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gray-900 relative overflow-hidden"
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 9,
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
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate Full Stack Developer
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a dedicated full stack developer with a passion for creating innovative 
                web solutions. With expertise in both frontend and backend technologies, 
                I enjoy building applications that not only look great but also provide 
                exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My journey in software development has equipped me with a diverse skill set 
                and the ability to adapt to new technologies quickly. I believe in writing 
                clean, maintainable code and following best practices to deliver high-quality solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Let's Build Something Amazing
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;