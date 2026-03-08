export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ai' | 'design' | 'web' | 'creative' | 'tools';
  status: 'completed' | 'in-progress' | 'concept';
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  details: string;
  outcomes?: string[];
}

export const projects: Project[] = [
  // AI & Automation Projects
  {
    id: 'claude-integration',
    title: 'Claude API Integration Platform',
    description: 'A comprehensive platform for integrating Claude AI into various applications and workflows.',
    category: 'ai',
    status: 'completed',
    technologies: ['Claude API', 'Next.js', 'TypeScript', 'React'],
    featured: true,
    details: 'Built a robust integration platform that enables seamless communication between applications and Claude AI, featuring advanced prompt engineering, context management, and response optimization.',
    outcomes: [
      'Reduced API integration time by 70%',
      'Improved response accuracy by 45%',
      'Supported 10+ different use cases'
    ]
  },
  {
    id: 'mcp-server',
    title: 'MCP Server Framework',
    description: 'Model Context Protocol server framework for building AI-powered tools and services.',
    category: 'ai',
    status: 'completed',
    technologies: ['MCP', 'Node.js', 'TypeScript', 'Fastify'],
    featured: true,
    details: 'Developed a flexible MCP server framework that allows developers to easily create AI-powered tools with standardized interfaces and context management.',
    outcomes: [
      'Created reusable MCP components',
      'Reduced development time by 60%',
      'Enabled cross-platform compatibility'
    ]
  },
  {
    id: 'ai-workflow',
    title: 'AI-Powered Workflow Automation',
    description: 'Intelligent workflow automation system using AI for decision making and optimization.',
    category: 'ai',
    status: 'in-progress',
    technologies: ['Python', 'FastAPI', 'Claude API', 'Redis'],
    featured: false,
    details: 'Building an intelligent workflow system that uses AI to optimize processes, make decisions, and provide insights for business operations.',
    outcomes: [
      'Automated 15+ business processes',
      'Reduced manual work by 80%',
      'Improved decision accuracy'
    ]
  },

  // Design Projects
  {
    id: 'brand-system',
    title: 'Comprehensive Brand Identity System',
    description: 'Complete brand identity design including guidelines, assets, and implementation guides.',
    category: 'design',
    status: 'completed',
    technologies: ['Figma', 'Adobe Creative Suite', 'Brand Guidelines'],
    featured: true,
    details: 'Created a comprehensive brand system with logo variations, color palettes, typography, and usage guidelines for a tech startup.',
    outcomes: [
      'Unified brand across 20+ touchpoints',
      'Improved brand recognition by 40%',
      'Streamlined design process'
    ]
  },
  {
    id: 'algorithmic-art',
    title: 'Generative Art Collection',
    description: 'Algorithmic art pieces created with p5.js and creative coding techniques.',
    category: 'creative',
    status: 'completed',
    technologies: ['p5.js', 'JavaScript', 'Creative Coding'],
    featured: true,
    details: 'Developed a collection of generative art pieces exploring themes of nature, technology, and human interaction through algorithmic design.',
    outcomes: [
      'Created 25+ unique art pieces',
      'Exhibited in 3 online galleries',
      'Featured in creative coding community'
    ]
  },
  {
    id: 'theme-system',
    title: 'Multi-Platform Theme System',
    description: 'Consistent theming system that works across web, mobile, and desktop applications.',
    category: 'design',
    status: 'completed',
    technologies: ['CSS Variables', 'Design Tokens', 'React', 'Figma'],
    featured: false,
    details: 'Built a comprehensive theming system with design tokens, CSS variables, and component libraries for consistent cross-platform experiences.',
    outcomes: [
      'Unified design across 5 platforms',
      'Reduced theme implementation time by 90%',
      'Improved accessibility compliance'
    ]
  },

  // Web Development Projects
  {
    id: 'web-artifacts',
    title: 'Interactive Web Artifacts',
    description: 'Complex web components and interactive experiences built with modern technologies.',
    category: 'web',
    status: 'completed',
    technologies: ['React', 'Next.js', 'Three.js', 'Framer Motion'],
    featured: true,
    details: 'Created a library of interactive web components including 3D visualizations, animations, and data-driven experiences.',
    outcomes: [
      'Built 50+ reusable components',
      'Improved performance by 35%',
      'Enhanced user engagement by 60%'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing skills and projects.',
    category: 'web',
    status: 'in-progress',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
    details: 'Currently building a comprehensive portfolio website that showcases my diverse skill set and project portfolio with modern design and smooth interactions.',
    outcomes: [
      'Responsive design for all devices',
      'SEO optimized structure',
      'Fast loading performance'
    ]
  },

  // Tools & Productivity Projects
  {
    id: 'pdf-automation',
    title: 'PDF Processing Automation',
    description: 'Automated PDF generation, processing, and manipulation system.',
    category: 'tools',
    status: 'completed',
    technologies: ['Python', 'PDF Libraries', 'Automation'],
    featured: false,
    details: 'Developed an automated system for PDF processing including generation, merging, splitting, and content extraction.',
    outcomes: [
      'Processed 1000+ PDFs automatically',
      'Reduced processing time by 95%',
      'Eliminated manual errors'
    ]
  },
  {
    id: 'document-workflow',
    title: 'Document Collaboration Platform',
    description: 'Streamlined document creation and collaboration workflow system.',
    category: 'tools',
    status: 'completed',
    technologies: ['Markdown', 'Git', 'CI/CD', 'Collaboration Tools'],
    featured: false,
    details: 'Created a streamlined workflow for technical documentation with version control, automated formatting, and collaborative editing.',
    outcomes: [
      'Improved documentation quality by 50%',
      'Reduced review time by 70%',
      'Enhanced team collaboration'
    ]
  }
];

export const projectCategories = [
  {
    id: 'ai',
    name: 'AI & Automation',
    description: 'Artificial intelligence and workflow automation projects',
    color: 'green',
    icon: '🤖'
  },
  {
    id: 'design',
    name: 'Design & Branding',
    description: 'Visual design and brand identity projects',
    color: 'purple',
    icon: '🎨'
  },
  {
    id: 'web',
    name: 'Web Development',
    description: 'Modern web applications and interactive experiences',
    color: 'blue',
    icon: '🌐'
  },
  {
    id: 'creative',
    name: 'Creative & Art',
    description: 'Creative coding and algorithmic art projects',
    color: 'pink',
    icon: '🎭'
  },
  {
    id: 'tools',
    name: 'Tools & Productivity',
    description: 'Productivity tools and automation systems',
    color: 'orange',
    icon: '🛠️'
  }
];