import { User, Heart, Code, Coffee } from "lucide-react";

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
                  Ciao! Sono{" "}
                  <span className="font-semibold text-foreground">Marco</span>,
                  un Data Scientist e Developer con una passione per
                  l'innovazione tecnologica e l'analisi dei dati.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  La mia journey nel mondo tech è iniziata con la curiosità di
                  capire come i dati possano raccontare storie significative.
                  Oggi combino competenze in machine learning, sviluppo software
                  e analisi statistica per creare soluzioni che hanno un impatto
                  reale.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Quando non sto programmando, mi piace esplorare nuove
                  tecnologie, contribuire a progetti open source e condividere
                  le mie conoscenze con la community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">
                    Anni di Esperienza
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Progetti Completati
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Tecnologie Utilizzate
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-6"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400&q=80"
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
