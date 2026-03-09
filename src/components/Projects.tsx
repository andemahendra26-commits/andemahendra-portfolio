import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Smartphone, Bot, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import alfredoRagImage from "@/assets/projects/alfredo-ai-chatbot.png";

const Projects = () => {
  const projects = [
    {
      title: "Alfredo.AI - RAG Chatbot",
      type: "AI Application",
      icon: MessageSquare,
      description: "A Retrieval-Augmented Generation (RAG) based AI Chatbot that allows users to upload documents and ask questions in natural language, receiving accurate, context-aware answers grounded only in their data.",
      scope: "Built a smart document-aware chatbot combining semantic search and LLMs with clean FastAPI backend, vector embeddings, and scalable retrieval pipeline",
      technologies: ["FastAPI", "Python", "RAG", "Vector Embeddings", "LLM", "NLP", "OpenAI API"],
      category: "AI Development",
      image: alfredoRagImage
    },
    {
      title: "E-Commerce Website (Clothing)",
      type: "Website",
      icon: ShoppingCart,
      description: "A fully functional clothing e-commerce website that allows users to browse, search, and purchase fashion products online.",
      scope: "Developed a working website which showcase all types of clothes based on categories",
      technologies: ["WordPress", "JDBC (Java Database Connectivity)"],
      category: "Web Development",
      image: "/lovable-uploads/4e5746ac-e24a-4692-9807-48eb78a52a97.png"
    },
    {
      title: "E-Commerce Application (Clothing)",
      type: "Application",
      icon: Smartphone,
      description: "An Online Apparel Shopping Application designed to enhance customer experience in today's fast-growing e-commerce world.",
      scope: "Defines comprehensive functionality and boundaries with potential for future development",
      technologies: ["Python", "MongoDB", "Windows Platform"],
      category: "Application Development",
      image: "/lovable-uploads/5c569caa-9b04-4336-9ab6-2189d9382fb8.png"
    },
    {
      title: "Alfredo AI Agent",
      type: "AI Agent",
      icon: Bot,
      description: "A custom-trained AI personal assistant built using AgentX.so platform. Alfredo is designed to provide intelligent responses and assistance across various domains.",
      scope: "Developed and trained a personalized AI agent with multi-model integration for comprehensive AI assistance",
      technologies: ["AgentX.so", "OpenAI API", "Llama", "Anthropic", "Grok", "DeepSeek"],
      category: "AI Development",
      image: "/lovable-uploads/c113e111-f5c7-4ad8-9df4-31d2d382bcc7.png",
      demoUrl: "https://app.agentx.so/shared-chat/?agent=688a1e4a42b87b91d3bab664"
    }
  ];

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden bg-background"
    >
      {/* Decorative background text */}
      <div className="absolute top-20 -right-20 text-[15rem] font-bold text-foreground/5 select-none pointer-events-none rotate-90">
        WORKS
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mb-24"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">Selected Portfolio</Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of my work spanning AI development, full-stack applications, and research-driven solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="glass-card overflow-hidden h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border-white/10">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-6 mt-auto">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-3">Core Tech</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-foreground/5 rounded-full border border-foreground/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="text-xs text-muted-foreground self-center">+{project.technologies.length - 5} more</span>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="link"
                      className="p-0 h-auto text-foreground font-bold flex items-center gap-2 group/btn"
                    >
                      Explore Project
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;