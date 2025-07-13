import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Code2, Database, Globe, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Capital One",
      period: "Jun. 2025 - Present",
      location: "Richmond, VA",
      description: "Building an audit log system using NestJS to track and display changes made to over 10,000 SKUs, improving agent triage time by 200%. Integrating SevenRooms API via backend service layer to automate restaurant bookings, reducing scheduling time. Leveraging event-driven architecture to enable real-time SevenRooms match results and audit log updates, handling over 1,000 asynchronous events daily."
    },
    {
      title: "Software Engineer Intern",
      company: "Yext",
      period: "Jun. 2024 - Aug. 2024",
      location: "Washington D.C.",
      description: "Developed REST API endpoints for review categorization, allowing users to group reviews by themes for more insights. Achieved a 40x performance improvement by refactoring a network call, resolving latency issues caused by large review volumes from a platform migration. Extended database schema and updated CRUD operations to support pre-defined review themes, aligning backend capabilities with new product design requirements."
    },
    {
      title: "BIG-TCR Summer Intern",
      company: "McWilliams School of Biomedical Informatics at UTHealth Houston",
      period: "Jun. 2023 - Aug. 2023",
      location: "Houston, TX",
      description: "Developed a chatbot to answer HPV-related questions using rule-based NLP, promoting public health education and reducing stigma around vaccination. Annotated clinical trial records with CLAMP to extract medical relations, accelerating NLP model development. Mentored PhD and postdoc researchers in Dr. Cui Tao's lab, training them to effectively use CLAMP."
    }
  ];

  const projects = [
    {
      title: "PacOne",
      description: "Engineered a modular Java game engine with plugin-based architecture and JSON-configured behaviors and assets. Created a JavaFX game design interface for specifying rules, collisions, and assets, exporting to JSON configs used by the runtime engine. Directed team workflows using Agile Sprints, GitLab issue tracking, and weekly standups to ensure steady progress.",
      technologies: ["Java", "JavaFX", "TestFX", "GitLab"],
      githubUrl: "https://github.com/wwh15",
      liveUrl: "#"
    },
    {
      title: "Cell Society",
      description: "Built a configurable Java simulation engine for cellular automata using XML input, enabling user-defined parameters and simulation setups. Implemented factory patterns to support extensible simulation types and customizable grid behaviors. Developed generalized rule-processing and neighbor strategies to dynamically handle state transitions across simulations.",
      technologies: ["Java", "JavaFX", "TestFX", "GitLab", "XML"],
      githubUrl: "https://github.com/wwh15",
      liveUrl: "#"
    },
    {
      title: "Online Poker Game",
      description: "Built a full-stack poker game with a Vue frontend, Node.js backend, and support for real-time multiplayer gameplay. Scaled socket.io server to support concurrent game sessions and added role-based access control via OIDC login. Deployed the app on Kubernetes with CI/CD integration and end-to-end testing to ensure production-grade reliability.",
      technologies: ["Vue", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "Playwright", "Socket.IO"],
      githubUrl: "https://github.com/wwh15",
      liveUrl: "#"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Java", "Python", "C", "JavaScript", "TypeScript", "HTML/CSS", "Ruby", "Elixir"] },
    { category: "Frameworks", items: ["React", "Node.js", "Flask", "Vue", "Rails", "Phoenix", "Express", "NestJS", "NextJS"] },
    { category: "Databases", items: ["MongoDB", "Snowflake"] },
    { category: "Tools", items: ["Git", "Docker", "Kubernetes", "Playwright", "TeamCity", "Nomad", "Kafka", "Swagger", "Jenkins"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-primary">William He</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            William He
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Software Engineering Student
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Duke University student pursuing BSE in Electrical & Computer Engineering and BS in Computer Science. 
            Passionate about building scalable systems and seeking full-time software engineering opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="mailto:williamhe219@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://github.com/wwh15" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate computer science and electrical engineering student at Duke University 
                with hands-on experience in full-stack development and system architecture. I've completed 
                internships at Capital One and Yext, where I built scalable systems and improved performance significantly.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My expertise spans Java, Python, JavaScript/TypeScript, and modern frameworks like React, Vue, 
                and Node.js. I enjoy tackling complex problems, from building game engines to developing 
                real-time multiplayer applications and optimizing large-scale systems.
              </p>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Durham, NC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Graduating May 2026</span>
                </div>
              </div>
            </div>
            
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Education & Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">University</span>
                    <span className="font-medium">Duke University</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Degree</span>
                    <span className="font-medium">BSE ECE + BS CS</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GPA</span>
                    <span className="font-medium">3.8</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Seeking Full-Time</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.liveUrl !== "#" && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {skillGroup.category === "Languages" && <Code2 className="h-5 w-5" />}
                    {skillGroup.category === "Frameworks" && <Globe className="h-5 w-5" />}
                    {skillGroup.category === "Databases" && <Database className="h-5 w-5" />}
                    {skillGroup.category === "Tools" && <Smartphone className="h-5 w-5" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm actively seeking full-time software engineering opportunities starting in 2026. 
            Let's connect to discuss how I can contribute to your team with my technical skills and passion for building great software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="mailto:williamhe219@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                williamhe219@gmail.com
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="https://www.linkedin.com/in/willhe219/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="https://github.com/wwh15" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2024 William He. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
