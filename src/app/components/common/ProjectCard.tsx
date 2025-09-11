import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  delay = 0,
}) => {
  return (
    <div
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          width={500}
          height={500}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <button className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
              <Github className="w-4 h-4 text-foreground" />
            </button>
          )}
          {liveUrl && (
            <button className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
              <ExternalLink className="w-4 h-4 text-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {githubUrl && (
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-accent transition-colors">
              <Github className="w-4 h-4" />
              Code
            </button>
          )}
          {liveUrl && (
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-background bg-primary hover:bg-primary/90 rounded-md transition-colors">
              <ExternalLink className="w-4 h-4" />
              Demo Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
