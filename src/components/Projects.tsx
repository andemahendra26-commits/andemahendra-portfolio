import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website (Clothing)",
      type: "Website",
      icon: ShoppingCart,
      description: "A fully functional clothing e-commerce website that allows users to browse, search, and purchase fashion products online. Replicates key features of modern online retail platforms with a smooth, user-friendly shopping experience.",
      scope: "Developed a working website which showcase all types of clothes based on categories",
      technologies: ["WordPress", "JDBC (Java Database Connectivity)"],
      category: "Web Development"
    },
    {
      title: "E-Commerce Application (Clothing)",
      type: "Application",
      icon: Smartphone,
      description: "An Online Apparel Shopping Application designed to enhance customer experience in today's fast-growing e-commerce world. Based on the Engel-Kollat-Blackwell (EKB) Model, analyzing consumer decision-making patterns for online clothing purchases.",
      scope: "Defines comprehensive functionality and boundaries with potential for future development",
      technologies: ["Python", "MongoDB", "Windows Platform"],
      category: "Application Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Scope:</h4>
                    <p className="text-sm text-muted-foreground">{project.scope}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;