export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  avatar?: string;
  experience: string;
  availability: 'available' | 'busy' | 'unavailable';
  services: Service[];
  achievements: Achievement[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'design' | 'development' | 'ai' | 'consulting';
  price?: string;
  deliveryTime?: string;
  features: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export const profile: Profile = {
  name: 'Lulu Sir',
  title: 'Full-Stack Developer & Problem Solver',
  bio: 'Passionate full-stack developer with expertise in building scalable web applications and solving complex technical challenges. I focus on clean code, user experience, and delivering solutions that make a real impact.',
  location: 'San Francisco Bay Area',
  email: 'hello@lulusir.dev',
  website: 'https://lulusir.dev',
  github: 'https://github.com/lulusir',
  linkedin: 'https://linkedin.com/in/lulusir',
  experience: '5+ years',
  availability: 'available',
  services: [
    {
      id: 'ai-integration',
      title: 'AI Integration & Automation',
      description: 'Integrate Claude AI and other AI services into your applications and workflows for enhanced intelligence and automation.',
      category: 'ai',
      price: 'Starting at $2,500',
      deliveryTime: '2-4 weeks',
      features: [
        'Claude API integration',
        'Custom prompt engineering',
        'Workflow automation',
        'Performance optimization',
        'Documentation & training'
      ]
    },
    {
      id: 'web-development',
      title: 'Modern Web Development',
      description: 'Build responsive, performant web applications with modern frameworks and cutting-edge design.',
      category: 'development',
      price: 'Starting at $3,000',
      deliveryTime: '3-6 weeks',
      features: [
        'Next.js/React development',
        'Responsive design',
        'Performance optimization',
        'SEO implementation',
        'Mobile-first approach'
      ]
    },
    {
      id: 'brand-design',
      title: 'Brand Identity & Design',
      description: 'Create compelling brand identities with comprehensive guidelines and visual assets.',
      category: 'design',
      price: 'Starting at $1,500',
      deliveryTime: '2-3 weeks',
      features: [
        'Logo design & variations',
        'Color palette & typography',
        'Brand guidelines',
        'Marketing materials',
        'Digital asset creation'
      ]
    },
    {
      id: 'creative-coding',
      title: 'Creative Coding & Art',
      description: 'Develop algorithmic art, interactive experiences, and creative coding solutions.',
      category: 'design',
      price: 'Starting at $2,000',
      deliveryTime: '2-4 weeks',
      features: [
        'Algorithmic art generation',
        'Interactive experiences',
        'Data visualization',
        'Creative installations',
        'Performance art'
      ]
    },
    {
      id: 'document-automation',
      title: 'Document Automation',
      description: 'Automate document creation, processing, and management workflows.',
      category: 'consulting',
      price: 'Starting at $1,000',
      deliveryTime: '1-2 weeks',
      features: [
        'PDF processing automation',
        'Document generation',
        'Template creation',
        'Workflow optimization',
        'Integration support'
      ]
    },
    {
      id: 'technical-consulting',
      title: 'Technical Consulting',
      description: 'Strategic guidance on technology choices, architecture, and implementation strategies.',
      category: 'consulting',
      price: '$150/hour',
      deliveryTime: 'Ongoing',
      features: [
        'Technology assessment',
        'Architecture planning',
        'Code review',
        'Performance optimization',
        'Team mentoring'
      ]
    }
  ],
  achievements: [
    {
      id: 'projects-completed',
      title: 'Projects Completed',
      description: 'Successfully delivered projects across multiple domains',
      icon: '🚀',
      metric: '50+'
    },
    {
      id: 'clients-satisfied',
      title: 'Happy Clients',
      description: 'Maintained excellent client satisfaction throughout projects',
      icon: '😊',
      metric: '98%'
    },
    {
      id: 'technologies-mastered',
      title: 'Technologies Mastered',
      description: 'Proficient in diverse technologies and frameworks',
      icon: '💻',
      metric: '15+'
    },
    {
      id: 'ai-integrations',
      title: 'AI Integrations',
      description: 'Successfully integrated AI into various applications',
      icon: '🤖',
      metric: '20+'
    },
    {
      id: 'design-awards',
      title: 'Design Recognition',
      description: 'Received recognition for outstanding design work',
      icon: '🏆',
      metric: '5'
    },
    {
      id: 'open-source',
      title: 'Open Source Contributions',
      description: 'Active contributor to open source projects',
      icon: '🌟',
      metric: '10+'
    }
  ]
};