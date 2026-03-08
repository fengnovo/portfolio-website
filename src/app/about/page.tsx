import React from 'react';
import { profile } from '@/data/profile';
import { skills } from '@/data/skills';
import { skillCategories } from '@/data/skills';
import SkillBadge from '@/components/SkillBadge';

export default function About() {
  const skillsByCategory = skillCategories.map(category => ({
    ...category,
    skills: skills.filter(skill => skill.category === category.id)
  }));

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate creator who bridges the gap between technology and design,
            bringing innovative solutions to life through code and creativity.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-4xl">L</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {profile.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {profile.title}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {profile.location}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    profile.availability === 'available' ? 'bg-green-500' :
                    profile.availability === 'busy' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                    {profile.availability === 'available' ? 'Available for projects' :
                     profile.availability === 'busy' ? 'Busy with projects' : 'Not available'}
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {profile.achievements.slice(0, 4).map((achievement) => (
                  <div key={achievement.id} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {achievement.metric}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      {achievement.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {profile.bio}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  With over {profile.experience} of experience in the tech industry, I've had the privilege
                  of working with diverse clients and projects, from startups to established companies.
                  My journey began with a fascination for how technology could solve real-world problems,
                  and has evolved into a passion for creating experiences that are both functional and beautiful.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in the power of collaboration and continuous learning. Whether I'm diving into
                  the latest AI technologies, crafting pixel-perfect designs, or building scalable applications,
                  I bring the same level of dedication and creativity to every project.
                </p>
              </div>
            </section>

            {/* Skills by Category */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Skills & Expertise
              </h3>
              <div className="space-y-8">
                {skillsByCategory.map((category) => (
                  <div key={category.id}>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full bg-${category.color}-500`}></span>
                      {category.name}
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                        ({category.skills.length} skills)
                      </span>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} size="md" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          {achievement.description}
                        </p>
                        {achievement.metric && (
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {achievement.metric}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Work Together
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${profile.email}`}
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Send Email
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}