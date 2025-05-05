import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data';

const Experience: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Expériences Professionnelles</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Voici les chemins professionnels que j'ai emprunté.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform md:translate-x-[-50%] hidden md:block"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row mb-12 last:mb-0 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot - only visible on medium screens and up */}
              <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 z-10 mt-0 md:mt-6 hidden md:block"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg relative">
                  {/* Card triangle connector - hidden on mobile */}
                  <div 
                    className={`absolute top-6 h-4 w-4 bg-gray-800 transform rotate-45 hidden md:block
                      ${index % 2 === 0 ? 'left-[-8px]' : 'right-[-8px]'}`}
                  ></div>
                  
                  {/* Icon - visible only on mobile */}
                  <div className="flex items-center mb-4 md:hidden">
                    <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                      <Briefcase size={20} className="text-blue-400" />
                    </div>
                    <span className="text-gray-400 text-sm">{experience.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{experience.title}</h3>
                  <h4 className="text-blue-400 mb-2">{experience.company}</h4>
                  
                  {/* Period - hidden on mobile */}
                  <p className="text-gray-400 text-sm mb-4 hidden md:block">{experience.period}</p>
                  
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-700 text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty div for layout */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;