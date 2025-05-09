import { Project, Skill, Experience, SocialLink } from './types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Refonte du site web Louis Julian',
    description: 'Création d\'un site e-commerce pour une bijouterie de luxe.',
    tags: ['laravel', 'VueJs', 'Bootstrap'],
    imageUrl: '/assets/Louis julian.png',
    demoUrl: 'https://www.bijouterie-julian.com/',
    details: {
      overview: 'Refonte complèter de l\'ancien site web de la bijoueterie avec l\'ajout d\'un dashboard entièrement personnalisé',
      challenges: 'Je n\avais aucune connaissance de PHP ni de VueJS mais j\'ai sû m\'adapter très rapidement afin de devenir opérationnel sur le projet',
      solutions: '',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API', 'JWT', 'Redis'],
      highlights: [
        
      ],
      gallery: [
       '/assets/Louis julian.png',
        '/assets/Louis julian 2.png',
        '/assets/Louis julian 3.png',
      ]
    }
  },
  {
    id: 'project-2',
    title: 'Planet ygo',
    description: 'Site web collaboratif à destination de la communauté compétitive du jeu de carte Yu-Gi-Oh',
    tags: ['Wix'],
    imageUrl: '/assets/planet ygo.png',
    demoUrl: 'https://www.planetygo.fr/wiki',
    details: {
      overview: 'Site collaboratif réalisé avec un influenceur compétitif yu-gi-oh ! Gabriel Soussi.',
      challenges: 'Créer un site web qui répertorie les classements ainsi que le contenu des influenceurs Yu-Gi-Oh! réalisé avec le CMS Wix.',
      solutions: '',
      technologies: ['Wix'],
      highlights: [
      
      ],
      gallery: [
        '/assets/planet ygo.png',
        '/assets/planet ygo 2.png',
        '/assets/planet ygo 3.png',
      ]
    }
  },
  {
    id: 'project-3',
    title: 'Pilot-in landing page',
    description: 'Page d\'accueil du site web Polit\'in réalisé lors d\'un test technique.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: '/assets/Pilotin.png',
    demoUrl: 'https://pilot-in-test.vercel.app/#!',
    details: {
      overview: 'Une page d\'accueil réalisée avec HTML CSS et Javascript',
      challenges: 'Intégrer la page d\'accueil complète en 4h',
      solutions: '',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Geolocation API', 'LocalStorage', 'CSS Grid'],
      highlights: [
        
      ],
      gallery: [
        '/assets/Pilotin.png',
        
      ]
    }
  },
  {
    id: 'project-4',
    title: 'Les Audacieuses Académie',
    description: 'Site vitrine réalisée lors du My Digital Project',
    tags: ['Wordpress Elementor'],
    imageUrl: '/assets/audacieuse.png',
    demoUrl: 'https://romain-bernardot.mds-nancy.yt/',
    details: {
      overview: 'Un site vitrine complet pour notre cliente lors du My Digital Project.',
      challenges: 'Intégrer un site vitrine avec l\'outil Wordpress Elementor',
      solutions: '',
      technologies: ['Wordpress Elementor'],
      highlights: [
        
      ],
      gallery: [
        '/assets/audacieuse.png',
        '/assets/audacieuse 2.png',
        '/assets/audacieuse 3.png'
        
      ]
    }
  },
  {
    id: 'project-5',
    title: 'Top ou Flop',
    description: 'Projet podcast d\'une quizaine de minutes réalisé au sein de My Digital School. Le sujet était Le chat by Mistral.',
    tags: ['Premiere Pro', 'After Effect'],
    imageUrl: '/assets/mockup-topouflop-desktop.png',
    demoUrl: '',
    details: {
      overview: 'Une expérience très enrichissante, qui m\'a permis de découvrir l\'IA mistral et de développer mes compétences de montage vidéo & animation',
      challenges: 'Enregistrer un podcast, écrire le script et tourner.',
      solutions: '',
      technologies: ['Premiere Pro', 'After Effect'],
      highlights: [
        
      ],
      gallery: [
        '/assets/mockup-topouflop-desktop.png',
        
      ]
    }
  },
  {
    id: 'project-6',
    title: 'L\Expert Fenêtre - Isolation et Habitat',
    description: 'J\'ai réalisé mon alternance chez L\'Expert Fenêtre (entreprise spécialisée dans la vente et la pose de menuiseries) en tant que web designer / community manager. J\'ai appris à utiliser la suite adobe pour réaliser des visuels/vidéos ...',
    tags: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: '/assets/expert fenetre site.png',
    demoUrl: 'https://www.lexpert-fenetre-54.com/',
    details: {
      overview: 'L\'alternance a été une expérience très enrichissante. J\'ai appris énormément au niveau design et UI UX ce que va me permettre de développer un sens du design et le l\'interface bien plus aiguisé.',
      challenges: 'Intégrer la page d\'accueil complète en 4h',
      solutions: 'Built a unified data adapter layer to normalize data from different APIs. Used Chart.js with custom configurations for weather-specific visualizations.',
      technologies: ['Suite Adobe', 'Notion', ' Meta Business', 'Espace pro fournisseurs'],
      highlights: [
        
      ],
      gallery: [
        '/assets/expert fenetre site.png',
        '/assets/visuel ksm.jpg',
        '/assets/visuel avant apres.jpg',
        
      ]
    }
  }
];

