import React from "react";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  level: number;
  icon: LucideIcon;
  category: string;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  level,
  icon: Icon,
  category,
  delay = 0,
}) => {
  return (
    <div
      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                {name}
              </h3>
              <p className="text-sm text-gray-600">{category}</p>
            </div>
          </div>
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
            {level}%
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Competenza</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out animate-scale-in"
              style={{
                width: `${level}%`,
                animationDelay: `${delay + 300}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
