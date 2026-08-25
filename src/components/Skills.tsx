import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Network,
  Mic,
  Cpu,
  Server,
  Code,
  Database,
  Users,
  Clock,
  MessageCircle,
  Lightbulb,
  Target
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import skillsArt from "@/assets/ascii/skills.png";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const skillCategories = [
    {
      title: "Agentic AI & Multi-Agent Systems",
      icon: Network,
      skills: ["Multi-Agent Orchestration", "RAG Pipelines", "Prompt Engineering", "LLM Orchestration"],
      color: "bg-primary"
    },
    {
      title: "Voice AI",
      icon: Mic,
      skills: ["LiveKit", "Twilio", "ElevenLabs", "Sarvam AI"],
      color: "bg-primary"
    },
    {
      title: "Local & Cloud LLMs",
      icon: Cpu,
      skills: ["Ollama", "Hermes", "Qwen", "llama.cpp", "NVIDIA NIM"],
      color: "bg-primary"
    },
    {
      title: "Backend & Infrastructure",
      icon: Server,
      skills: ["FastAPI", "Docker", "Microservices", "n8n Automation"],
      color: "bg-primary"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "PHP (CodeIgniter 4)"],
      color: "bg-primary"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["SQL", "MongoDB"],
      color: "bg-primary"
    }
  ];

  const softSkills = [
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Team collaboration", icon: Users },
    { name: "Time management", icon: Clock },
    { name: "Communication skills", icon: MessageCircle },
    { name: "Quick learner", icon: Target }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-background"
    >
      <motion.div
        className="container mx-auto px-4"
        style={{ y }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.44, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="sr-only">Skills</h2>
          <img src={skillsArt} alt="" aria-hidden="true" className="dark:invert h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical competencies and soft skills that drive my professional growth
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.33 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.275, delay: index * 0.055 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.165 }}
                      >
                        <category.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.165, delay: skillIndex * 0.028 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.33 }}
            viewport={{ once: true }}
          >
            Soft Skills
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.22, delay: index * 0.055 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.275 }}
                    >
                      <skill.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    </motion.div>
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;