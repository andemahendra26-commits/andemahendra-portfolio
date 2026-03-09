import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Code,
  Globe,
  Database,
  Users,
  Clock,
  MessageCircle,
  Lightbulb,
  Target
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: Brain,
      skills: ["Prompt Engineering", "RAGs", "LLMs", "NLP"],
      desc: "Specializing in document-aware intelligence and scalable model deployment."
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["C", "OOPS", "Java", "Python"],
      desc: "Strong foundation in data structures and object-oriented principles."
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "FastAPI"],
      desc: "Crafting performant backends and interactive user interfaces."
    },
    {
      title: "Data Management",
      icon: Database,
      skills: ["SQL", "MongoDB", "Vector DBs"],
      desc: "Expertise in both relational and high-performance vector storage."
    }
  ];

  const softSkills = [
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Teamwork", icon: Users },
    { name: "Time Management", icon: Clock },
    { name: "Communication", icon: MessageCircle },
    { name: "Research", icon: Target }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">Toolbox</Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A comprehensive suite of technical proficiencies tailored for the modern AI and software landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shrink-0">
                  <category.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{category.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-foreground/5 hover:bg-foreground hover:text-background transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card p-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center text-gradient uppercase tracking-widest">Interpersonal Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-4 group text-center">
                <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-soft">
                  <skill.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold uppercase tracking-tighter text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;