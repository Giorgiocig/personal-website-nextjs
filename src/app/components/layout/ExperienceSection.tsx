import React from "react";
import { Briefcase, Building2, GraduationCap } from "lucide-react";
import ExperienceCard from "../common/ExperienceCard";

const experiences = [
  {
    company: "Cénotélie",
    position: "Software Developer",
    duration: "3 anni",
    location: "Francia",
    description:
      "Sviluppo di soluzioni software innovative per clienti enterprise, con focus su progetti interni e collaborazioni strategiche con aziende leader nel settore energetico e aerospaziale.",
    projects: [
      "Progetti interni per Engie - Soluzioni energetiche digitali",
      "Sviluppo software per Collins Aerospace - Sistemi aeronautici",
      "Implementazione di architetture scalabili e performanti",
      "Collaborazione in team internazionali e multidisciplinari",
    ],
    icon: Building2,
  },
  {
    company: "Università",
    position: "Dottorando in Ricerca",
    duration: "3 anni",
    location: "Italia",
    description:
      "Esperienza di ricerca approfondita nel campo della data science, con specializzazione in analisi dati e visualizzazione. Sviluppo di competenze avanzate in Python per la ricerca scientifica.",
    projects: [
      "Data Analysis con Python - Librerie pandas, numpy, matplotlib",
      "Data Visualization - Matplotlib, seaborn, plotly",
      "Project management",
      "Analisi statistica",
    ],
    icon: GraduationCap,
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-slate-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Esperienza Professionale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Il mio percorso professionale e accademico, dalla ricerca
            universitaria allo sviluppo software enterprise
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              company={experience.company}
              position={experience.position}
              duration={experience.duration}
              location={experience.location}
              description={experience.description}
              projects={experience.projects}
              icon={experience.icon}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Timeline Visualization */}
        <div
          className="relative animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full opacity-30" />

          <div className="flex flex-col items-center space-y-16">
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-white shadow-lg" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm font-semibold text-emerald-600">
                  {new Date().getFullYear()}
                </p>
                <p className="text-xs text-gray-500">Presente</p>
              </div>
            </div>

            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-sm font-semibold text-blue-600">
                  {new Date().getFullYear() - 6}
                </p>
                <p className="text-xs text-gray-500">Inizio Dottorato</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
              6+
            </div>
            <p className="text-gray-600 font-medium">Anni di Esperienza</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              2
            </div>
            <p className="text-gray-600 font-medium">Settori di Esperienza</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-600 font-medium">Progetti Completati</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
