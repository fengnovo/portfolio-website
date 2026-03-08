"use client";

import React from 'react';
import { Service } from '@/data/profile';

interface ServiceCardProps {
  service: Service;
  onClick?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onClick
}) => {
  const categoryColors = {
    design: 'from-purple-500 to-violet-600',
    development: 'from-blue-500 to-indigo-600',
    ai: 'from-green-500 to-emerald-600',
    consulting: 'from-orange-500 to-amber-600'
  };

  const categoryIcons = {
    design: '🎨',
    development: '💻',
    ai: '🤖',
    consulting: '💼'
  };

  const handleClick = () => {
    if (onClick) {
      onClick(service);
    }
  };

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900 shadow-sm transition-all duration-300
        hover:shadow-xl hover:scale-[1.02]
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={handleClick}
    >
      {/* Category Gradient Bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${categoryColors[service.category]}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl">{categoryIcons[service.category]}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Pricing and Delivery */}
        <div className="flex items-center gap-4 mb-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          {service.price && (
            <div className="flex-1">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Starting at</div>
              <div className="font-semibold text-gray-900 dark:text-white">{service.price}</div>
            </div>
          )}
          {service.deliveryTime && (
            <div className="flex-1">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Delivery</div>
              <div className="font-semibold text-gray-900 dark:text-white">{service.deliveryTime}</div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-3">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;