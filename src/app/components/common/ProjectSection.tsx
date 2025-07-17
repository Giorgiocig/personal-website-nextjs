import React from "react";
import { Code, Folder, Rocket } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Dashboard Analytics",
    description:
      "Una dashboard completa per l'analisi dei dati con visualizzazioni interattive, grafici in tempo reale e reportistica avanzata. Sviluppata con React e D3.js.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Piattaforma e-commerce moderna con gestione inventario, pagamenti integrati e dashboard amministrativa. Include sistema di raccomandazioni basato su ML.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Redis"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Data Science Pipeline",
    description:
      "Pipeline automatizzata per l'elaborazione e analisi di grandi dataset. Include preprocessing, feature engineering e modelli di machine learning.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Docker",
      "Apache Airflow",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    githubUrl: "#",
  },
  {
    title: "Mobile Task Manager",
    description:
      "App mobile per la gestione delle attività con sincronizzazione cloud, notifiche push e collaborazione in team. UI/UX ottimizzata per produttività.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "API Gateway Service",
    description:
      "Microservizio gateway per gestione API con autenticazione, rate limiting, caching e monitoraggio. Architettura scalabile e performante.",
    technologies: ["Node.js", "Express", "Redis", "JWT", "Docker", "AWS"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    githubUrl: "#",
  },
  {
    title: "Portfolio Interattivo",
    description:
      "Portfolio personale con animazioni fluide, tema scuro/chiaro e sezioni interattive. Ottimizzato per performance e SEO.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-6">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            I Miei Progetti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selezione dei progetti più significativi che ho sviluppato,
            dalle applicazioni web ai sistemi di data science
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            Tutti i Progetti
          </button>
          <button className="px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-all duration-300 hover:scale-105">
            Web Development
          </button>
          <button className="px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-all duration-300 hover:scale-105">
            Data Science
          </button>
          <button className="px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-all duration-300 hover:scale-105">
            Mobile
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-200/50">
            <Folder className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Hai un progetto in mente?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Sono sempre interessato a nuove sfide e collaborazioni. Parliamo
              del tuo prossimo progetto!
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Iniziamo a Collaborare
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <p className="text-gray-600 font-medium">Progetti Completati</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <p className="text-gray-600 font-medium">Tecnologie Utilizzate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-600 font-medium">Clienti Soddisfatti</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
