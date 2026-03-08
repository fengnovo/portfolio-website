import React from 'react';
import { profile } from '@/data/profile';
import { techSkills } from '@/data/tech-skills';
import { realProjects } from '@/data/real-projects';
import SkillBadge from '@/components/SkillBadge';
import ProjectCard from '@/components/ProjectCard';

export default function AIAutomation() {
  const aiSkills = techSkills.filter(skill => skill.category === 'backend' || skill.category === 'devops');
  const aiProjects = realProjects.filter(project => project.category === 'api' || project.category === 'fullstack');

  const aiServices = profile.services.filter(service =>
    service.category === 'ai' || service.id === 'ai-integration'
  );

  const aiCapabilities = [
    {
      icon: '🤖',
      title: 'Claude API Integration',
      description: 'Seamless integration of Claude AI into your applications for enhanced intelligence and automation.',
      skills: ['Claude API', 'Anthropic SDK', 'Prompt Engineering', 'Context Management']
    },
    {
      icon: '🔧',
      title: 'MCP Development',
      description: 'Building Model Context Protocol servers for standardized AI tool development.',
      skills: ['MCP Framework', 'Node.js', 'TypeScript', 'API Design']
    },
    {
      icon: '⚡',
      title: 'Workflow Automation',
      description: 'Intelligent automation systems that streamline processes and improve efficiency.',
      skills: ['Process Automation', 'Decision Logic', 'Performance Optimization', 'Monitoring']
    },
    {
      icon: '🧠',
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance on AI implementation, use case identification, and technology selection.',
      skills: ['AI Strategy', 'Use Case Analysis', 'Technology Assessment', 'Implementation Planning']
    }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 80%.'
    },
    {
      icon: '💡',
      title: 'Intelligent Decision Making',
      description: 'Leverage AI insights to make data-driven decisions and optimize business processes.'
    },
    {
      icon: '🎯',
      title: 'Enhanced User Experience',
      description: 'Create personalized, intelligent interfaces that adapt to user needs and preferences.'
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Build AI-powered systems that grow with your business and handle increasing complexity.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI & Automation Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence and automation to transform your business processes,
            enhance decision-making, and create intelligent applications that adapt and evolve.
          </p>
        </div>

        {/* AI Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            AI & Automation Services
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">🤖</div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-0">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        {service.price && (
                          <span className="font-medium text-gray-700 dark:text-gray-300">{service.price}</span>
                        )}
                        {service.price && service.deliveryTime && <span>•</span>}
                        {service.deliveryTime && (
                          <span>{service.deliveryTime}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="text-green-500">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{capability.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {capability.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {capability.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            AI & Automation Skills
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {aiSkills.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} size="lg" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">AI Technologies</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <div>Claude API</div>
                  <div>Anthropic SDK</div>
                  <div>MCP Framework</div>
                  <div>OpenAI GPT</div>
                  <div>Machine Learning</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Development Tools</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <div>Python</div>
                  <div>Node.js</div>
                  <div>TypeScript</div>
                  <div>FastAPI</div>
                  <div>Redis</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Automation</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <div>Workflow Design</div>
                  <div>Process Optimization</div>
                  <div>Decision Logic</div>
                  <div>Performance Monitoring</div>
                  <div>Integration APIs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Benefits of AI Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured AI Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            AI Integration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Analyze your current processes and identify AI opportunities that align with business goals.',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a comprehensive AI strategy including technology selection and implementation roadmap.',
                icon: '🗺️'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build and integrate AI solutions with careful attention to performance, security, and scalability.',
                icon: '⚙️'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuously monitor, refine, and optimize AI systems for maximum effectiveness and ROI.',
                icon: '📊'
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{phase.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        {phase.step}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform with AI?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Let's explore how AI and automation can revolutionize your business processes and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start AI Project
            </a>
            <a
              href="mailto:hello@fengnovo.dev"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}