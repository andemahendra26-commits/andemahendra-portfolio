import { Badge } from "@/components/ui/badge";
import { Network, Mic, Cpu, Server, Code, Database } from "lucide-react";
import { motion } from "framer-motion";
import skillsArt from "@/assets/ascii/skills.png";
import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  {
    title: "Agentic AI & Multi-Agent Systems",
    icon: Network,
    skills: ["Multi-Agent Orchestration", "RAG Pipelines", "Prompt Engineering", "LLM Orchestration"]
  },
  {
    title: "Voice AI",
    icon: Mic,
    skills: ["LiveKit", "Twilio", "ElevenLabs", "Sarvam AI", "Deepgram", "WebRTC"]
  },
  {
    title: "Local & Cloud LLMs",
    icon: Cpu,
    skills: ["Ollama", "Hermes", "Qwen", "llama.cpp", "NVIDIA NIM", "Groq"]
  },
  {
    title: "Backend & Infrastructure",
    icon: Server,
    skills: ["FastAPI", "Docker", "Microservices", "WebSocket", "n8n Automation"]
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "PHP (CodeIgniter 4)"]
  },
  {
    title: "Data",
    icon: Database,
    skills: ["SQL", "MongoDB", "NumPy", "Vector Embeddings"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Skills"
          art={skillsArt}
          subtitle="The stack I use to build and ship AI systems"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 bg-primary rounded-lg grid place-items-center">
                  <category.icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <Badge variant="secondary" className="text-sm font-normal">
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
