import { Badge } from "@/components/ui/badge";
import { Brain, Database, Zap, Terminal, Code, Globe, Cpu, Activity } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "NEURAL_LINK",
      icon: Brain,
      skills: [
        { name: "LLM_ARCHITECTURE", level: 92 },
        { name: "RAG_PROTOCOL", level: 95 },
        { name: "NLP_SYNTHESIS", level: 88 },
        { name: "NEURAL_MODELS", level: 85 },
      ]
    },
    {
      title: "CORE_LOGIC",
      icon: Code,
      skills: [
        { name: "PYTHON_STARK", level: 95 },
        { name: "JAVA_LEGACY", level: 85 },
        { name: "FASTAPI_BRIDGE", level: 90 },
        { name: "C++_COMPILED", level: 80 },
      ]
    },
    {
      title: "DATA_SPHERE",
      icon: Database,
      skills: [
        { name: "VECTOR_STORAGE", level: 88 },
        { name: "MONGODB_STRUCT", level: 92 },
        { name: "SQL_RELATIONAL", level: 85 },
        { name: "DATA_CLEANING", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative bg-background overflow-hidden border-t border-primary/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center animate-pulse">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <span className="text-hud text-xs">Diagnostic_Protocol_Active</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">POWER_MODULES</h2>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed border-l-2 border-primary/20 pl-6">
            REAL-TIME CALIBRATION OF CORE COMPETENCIES. SYSTEM STABILITY: OPTIMAL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="stark-card p-8 group border-primary/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-hud text-[10px] font-bold tracking-widest">{category.title}</h3>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-mono opacity-60 uppercase">{skill.name}</span>
                      <span className="text-hud text-[10px] text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 relative overflow-hidden rounded-full">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Metadata Footer */}
              <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center opacity-30">
                <div className="text-[8px] font-mono">SECTOR_#{idx + 1}</div>
                <div className="text-[8px] font-mono">CALIBRATION: OK</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated HUD Overlay background */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary rounded-full opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
