export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'ai' | 'tools' | 'creative';
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  description: string;
  icon: string;
}

export const skills: Skill[] = [
  // Frontend & Design Skills
  {
    id: 'frontend-design',
    name: 'Frontend Design',
    category: 'frontend',
    level: 'expert',
    description: 'Modern web interfaces with React, Next.js, and cutting-edge design systems',
    icon: '🎨'
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    category: 'frontend',
    level: 'expert',
    description: 'Mobile-first, accessible designs that work across all devices',
    icon: '📱'
  },

  // Design & Creative Skills
  {
    id: 'brand-guidelines',
    name: 'Brand Guidelines',
    category: 'design',
    level: 'advanced',
    description: 'Comprehensive brand identity systems and design guidelines',
    icon: '🎯'
  },
  {
    id: 'canvas-design',
    name: 'Visual Design',
    category: 'design',
    level: 'advanced',
    description: 'Beautiful visual art, illustrations, and creative designs',
    icon: '🖼️'
  },
  {
    id: 'algorithmic-art',
    name: 'Algorithmic Art',
    category: 'creative',
    level: 'advanced',
    description: 'Generative art using code, p5.js, and creative algorithms',
    icon: '🎭'
  },
  {
    id: 'theme-factory',
    name: 'Theme Design',
    category: 'design',
    level: 'expert',
    description: 'Custom themes and styling systems for any platform',
    icon: '🎪'
  },

  // AI & Development Skills
  {
    id: 'claude-api',
    name: 'Claude API',
    category: 'ai',
    level: 'expert',
    description: 'Building intelligent apps with Claude API and Anthropic SDK',
    icon: '🤖'
  },
  {
    id: 'mcp-builder',
    name: 'MCP Development',
    category: 'ai',
    level: 'advanced',
    description: 'Creating Model Context Protocol servers and AI integrations',
    icon: '🔧'
  },
  {
    id: 'webapp-testing',
    name: 'Web App Testing',
    category: 'tools',
    level: 'advanced',
    description: 'Comprehensive testing with Playwright and modern tools',
    icon: '🧪'
  },

  // Document & Communication Skills
  {
    id: 'pdf-processing',
    name: 'PDF Processing',
    category: 'tools',
    level: 'expert',
    description: 'Advanced PDF manipulation, generation, and automation',
    icon: '📄'
  },
  {
    id: 'document-creation',
    name: 'Document Creation',
    category: 'tools',
    level: 'advanced',
    description: 'Professional documents, reports, and presentations',
    icon: '📋'
  },
  {
    id: 'presentation-design',
    name: 'Presentation Design',
    category: 'design',
    level: 'advanced',
    description: 'Compelling slide decks and visual presentations',
    icon: '📊'
  },
  {
    id: 'doc-coauthoring',
    name: 'Technical Writing',
    category: 'tools',
    level: 'advanced',
    description: 'Clear documentation and collaborative writing workflows',
    icon: '✍️'
  },
  {
    id: 'internal-comms',
    name: 'Internal Communications',
    category: 'tools',
    level: 'intermediate',
    description: 'Professional communication and stakeholder updates',
    icon: '💼'
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'tools',
    level: 'intermediate',
    description: 'Spreadsheet automation and data visualization',
    icon: '📈'
  },
  {
    id: 'skill-creation',
    name: 'Skill Development',
    category: 'creative',
    level: 'advanced',
    description: 'Creating and optimizing AI skills and capabilities',
    icon: '🚀'
  },
  {
    id: 'web-artifacts',
    name: 'Web Artifacts',
    category: 'frontend',
    level: 'advanced',
    description: 'Complex web components and interactive experiences',
    icon: '🌐'
  }
];

export const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend & Development',
    description: 'Modern web development and user interface design',
    color: 'blue'
  },
  {
    id: 'design',
    name: 'Design & Visual',
    description: 'Visual design, branding, and creative direction',
    color: 'purple'
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    description: 'Artificial intelligence and workflow automation',
    color: 'green'
  },
  {
    id: 'tools',
    name: 'Tools & Productivity',
    description: 'Software tools and productivity solutions',
    color: 'orange'
  },
  {
    id: 'creative',
    name: 'Creative & Innovation',
    description: 'Creative problem solving and innovative solutions',
    color: 'pink'
  }
];