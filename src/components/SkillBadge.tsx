"use client";

import React from 'react';
import { TechSkill } from '@/data/tech-skills';

interface SkillBadgeProps {
  skill: TechSkill;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
  onClick?: (skill: TechSkill) => void;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  skill,
  size = 'md',
  showDescription = false,
  onClick
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base'
  };

  const categoryColors = {
    frontend: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
    backend: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    database: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800',
    devops: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
    mobile: 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800',
    tools: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-800'
  };

  const levelIndicators = {
    expert: '⭐⭐⭐⭐⭐',
    advanced: '⭐⭐⭐⭐',
    intermediate: '⭐⭐⭐',
    familiar: '⭐⭐'
  };

  const handleClick = () => {
    if (onClick) {
      onClick(skill);
    }
  };

  return (
    <div
      className={`
        inline-flex items-center gap-2 rounded-full border transition-all duration-200
        ${sizeClasses[size]}
        ${categoryColors[skill.category]}
        ${onClick ? 'cursor-pointer hover:scale-105 hover:shadow-md' : ''}
      `}
      onClick={handleClick}
      title={showDescription ? skill.description : undefined}
    >
      <span className="font-medium">{skill.name}</span>
      {size === 'lg' && (
        <span className="text-xs opacity-75">
          {levelIndicators[skill.level]}
        </span>
      )}
    </div>
  );
};

export default SkillBadge;