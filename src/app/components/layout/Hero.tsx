import { useTypedSuperpower } from "@/hooks/useTypedSuperPower";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const superpowers = [
    "Frontend Developer",
    "Web Designer",
    "React Developer",
    "Web Scientist",
  ];
  const { typedSuperpower } = useTypedSuperpower(superpowers);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main content */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Hello, I am Giorgio
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              Web develoeper and Data analyst
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              My expertise spans web development with JavaScript, TypeScript,
              React along with data analysis and visualization using Python.
            </p>
            <span className="blinking-cursor">{typedSuperpower}</span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Link
              href="#id-Contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 rounded-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <Mail className="h-5 w-5" />
              Contact
            </Link>
            <Link
              href="#id-Projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-foreground bg-transparent border-2 border-border hover:bg-accent hover:text-accent-foreground rounded-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Github className="h-5 w-5" />
              Projects
            </Link>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in">
            <button className="inline-flex items-center justify-center w-12 h-12 text-muted-foreground bg-transparent hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <Github className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center w-12 h-12 text-muted-foreground bg-transparent hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center w-12 h-12 text-muted-foreground bg-transparent hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <Mail className="h-5 w-5" />
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
