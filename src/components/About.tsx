import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import { personalInfo } from '../data';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-2 text-center"
          >
            A propos de moi
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1 bg-blue-500 mx-auto mb-12"
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              className="col-span-1"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin size={18} className="mr-2 text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                
                
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="col-span-1 md:col-span-2"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Qui suis-je ? 
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
              J'ai actuellement 27 ans, je cherche de nouvelles opportunités dans la région lyonnaise en tant developpeur front-end ou web designer.
              </p>
              
    
              
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Me contacter
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;