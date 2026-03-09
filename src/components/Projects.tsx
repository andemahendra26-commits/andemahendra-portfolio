import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Smartphone, Bot, MessageSquare, ExternalLink, Cpu, Database, Layout } from "lucide-react";
import { motion } from "framer-motion";
import alfredoRagImage from "@/assets/projects/alfredo-ai-chatbot.png";

const Projects = () => {
  const projects = [
    {
      id: "PROJ-001",
      title: "Alfredo.AI - RAG Chatbot",
      type: "AI_CORE",
      icon: MessageSquare,
      description: "NEURAL NETWORK INTERFACE FOR DOCUMENT-AWARE CONVERSATIONAL AI. COMBINES SEMANTIC SEARCH WITH LARGE LANGUAGE MODELS.",
      technologies: ["FASTAPI", "PYTHON", "RAG", "OPENAI"],
      category: "AI_DEV",
      image: alfredoRagImage
    },
    {
      id: "PROJ-002",
      title: "STARK_COMMERCE",
      type: "WEB_INTERFACE",
      icon: ShoppingCart,
      description: "HIGH-CONVERSION E-COMMERCE ENGINE WITH INTEGRATED ANALYTICS PIPELINE AND SCALABLE PRODUCT ARCHITECTURE.",
      technologies: ["WORDPRESS", "JDBC", "MYSQL"],
      category: "WEB_DEV",
      image: "/lovable-uploads/4e5746ac-e24a-4692-9807-48eb78a52a97.png"
    },
    {
      id: "PROJ-003",
      title: "APPAREL_OS",
      type: "MOBILE_SYSTEM",
      icon: Smartphone,
      description: "CENTRALIZED MOBILE APPLICATION FOR CROSS-PLATFORM APPAREL MANAGEMENT AND CUSTOMER EXPERIENCE OPTIMIZATION.",
      technologies: ["PYTHON", "MONGODB", "WINDOWS"],
      category: "APP_DEV",
      image: "/lovable-uploads/5c569caa-9b04-4336-9ab6-2189d9382fb8.png"
    },
    {
      id: "PROJ-004",
      title: "ALFREDO_AGENT_X",
      type: "AUTONOMOUS_AGENT",
      icon: Bot,
      description: "MULTI-MODEL AI AGENT TRAINED ON CUSTOM DATASETS FOR DOMAIN-SPECIFIC PROBLEM SOLVING AND AUTOMATION.",
      technologies: ["AGENTX", "LLAMA", "GROK", "DEEPSEEK"],
      category: "AI_DEV",
      image: "/lovable-uploads/c113e111-f5c7-4ad8-9df4-31d2d382bcc7.png",
      demoUrl: "https://app.agentx.so/shared-chat/?agent=688a1e4a42b87b91d3bab664"
    }
  ];

  return (
    <section id="projects" className="py-32 relative bg-background overflow-hidden">
      {/* HUD Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-hud text-xs">Project_Schematics_Archive</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">SELECTED_WORKS</h2>
            <p className="text-xl text-muted-foreground font-mono">
              ENGINEERING INTELLIGNCE THROUGH CODE. ACCESSING PROJECT_LOGS...
            </p>
          </div>
          <div className="pb-2">
            <div className="text-hud text-[10px] text-right mb-2">DB_CONNECTED</div>
            <div className="flex gap-2">
              <div className="w-12 h-[2px] bg-primary" />
              <div className="w-4 h-[2px] bg-primary/30" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stark-card group cursor-crosshair"
            >
              {/* Card Header HUD */}
              <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-hud text-[10px] font-bold">{project.id}</span>
                </div>
                <span className="text-hud text-[10px] opacity-40">{project.type}</span>
              </div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />

                {/* Tech Badges on Image */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-[9px] font-mono bg-primary text-background px-2 py-0.5 font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <project.icon className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                </div>

                <p className="text-muted-foreground font-mono text-xs leading-relaxed border-l-2 border-primary/20 pl-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="text-[10px] font-mono text-primary/40">
                    CAT: {project.category}
                  </div>
                  <button className="flex items-center gap-2 text-hud text-[10px] font-bold text-primary group-hover:glow-primary transition-all">
                    INIT_HANDSHAKE
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative Scan Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/30 transform translate-y-[-100%] group-hover:translate-y-[600px] transition-transform duration-[2000ms] linear" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
