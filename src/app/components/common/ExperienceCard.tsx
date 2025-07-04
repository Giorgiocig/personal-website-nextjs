import React from "react";
import { LucideIcon } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  projects: string[];
  icon: LucideIcon;
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  duration,
  location,
  description,
  projects,
  icon: Icon,
  delay = 0,
}) => {
  return (
    <div
      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                {position}
              </h3>
              <p className="text-lg font-semibold text-emerald-600">
                {company}
              </p>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>
          <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        {/* Projects */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
            Progetti Principali
          </h4>
          <div className="space-y-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-sm text-gray-700"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex-shrink-0" />
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