export const skills: Skill[] = [
  { name: 'HTML5', icon: 'html', category: 'frontend' },
  { name: 'CSS3', icon: 'css', category: 'frontend' },
  { name: 'JavaScript', icon: 'code', category: 'frontend' },
  { name: 'TypeScript', icon: 'file-code', category: 'frontend' },
  { name: 'React', icon: 'atom', category: 'frontend' },
  { name: 'Vue.js', icon: 'code-2', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'wind', category: 'frontend' },
  { name: 'Figma', icon: 'pen-tool', category: 'design' },
  { name: 'Illustrator', icon: 'photoshop', category: 'design' },
  { name: 'Photoshop', icon: 'pen-tool', category: 'design' },
  { name: 'After Effect', icon: 'photoshop', category: 'design' },
  { name: 'Premiere Pro', icon: 'pen-tool', category: 'design' },
];

export const experiences: Experience[] = [
  {
    title: 'Web Designer - Community Manager',
    company: 'L\'Expert Fenêtre Isolation & Habitat',
    period: 'Nov 2024 - Present',
    description: 'Gestion des réseaux sociaux. Création de visuels, calendrier éditorial, gestion avis clients...',
    tags: ['Réseaux sociaux', 'Developpement ', 'Design', 'Communication']
  },
  {
    title: 'Développeur Frontend',
    company: 'Flippad',
    period: 'Jan 2024 - Nov 2024',
    description: 'Refonte complète d\'un site web en Laravel + vueJs. Je me suis occupé de 100% du front-end.',
    tags: ['JavaScript', 'Vue.js', 'SCSS', 'Node.js']
  },
  {
    title: 'Développeur Frontend',
    company: 'Openclassrooms',
    period: '2022',
    description: 'Formation avec projet type entreprise dans le développement web (html css js & react).',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React']
  },
  {
    title: 'Dessinateur projeteur',
    company: 'Openclassrooms',
    period: '2018-2021',
    description: 'Prestataire de service en tant que dessinateur industriel pour de la protection de sites sensibles.',
    tags: ['Autocad', 'Solidworks']
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Raivals', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/romain-b-developer/', icon: 'linkedin' },
  // { name: 'Twitter', url: 'https://twitter.com/', icon: 'twitter' },
  // { name: 'Email', url: 'mailto:example@example.com', icon: 'mail' }
];

export const personalInfo = {
  name: 'Romain BERNARDOT',
  title: 'Développeur Web et Web Designer',
  location: 'Nancy, France',
  bio: ' "Etudiant en licence de web design. Je suis passioné par l\'expérience utilisateur et le design interactif. J\'allie ma créativité et mes compétences techniques en développement front-end pour concevoir des interfaces modernes et performantes. Je suis prêt à relever plus de défis, et donner vie à vos projets."'
};