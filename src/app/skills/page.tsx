"use client";

import React, { useState } from 'react';
import { techSkills, skillCategories } from '@/data/tech-skills';
import SkillBadge from '@/components/SkillBadge';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredSkills = techSkills.filter(skill => {
    const categoryMatch = selectedCategory === 'all' || skill.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || skill.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const levelOptions = [
    { id: 'all', name: 'All Levels', count: techSkills.length },
    { id: 'expert', name: 'Expert', count: techSkills.filter(s => s.level === 'expert').length },
    { id: 'advanced', name: 'Advanced', count: techSkills.filter(s => s.level === 'advanced').length },
    { id: 'intermediate', name: 'Intermediate', count: techSkills.filter(s => s.level === 'intermediate').length },
    { id: 'familiar', name: 'Familiar', count: techSkills.filter(s => s.level === 'familiar').length }
  ];

  const skillsByCategory = skillCategories.map(category => ({
    ...category,
    skills: filteredSkills.filter(skill => skill.category === category.id)
  })).filter(category => category.skills.length > 0);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'text-yellow-600 dark:text-yellow-400';
      case 'advanced': return 'text-green-600 dark:text-green-400';
      case 'intermediate': return 'text-blue-600 dark:text-blue-400';
      case 'beginner': return 'text-gray-600 dark:text-gray-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getLevelStars = (level: string) => {
    switch (level) {
      case 'expert': return '⭐⭐⭐⭐⭐';
      case 'advanced': return '⭐⭐⭐⭐';
      case 'intermediate': return '⭐⭐⭐';
      case 'familiar': return '⭐⭐';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise,
            spanning from AI and development to design and creative coding.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {skillCategories.map((category) => {
            const count = techSkills.filter(s => s.category === category.id).length;
            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`w-4 h-4 rounded-full bg-${category.color}-500 mx-auto mb-3`}></div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{count}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{category.name}</div>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="mb-12">
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                All Skills ({techSkills.length})
              </button>
              {skillCategories.map((category) => {
                const count = techSkills.filter(s => s.category === category.id).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by Proficiency</h3>
            <div className="flex flex-wrap gap-3">
              {levelOptions.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedLevel === level.id
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {level.name} ({level.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillsByCategory.map((category) => (
            <section key={category.id}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full bg-${category.color}-500`}></div>
                  {category.name}
                  <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    ({category.skills.length} skills)
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                          <div className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                            {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)} {getLevelStars(skill.level)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Skills Cloud */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              All Skills Overview
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredSkills.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} size="lg" />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to Work Together?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on interesting projects.
            Let's discuss how my skills can help bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
        </section>
      </div>
    </div>
  );
}