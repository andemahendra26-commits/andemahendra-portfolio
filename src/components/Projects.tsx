import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, ShoppingCart, Smartphone, Bot } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const projects = [
    {
      title: "E-Commerce Website (Clothing)",
      type: "Website",
      icon: ShoppingCart,
      description: "A fully functional clothing e-commerce website that allows users to browse, search, and purchase fashion products online. Replicates key features of modern online retail platforms with a smooth, user-friendly shopping experience.",
      scope: "Developed a working website which showcase all types of clothes based on categories",
      technologies: ["WordPress", "JDBC (Java Database Connectivity)"],
      category: "Web Development",
      image: "/lovable-uploads/4e5746ac-e24a-4692-9807-48eb78a52a97.png"
    },
    {
      title: "E-Commerce Application (Clothing)",
      type: "Application",
      icon: Smartphone,
      description: "An Online Apparel Shopping Application designed to enhance customer experience in today's fast-growing e-commerce world. Based on the Engel-Kollat-Blackwell (EKB) Model, analyzing consumer decision-making patterns for online clothing purchases.",
      scope: "Defines comprehensive functionality and boundaries with potential for future development",
      technologies: ["Python", "MongoDB", "Windows Platform"],
      category: "Application Development",
      image: "/lovable-uploads/5c569caa-9b04-4336-9ab6-2189d9382fb8.png"
    },
    {
      title: "Alfredo AI Agent",
      type: "AI Agent",
      icon: Bot,
      description: "A custom-trained AI personal assistant built using AgentX.so platform. Alfredo is designed to provide intelligent responses and assistance across various domains, integrating multiple AI models for enhanced performance and versatility.",
      scope: "Developed and trained a personalized AI agent with multi-model integration for comprehensive AI assistance",
      technologies: ["AgentX.so", "OpenAI API", "Llama", "Anthropic", "Grok", "DeepSeek"],
      category: "AI Development",
      image: "/lovable-uploads/c113e111-f5c7-4ad8-9df4-31d2d382bcc7.png",
      demoUrl: "https://app.agentx.so/shared-chat/?agent=688a1e4a42b87b91d3bab664"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-muted/30 relative overflow-hidden"
      style={{ opacity }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          style={{ y, scale }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Showcasing my technical expertise through real-world applications
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-soft hover:shadow-elegant transition-all duration-500 h-full backdrop-blur-sm">
                      <CardHeader className="pb-4">
                        <motion.div 
                          className="flex items-start justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div 
                              className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <project.icon className="w-6 h-6 text-primary-foreground" />
                            </motion.div>
                            <div>
                              <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                              <Badge variant="secondary" className="mt-1">
                                {project.category}
                              </Badge>
                            </div>
                          </div>
                        </motion.div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {project.image && (
                          <motion.div 
                            className="w-full h-48 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500"
                            />
                          </motion.div>
                        )}
                        <motion.p 
                          className="text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.div 
                          className="space-y-3"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Project Scope:</h4>
                            <p className="text-sm text-muted-foreground">{project.scope}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: techIndex * 0.05,
                                    ease: "easeOut"
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <Badge variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex gap-3 pt-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                              <Github className="w-4 h-4" />
                              View Code
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              size="sm" 
                              className="flex items-center gap-2"
                              asChild={!!project.demoUrl}
                            >
                              {project.demoUrl ? (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                  Try Alfredo
                                </a>
                              ) : (
                                <>
                                  <ExternalLink className="w-4 h-4" />
                                  Live Demo
                                </>
                              )}
                            </Button>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <CarouselPrevious className="hover:scale-110 transition-transform duration-200" />
              <CarouselNext className="hover:scale-110 transition-transform duration-200" />
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;