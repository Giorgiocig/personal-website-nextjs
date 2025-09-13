import React from "react";
import { Folder, Rocket } from "lucide-react";
import ProjectCard from "./ProjectCard";
import covidDashboardImg from "../../../../public/react dashboard.webp";
import streetBoulderTrackerImg from "../../../../public/streetBoulderTracker.webp";
import webscraperImg from "../../../../public/webscraper.webp";
import iceCreamImg from "../../../../public/myicecream.webp";
import personalPortfolioImg from "../../../../public/personalWbsite.webp";
import Link from "next/link";
const projects = [
  {
    title: "Covid-19 Dashboard",
    description:
      "Developed a comprehensive dashboard for the interactive analysis and visualization of data from the COVID-19 API. The project was built using React for the user interface and React-Plotly.js for data visualization.",
    technologies: ["React", "TypeScript", "React-Plotly.js"],
    image: covidDashboardImg,
    githubUrl: "https://github.com/Giorgiocig/covid-dashboard",
    liveUrl: "#",
  },
  {
    title: "Street Boulder Tracker",
    description:
      "full-stack web application designed to simplify the management of bouldering problems during a street bouldering event. It allows organizers to create events, add and manage boulder problems, and visualize them on an interactive map and list. Built with modern technologies, it aims to streamline the setup and tracking process for grassroots climbing competitions.",
    technologies: [
      "React",
      "MaterialUI",
      "PostgreSQL",
      "NestJS",
      "Prisma",
      "Docker",
    ],
    image: streetBoulderTrackerImg,
    githubUrl: "https://github.com/Giorgiocig/street-boulder-tracker",
    liveUrl: "#",
  },
  {
    title: "Jobwatch Webscraper",
    description:
      "Jobwatch webscraper is a Python application to retrieve data of job offers from APEC and Hellowork websites and send them to S3 server. Selenium Python is used to perform scraping and collect data. ",
    technologies: ["Python", "Selenium"],
    image: webscraperImg,
    githubUrl: "https://github.com/Giorgiocig/jobwatch-webscraper",
  },
  {
    title: "My Ice Cream e-Commerce",
    description:
      "Jamstack application that leverages Strapi's CMS for seamless content updates and integrates with the Shopify Storefront API to provide a comprehensive e-commerce experience.",
    technologies: ["Nextjs", "Shopify Storefront", "Strapi"],
    image: iceCreamImg,
    githubUrl: "https://github.com/Giorgiocig/ice-cream-e-commerce",
    liveUrl: "#",
  },
  {
    title: "Personal portfolio",
    description:
      "Personal portfolio with smooth animations and interactive sections. Optimized for performance.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: personalPortfolioImg,
    githubUrl: "https://github.com/Giorgiocig/personal-website-nextjs",
    liveUrl: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-100 py-20 px-4"
      id="id-Projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-6">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            My projects{" "}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of the most significant projects I have developed, from
            full-stack web applications to data analysis
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
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
          id="id-Contact"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-200/50">
            <Folder className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Do you have a project in mind?{" "}
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              I am always interested in new challenges and collaborations.
              Let&apos;s talk about your next project!
            </p>
            <Link
              href="mailto:giorgiocignitti@gmail.com?subject=Info"
              className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Let&apos;s start collaborate
            </Link>
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
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <p className="text-gray-600 font-medium">Technology utilized</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-600 font-medium">Customers Satisfied</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
