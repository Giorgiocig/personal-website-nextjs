import { User, Heart, Code, Coffee } from "lucide-react";
import sectionImage from "../../../../public/hero.webp";
import Image from "next/image";
const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Passionate Developer",
      description:
        "I love building innovative solutions that solve real-world problems.",
    },
    {
      icon: User,
      title: "Team Player",
      description:
        "I believe in collaboration and the power of shared knowledge.",
    },
    {
      icon: Heart,
      title: "Lifelong Learner",
      description:
        "Always on the lookout for new technologies and methodologies to explore.",
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "I turn coffee into code and ideas into reality.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Who I am
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hello! I am{" "}
                  <span className="font-semibold text-foreground">Giorgio</span>
                  , web Developer and adata analyst with a passion for
                  technological innovation.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  My journey in the tech world began with developing scripts for
                  data analysis and data visualization for my doctoral thesis.
                  Today, I combine data analysis methodology with web
                  development to create high-performance solutions with a focus
                  on UX.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When I'm not programming, I like to explore new technologies,
                  contribute to open source projects, and share my knowledge
                  with the community
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years of experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Completed Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Tecgnologies used
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-6"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={sectionImage}
                    width={500}
                    height={500}
                    alt="Marco - Data Scientist & Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
