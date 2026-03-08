import React from 'react';
import { profile } from '@/data/profile';
import { techSkills } from '@/data/tech-skills';
import { realProjects } from '@/data/real-projects';
import SkillBadge from '@/components/SkillBadge';
import ProjectCard from '@/components/ProjectCard';

export default function Design() {
  const designSkills = techSkills.filter(skill => skill.category === 'frontend');
  const designProjects = realProjects.filter(project =>
    project.category === 'web' || project.category === 'fullstack'
  );

  const designServices = profile.services.filter(service =>
    service.category === 'design'
  );

  const designPrinciples = [
    {
      icon: '🎯',
      title: 'User-Centered Design',
      description: 'Every design decision is made with the end user in mind, ensuring intuitive and accessible experiences.'
    },
    {
      icon: '⚖️',
      title: 'Visual Balance',
      description: 'Creating harmonious compositions that guide the eye and communicate hierarchy effectively.'
    },
    {
      icon: '🔄',
      title: 'Consistency',
      description: 'Maintaining cohesive visual language across all touchpoints for brand recognition and usability.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Pushing creative boundaries while maintaining practical functionality and user needs.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Design & Creative Work
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Where creativity meets strategy to create compelling visual experiences that resonate with audiences and drive meaningful engagement.
          </p>
        </div>

        {/* Design Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-3xl">🎨</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
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
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Design Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Design Skills & Tools
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {designSkills.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} size="lg" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Design Tools</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <div>Figma</div>
                  <div>Adobe Creative Suite</div>
                  <div>Sketch</div>
                  <div>Framer</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Design Systems</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <div>Component Libraries</div>
                  <div>Design Tokens</div>
                  <div>Style Guides</div>
                  <div>Brand Guidelines</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Specializations</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <div>UI/UX Design</div>
                  <div>Brand Identity</div>
                  <div>Creative Coding</div>
                  <div>Visual Design</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Design Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your brand, goals, target audience, and project requirements through research and consultation.',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing a creative strategy and design direction that aligns with your objectives and resonates with your audience.',
                icon: '🧭'
              },
              {
                step: '03',
                title: 'Design',
                description: 'Creating initial concepts, wireframes, and prototypes, followed by iterative refinement based on feedback.',
                icon: '✏️'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Finalizing designs, creating comprehensive guidelines, and providing all necessary assets for implementation.',
                icon: '🚀'
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{phase.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
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
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create stunning visual experiences that captivate your audience and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start a Design Project
            </a>
            <a
              href="/projects"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              View All Projects
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}