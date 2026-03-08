export interface RealProject {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'api' | 'fullstack' | 'devops';
  status: 'completed' | 'in-progress' | 'maintenance';
  role: string; // 你在项目中的角色
  teamSize: number;
  duration: string;
  techStack: string[];
  challenges: string[]; // 遇到的技术挑战
  solutions: string[]; // 你的解决方案
  outcomes: string[]; // 项目成果和影响
  metrics?: { // 可量化的成果
    performance?: string;
    userGrowth?: string;
    revenue?: string;
    efficiency?: string;
  };
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  clientType: 'personal' | 'freelance' | 'company' | 'open-source';
  industry?: string; // 所属行业
}

export const realProjects: RealProject[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    category: 'fullstack',
    status: 'completed',
    role: 'Lead Full-Stack Developer',
    teamSize: 4,
    duration: '6 months',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'AWS'],
    challenges: [
      'Real-time inventory synchronization across multiple warehouses',
      'High-concurrency payment processing during flash sales',
      'Complex product variant management system'
    ],
    solutions: [
      'Implemented Redis-based real-time inventory tracking with optimistic locking',
      'Built queue-based payment processing system with retry mechanisms',
      'Designed flexible product schema with efficient database queries'
    ],
    outcomes: [
      'Successfully launched platform serving 10,000+ daily active users',
      'Reduced inventory sync errors by 95%',
      'Handled 500+ concurrent transactions during peak sales'
    ],
    metrics: {
      performance: 'Page load time reduced from 3s to 800ms',
      userGrowth: '300% increase in monthly active users',
      revenue: '$2M+ monthly transaction volume',
      efficiency: '50% reduction in inventory management time'
    },
    demoUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    featured: true,
    clientType: 'freelance',
    industry: 'Retail'
  },
  {
    id: 'dashboard-app',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard for SaaS platform with custom reporting, data visualization, and automated insights.',
    category: 'web',
    status: 'maintenance',
    role: 'Frontend Lead & UI/UX Designer',
    teamSize: 3,
    duration: '4 months',
    techStack: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Express.js', 'MongoDB'],
    challenges: [
      'Real-time data visualization with large datasets',
      'Complex filtering and drill-down functionality',
      'Responsive design for desktop and tablet views'
    ],
    solutions: [
      'Implemented virtual scrolling and data pagination for performance',
      'Built modular chart components with reusable filtering logic',
      'Created adaptive layouts with progressive enhancement'
    ],
    outcomes: [
      'Improved user engagement by 40% with intuitive data exploration',
      'Reduced report generation time from hours to seconds',
      'Supported 50+ different chart types and visualization options'
    ],
    metrics: {
      performance: 'Dashboard loads 50K+ records in under 2 seconds',
      userGrowth: '85% of users actively use analytics features',
      efficiency: 'Reduced manual reporting time by 80%'
    },
    demoUrl: 'https://dashboard-demo.example.com',
    githubUrl: 'https://github.com/username/analytics-dashboard',
    featured: true,
    clientType: 'company',
    industry: 'SaaS'
  },
  {
    id: 'api-gateway',
    title: 'Microservices API Gateway',
    description: 'High-performance API gateway for microservices architecture with authentication, rate limiting, and monitoring.',
    category: 'api',
    status: 'completed',
    role: 'Backend Architect',
    teamSize: 5,
    duration: '5 months',
    techStack: ['Node.js', 'Express.js', 'Redis', 'Docker', 'Kubernetes', 'Prometheus', 'JWT'],
    challenges: [
      'Handling 10,000+ requests per second with low latency',
      'Implementing zero-downtime deployments',
      'Centralized authentication across multiple services'
    ],
    solutions: [
      'Built async request processing with connection pooling',
      'Implemented blue-green deployment strategy with health checks',
      'Created centralized auth service with token refresh mechanism'
    ],
    outcomes: [
      'Successfully routed 1M+ daily API requests with 99.9% uptime',
      'Reduced average response time to under 50ms',
      'Simplified microservice development for entire team'
    ],
    metrics: {
      performance: 'Average response time: 45ms',
      efficiency: '99.9% uptime over 12 months',
      userGrowth: '1M+ daily API requests'
    },
    githubUrl: 'https://github.com/username/api-gateway',
    featured: true,
    clientType: 'company',
    industry: 'Technology'
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App',
    description: 'React Native mobile app for fitness tracking with offline support, real-time sync, and social features.',
    category: 'mobile',
    status: 'completed',
    role: 'Mobile Developer',
    teamSize: 2,
    duration: '3 months',
    techStack: ['React Native', 'TypeScript', 'Redux', 'SQLite', 'Firebase', 'Push Notifications'],
    challenges: [
      'Offline-first architecture with data synchronization',
      'Battery-efficient background location tracking',
      'Cross-platform UI consistency'
    ],
    solutions: [
      'Implemented local-first data storage with conflict resolution',
      'Used geofencing and adaptive location updates for battery optimization',
      'Created platform-specific UI components with shared business logic'
    ],
    outcomes: [
      'Published to both iOS App Store and Google Play Store',
      'Achieved 4.8-star rating with 10,000+ downloads',
      'Successfully handled offline usage for 95% of user sessions'
    ],
    metrics: {
      performance: 'App startup time under 2 seconds',
      userGrowth: '10,000+ downloads in first 6 months',
      efficiency: '95% offline functionality coverage'
    },
    demoUrl: 'https://mobile-demo.example.com',
    githubUrl: 'https://github.com/username/fitness-app',
    featured: false,
    clientType: 'freelance',
    industry: 'Health & Fitness'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js showcasing projects and technical writing.',
    category: 'web',
    status: 'maintenance',
    role: 'Sole Developer & Designer',
    teamSize: 1,
    duration: '1 month',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    challenges: [
      'Optimizing for SEO and performance',
      'Creating engaging animations without compromising accessibility',
      'Responsive design for all device sizes'
    ],
    solutions: [
      'Implemented static generation with dynamic meta tags for SEO',
      'Used CSS animations with prefers-reduced-motion support',
      'Mobile-first design with progressive enhancement'
    ],
    outcomes: [
      'Achieved 95+ Lighthouse performance score',
      'Improved personal brand visibility and client inquiries',
      'Serves as reference for modern web development practices'
    ],
    metrics: {
      performance: 'Lighthouse score: 95+',
      userGrowth: '200% increase in profile visits',
      efficiency: 'Load time under 1 second globally'
    },
    demoUrl: 'https://fengnovo.dev',
    githubUrl: 'https://github.com/fengnovo/portfolio',
    featured: false,
    clientType: 'personal',
    industry: 'Personal Brand'
  }
];

export const projectCategories = [
  {
    id: 'web',
    name: 'Web Applications',
    description: 'Modern web applications with rich user interfaces',
    color: 'blue',
    icon: '🌐'
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    description: 'Cross-platform mobile applications',
    color: 'green',
    icon: '📱'
  },
  {
    id: 'api',
    name: 'APIs & Backend',
    description: 'Server-side applications and API development',
    color: 'purple',
    icon: '⚡'
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Solutions',
    description: 'End-to-end application development',
    color: 'orange',
    icon: '🔧'
  },
  {
    id: 'devops',
    name: 'DevOps & Infrastructure',
    description: 'Deployment, scaling, and infrastructure solutions',
    color: 'pink',
    icon: '🚀'
  }
];

export const getFeaturedProjects = () => {
  return realProjects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string) => {
  return realProjects.filter(project => project.category === category);
};

export const getProjectsByClientType = (clientType: string) => {
  return realProjects.filter(project => project.clientType === clientType);
};