import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Code2, Database, Wind, Server, 
  Flame, PenTool, AtomIcon, GitBranch, Box, FileCode, Cpu
} from 'lucide-react';
import { skills } from '../data';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'html':
        return <Code size={24} />;
      case 'css':
        return <Code2 size={24} />;
      case 'code':
        return <Code size={24} />;
      case 'file-code':
        return <FileCode size={24} />;
      case 'database':
        return <Database size={24} />;
      case 'server':
        return <Server size={24} />;
      case 'wind':
        return <Wind size={24} />;
      case 'flame':
        return <Flame size={24} />;
      case 'pen-tool':
        return <PenTool size={24} />;
      case 'atom':
        return <AtomIcon size={24} />;
      case 'git-branch':
        return <GitBranch size={24} />;
      case 'box':
        return <Box size={24} />;
      default:
        return <Cpu size={24} />;
    }
  };

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    other: 'Tools & Others'
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Mes compétences</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Voici les compétences que je maîtrise pour le moment.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                {categories[category as keyof typeof categories]}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categorySkills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    <div className="text-blue-400 mb-3">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="text-gray-200 text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;