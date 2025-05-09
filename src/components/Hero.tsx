import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../data';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 z-0"></div>
      
      {/* Animated shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 z-10 text-center"
      >
        <motion.h1 
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.h2 
          variants={item}
          className="text-2xl md:text-3xl text-white font-light mb-8"
        >
          {personalInfo.title}
        </motion.h2>
        
        <motion.p 
          variants={item}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
        >
          {personalInfo.bio}
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex justify-center space-x-6 mb-16"
        >
          {socialLinks.map((link, index) => {
            let Icon;
            switch (link.icon) {
              case 'github':
                Icon = Github;
                break;
              case 'linkedin':
                Icon = Linkedin;
                break;
              case 'twitter':
                Icon = Twitter;
                break;
              case 'mail':
                Icon = Mail;
                break;
              default:
                Icon = Github;
            }
            
            return (
              <motion.a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.name}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>
        
        <motion.a
          variants={item}
          href="#about"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
          aria-label="Scroll down"
          whileHover={{ y: 5 }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;