"use client";

import React from 'react';
import { RealProject } from '@/data/real-projects';

interface ProjectCardProps {
  project: RealProject;
  featured?: boolean;
  onClick?: (project: RealProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featured = false,
  onClick
}) => {
  const categoryColors = {
    web: 'from-blue-500 to-indigo-600',
    mobile: 'from-green-500 to-emerald-600',
    api: 'from-purple-500 to-violet-600',
    fullstack: 'from-orange-500 to-amber-600',
    devops: 'from-pink-500 to-rose-600'
  };

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    maintenance: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
  };

  const statusLabels = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    maintenance: 'Maintenance'
  };

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900 shadow-sm transition-all duration-300
        hover:shadow-xl hover:scale-[1.02]
        ${featured ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900' : ''}
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={handleClick}
    >
      {/* Category Gradient Bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${categoryColors[project.category]}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
                {statusLabels[project.status]}
              </span>
              {featured && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-md">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Outcomes (if available) */}
        {project.outcomes && project.outcomes.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Outcomes:</h4>
            <ul className="space-y-1">
              {project.outcomes.slice(0, 2).map((outcome, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub →
            </a>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4">
          <div className="bg-blue-500 text-white p-2 rounded-full shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;