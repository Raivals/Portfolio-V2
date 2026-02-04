import { Project, Skill, Experience, SocialLink } from './types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Refonte du site web Louis Julian',
    description: 'Refonte complète et développement d’un site e-commerce premium pour une bijouterie de luxe, avec back-office sur-mesure pour la gestion des produits, commandes et contenus.',
    tags: ['laravel', 'VueJs', 'Bootstrap'],
    imageUrl: '/assets/Louis julian.png',
    demoUrl: 'https://www.bijouterie-julian.com/',
    details: {
      overview: 'Refonte totale de l’ancien site de la bijouterie Louis Julian afin de moderniser son image, améliorer l’expérience utilisateur et augmenter les performances commerciales. Le projet inclut un site e-commerce complet et un dashboard personnalisé permettant au client de gérer son activité en toute autonomie.',
      challenges: 'Je n’avais aucune expérience préalable en PHP ni en Vue.js. J’ai dû monter rapidement en compétence afin d’être pleinement opérationnel sur un projet e-commerce complexe, impliquant gestion des paiements, sécurité et interface d’administration.',
      solutions: 'Auto-formation intensive, documentation, tests continus et itérations rapides. J’ai structuré le projet de manière modulaire afin de sécuriser les flux de données, fluidifier l’expérience utilisateur et garantir la stabilité de la plateforme.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API', 'JWT', 'Redis'],
      highlights: [
        'Développement d’un back-office personnalisé',
        'Intégration du paiement et gestion des commandes',
        'Refonte UX et optimisation du parcours d’achat',
        'Mise en production d’un site e-commerce fonctionnel',
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
    description: 'Plateforme communautaire dédiée à la scène compétitive Yu-Gi-Oh, centralisant classements, contenus d’influenceurs et ressources stratégiques.',
    tags: ['Wix'],
    imageUrl: '/assets/planet ygo.png',
    demoUrl: 'https://www.planetygo.fr/wiki',
    details: {
      overview: 'Site collaboratif conçu avec l’influenceur Gabriel Soussi afin de rassembler la communauté Yu-Gi-Oh autour de contenus compétitifs, statistiques, classements et guides.',
      challenges: 'Créer une plateforme claire et structurée à partir d’un CMS no-code (Wix) tout en gérant une forte quantité de contenus et une audience spécialisée.',
      solutions: 'Structuration de l’architecture de l’information, organisation des pages, création de templates cohérents et hiérarchisation des contenus pour garantir une navigation fluide.',
      technologies: ['Wix'],
      highlights: [
        'Collaboration avec un influenceur reconnu',
        'Structuration d’une base de données communautaire',
        'Optimisation de la lisibilité et de l’expérience utilisateur',
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
    description: 'Landing page développée lors d’un test technique, visant à démontrer mes compétences en intégration, UX et respect de contraintes de temps.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: '/assets/Pilotin.png',
    demoUrl: 'https://pilot-in-test.vercel.app/#!',
    details: {
      overview: 'Intégration complète d’une landing page responsive en HTML, CSS et JavaScript à partir d’une maquette fournie.',
      challenges: 'Reproduire fidèlement le design et les interactions en seulement 4 heures tout en assurant performance, lisibilité et compatibilité navigateurs.',
      solutions: 'Organisation du travail en sprints courts, priorisation des composants clés et développement modulaire pour garantir un rendu professionnel dans un délai serré.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      highlights: [
        'Intégration pixel-perfect',
        'Respect strict du timing',
        'Interface responsive et fluide',
      ],
      gallery: [
        '/assets/Pilotin.png',
      ]
    }
  },
  {
    id: 'project-4',
    title: 'Les Audacieuses Académie',
    description: 'Création complète d’un site vitrine avec une approche UI/UX structurée, du wireframe jusqu’à l’intégration WordPress.',
    tags: ['Wordpress Elementor, Figma'],
    imageUrl: 'assets/Audacieuses-1.png',
    details: {
      overview: 'Réalisation d’un site vitrine destiné à valoriser l’image et les offres de la cliente, en passant par une phase complète de recherche UX, design UI puis intégration WordPress.',
      challenges: 'Transformer une maquette Figma en site fonctionnel tout en conservant la cohérence graphique et l’expérience utilisateur.',
      solutions: 'Utilisation d’Elementor pour reproduire fidèlement le design, structuration claire des pages et optimisation de la navigation.',
      technologies: ['Wordpress Elementor'],
      highlights: [
        'Étude UX & UI complète',
        'Design moderne et professionnel',
        'Site administrable par la cliente'
      ],
      gallery: [
        '/assets/Audacieuses-1.png',
        '/assets/Audacieuses-2.png',
        '/assets/Audacieuses-3.png',
        
      ]
    }
  },
  {
    id: 'project-5',
    title: 'Top ou Flop',
    description: 'Podcast vidéo réalisé autour de l’IA Mistral, incluant écriture, tournage, montage et motion design.',
    tags: ['Premiere Pro', 'After Effect'],
    imageUrl: '/assets/mockup-topouflop-desktop.png',
    demoUrl: '',
    details: {
      overview: 'Projet audiovisuel réalisé dans le cadre de My Digital School, mêlant storytelling, vulgarisation et montage dynamique.',
      challenges: 'Gérer l’ensemble de la production : écriture du script, tournage, montage, habillage graphique et rythme.',
      solutions: 'Utilisation de Premiere Pro pour le montage et After Effects pour l’animation, afin de créer un contenu fluide, moderne et engageant.',
      technologies: ['Premiere Pro', 'After Effect'],
      highlights: [
        'Gestion complète de la production',
        'Motion design et montage avancé',
        'Travail de narration et de rythme',
      ],
      gallery: [
        '/assets/mockup-topouflop-desktop.png',
        
      ]
    }
  },
  {
    id: 'project-6',
    title: 'L\Expert Fenêtre - Isolation et Habitat',
    description: 'Alternance en tant que web designer et community manager pour une entreprise du bâtiment, avec création de contenus, gestion des réseaux et supports commerciaux.',
    tags: ['Suite Adobe', 'Notion', ' Meta Business', 'Espace pro fournisseurs'],
    imageUrl: '/assets/expert fenetre site.png',
    demoUrl: 'https://www.lexpert-fenetre-54.com/',
    details: {
      overview: 'Expérience complète mêlant design, communication et digital. J’ai contribué à la visibilité de l’entreprise via des supports graphiques, vidéos et une amélioration de l’image de marque.',
      challenges: 'Maintenir une communication cohérente tout en produisant régulièrement des contenus visuels attractifs.',
      solutions: 'Mise en place d’une organisation via Notion, création de templates graphiques et gestion centralisée des supports.',
      technologies: ['Suite Adobe', 'Notion', ' Meta Business', 'Espace pro fournisseurs'],
      highlights: [
        'Création de visuels marketing',
        'Gestion de la communication digitale',
        'Amélioration de l’image de marque',
      ],
      gallery: [
        '/assets/expert fenetre site.png',
        '/assets/visuel ksm.jpg',
        '/assets/visuel avant apres.jpg',
        
      ]
    }
  },
  {
    id: 'project-7',
    title: 'Hyper Planning',
    description: 'Projet UI/UX visant à repenser l’interface d’un outil de gestion de planning pour une expérience plus intuitive.',
    tags: ['Figma', 'Design UI/UX', 'Web Design'],
    imageUrl: '/public/assets/hpp-1.png',
    details: {
      overview: 'Travail de conception UX et UI autour d’une plateforme de planification, avec réflexion sur les parcours utilisateurs et la hiérarchie de l’information.',
      challenges: 'Simplifier une interface complexe tout en conservant toutes ses fonctionnalités.',
      solutions: 'Prototypage sous Figma, création de wireframes, puis design d’une interface claire et moderne.',
      technologies: ['Figma', 'Design UI/UX', 'Web Design'],
      highlights: [
        'Travail UX approfondi',
        'Design d’une interface moderne',
        'Prototypage interactif',

      ],
      gallery: [ 
        '/public/assets/hpp-1.png',
        '/public/assets/hpp-2.png',
        '/public/assets/hpp-3.png',
        '/public/assets/hpp-4.png',
        
      ]
    }
  },
  {
    id: 'project-8',
    title: 'Proposition redesign Gîte de la Bresse',
    description: 'Proposition de redesign UI/UX pour un site touristique afin d’améliorer l’attractivité et les réservations.',
    tags: ['Figma', 'Design UI/UX', 'Web Design'],
    imageUrl: '/public/assets/Bresse-1.png',
    details: {
      overview: 'Refonte visuelle et structurelle du site du Gîte de la Bresse avec un objectif d’amélioration de l’expérience utilisateur et de conversion.',
      challenges: 'Rendre le site plus attractif tout en facilitant l’accès à l’information.',
      solutions: 'Refonte graphique sous Figma, nouvelle hiérarchie visuelle et mise en avant des points forts du gîte.',
      technologies: ['Figma', 'Design UI/UX', 'Web Design'],
      highlights: [
        'Design orienté conversion',
        'Amélioration de l’expérience utilisateur',
        'Valorisation de l’offre touristique',
      ],
      gallery: [
        '/public/assets/Bresse-1.png',
        '/public/assets/Bresse-2.png', 
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
    company: 'Datadess',
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
  title: 'Chargé de communication & Web Designer',
  location: 'Nancy, France',
  bio: ' "Chargé de communication multi-casquette.  Je suis passioné par la communication numérique, l\'expérience utilisateur et le design interactif. J\'allie ma créativité et mes compétences techniques en développement front-end pour concevoir des interfaces modernes et performantes. Je suis prêt à relever plus de défis, et donner vie à vos projets."'
};