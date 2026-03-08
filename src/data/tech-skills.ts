export interface TechSkill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'tools';
  level: 'expert' | 'advanced' | 'intermediate' | 'familiar';
  yearsOfExperience: number;
  description: string;
  projects: string[]; // 相关项目ID
}

export const techSkills: TechSkill[] = [
  // Frontend Skills
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'expert',
    yearsOfExperience: 4,
    description: 'Building complex, scalable frontend applications with React ecosystem',
    projects: ['ecommerce-platform', 'dashboard-app', 'mobile-app']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    yearsOfExperience: 3,
    description: 'Type-safe JavaScript development for better code quality and maintainability',
    projects: ['dashboard-app', 'api-gateway', 'mobile-app']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    yearsOfExperience: 2,
    description: 'Full-stack React framework for production-ready web applications',
    projects: ['portfolio-website', 'ecommerce-platform', 'blog-platform']
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    level: 'intermediate',
    yearsOfExperience: 2,
    description: 'Progressive framework for building user interfaces',
    projects: ['admin-panel', 'landing-pages']
  },

  // Backend Skills
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'expert',
    yearsOfExperience: 5,
    description: 'Server-side JavaScript runtime for building scalable network applications',
    projects: ['api-gateway', 'microservices', 'real-time-chat']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'advanced',
    yearsOfExperience: 4,
    description: 'Versatile programming language for web development, data analysis, and automation',
    projects: ['data-pipeline', 'ml-api', 'automation-tools']
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 'expert',
    yearsOfExperience: 4,
    description: 'Fast, minimalist web framework for Node.js',
    projects: ['api-gateway', 'microservices', 'real-time-chat']
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    level: 'advanced',
    yearsOfExperience: 2,
    description: 'Progressive Node.js framework for building efficient server-side applications',
    projects: ['microservices', 'api-gateway']
  },

  // Database Skills
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'advanced',
    yearsOfExperience: 4,
    description: 'Advanced relational database management with complex queries and optimization',
    projects: ['ecommerce-platform', 'dashboard-app', 'analytics-system']
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 'advanced',
    yearsOfExperience: 3,
    description: 'NoSQL database for flexible, scalable data storage',
    projects: ['real-time-chat', 'content-management', 'mobile-app']
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 'intermediate',
    yearsOfExperience: 2,
    description: 'In-memory data structure store for caching and real-time features',
    projects: ['real-time-chat', 'api-gateway', 'session-management']
  },

  // DevOps & Cloud
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 'advanced',
    yearsOfExperience: 3,
    description: 'Containerization for consistent development and deployment environments',
    projects: ['microservices', 'api-gateway', 'portfolio-website']
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'devops',
    level: 'intermediate',
    yearsOfExperience: 2,
    description: 'Cloud platform services including EC2, S3, Lambda, and RDS',
    projects: ['ecommerce-platform', 'data-pipeline', 'serverless-api']
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'devops',
    level: 'familiar',
    yearsOfExperience: 1,
    description: 'Container orchestration for scalable application deployment',
    projects: ['microservices']
  },

  // Mobile Development
  {
    id: 'react-native',
    name: 'React Native',
    category: 'mobile',
    level: 'intermediate',
    yearsOfExperience: 2,
    description: 'Cross-platform mobile app development with React',
    projects: ['mobile-app', 'ecommerce-mobile']
  },

  // Development Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 'expert',
    yearsOfExperience: 5,
    description: 'Version control and collaborative development workflows',
    projects: ['all-projects']
  },
  {
    id: 'webpack',
    name: 'Webpack',
    category: 'tools',
    level: 'advanced',
    yearsOfExperience: 3,
    description: 'Module bundler for optimizing and packaging web applications',
    projects: ['dashboard-app', 'ecommerce-platform']
  },
  {
    id: 'jest',
    name: 'Jest',
    category: 'tools',
    level: 'advanced',
    yearsOfExperience: 3,
    description: 'JavaScript testing framework for unit and integration tests',
    projects: ['api-gateway', 'dashboard-app', 'mobile-app']
  }
];

export const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'User interface and user experience development',
    color: 'blue',
    icon: '🎨'
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Server-side logic, APIs, and business logic',
    color: 'green',
    icon: '⚙️'
  },
  {
    id: 'database',
    name: 'Database & Storage',
    description: 'Data modeling, optimization, and management',
    color: 'purple',
    icon: '🗄️'
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    description: 'Infrastructure, deployment, and operations',
    color: 'orange',
    icon: '☁️'
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Cross-platform mobile application development',
    color: 'pink',
    icon: '📱'
  },
  {
    id: 'tools',
    name: 'Development Tools',
    description: 'Build tools, testing, and development utilities',
    color: 'gray',
    icon: '🛠️'
  }
];

export const getSkillsByCategory = (category: string) => {
  return techSkills.filter(skill => skill.category === category);
};

export const getSkillsByLevel = (level: string) => {
  return techSkills.filter(skill => skill.level === level);
};

export const getProjectSkills = (projectId: string) => {
  return techSkills.filter(skill => skill.projects.includes(projectId));
};