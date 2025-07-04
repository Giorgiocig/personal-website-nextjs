import React from "react";
import {
  Code,
  Database,
  Palette,
  Globe,
  Wrench,
  Smartphone,
  GitBranch,
  Server,
  Layers,
} from "lucide-react";
import SkillCard from "./SkillCard";

const skills = [
  // Frontend
  { name: "React", level: 90, icon: Code, category: "Frontend" },
  { name: "TypeScript", level: 95, icon: Code, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, icon: Palette, category: "Frontend" },
  { name: "Next.js", level: 90, icon: Globe, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 85, icon: Server, category: "Backend" },
  { name: "Python", level: 90, icon: Code, category: "Data Analysis" },
  { name: "PostgreSQL", level: 80, icon: Database, category: "Backend" },
  { name: "MongoDB", level: 80, icon: Database, category: "Backend" },
  { name: "NestJs", level: 80, icon: Smartphone, category: "Backend" },

  // Tools & Others
  { name: "Git", level: 90, icon: GitBranch, category: "Tools" },
  { name: "Docker", level: 75, icon: Layers, category: "Tools" },
  { name: "Figma", level: 85, icon: Palette, category: "Design" },
];

const categories = [
  { name: "Frontend", color: "from-blue-500 to-cyan-500" },
  { name: "Backend", color: "from-green-500 to-emerald-500" },
  { name: "Tools", color: "from-purple-500 to-pink-500" },
  { name: "Design", color: "from-orange-500 to-red-500" },
  { name: "Data Analysis", color: "from-indigo-500 to-blue-500" },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Le Mie Competenze
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una panoramica delle tecnologie e strumenti che utilizzo per creare
            esperienze digitali eccezionali
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
            >
              <span
                className={`font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              category={skill.category}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <p className="text-gray-600 font-medium">Anni di Esperienza</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-gray-600 font-medium">Progetti Completati</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              12+
            </div>
            <p className="text-gray-600 font-medium">Tecnologie Utilizzate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
