import { Badge } from "@/components/ui/badge";
import { Calendar, Shield, Cpu, Activity, Database } from "lucide-react";
import { motion } from "framer-motion";

import technohacksLogo from "@/assets/logos/technohacks-logo.jpg";
import developersArenaLogo from "@/assets/logos/developers-arena-logo.jpg";
import viswamLogo from "@/assets/logos/viswam-logo.jpg";
import rovixAiLogo from "@/assets/logos/rovix-ai-logo.png";

const Experience = () => {
  const experiences = [
    {
      id: "LOG_001",
      title: "PROMPT_ENGINEER",
      company: "ROVIX_AI",
      duration: "JAN_2026 - CURRENT",
      logo: rovixAiLogo,
      description: "SHAPING NEURAL INTERACTION BY DESIGNING ADVANCED PROMPT ARCHITECTURES. OPTIMIZING PRODUCTION-READY LLM OUTPUTS."
    },
    {
      id: "LOG_002",
      title: "PROMPT_ENGINEER_INTERN",
      company: "TECHNOHACKS_EDU",
      duration: "NOV_2025 - DEC_2025",
      logo: technohacksLogo,
      description: "ENGINEERED STRUCTURED PROMPT LIBRARIES. OPTIMIZED QUERY THROUGHPUT FOR COMPLEX AGENTIC WORKFLOWS."
    },
    {
      id: "LOG_003",
      title: "DATA_SCIENCE_INTERN",
      company: "DEV_ARENA",
      duration: "NOV_2025 - DEC_2025",
      logo: developersArenaLogo,
      description: "SYNTHESIZED PREDICTIVE MODELS. DERIVED HIGH-FIDELITY INSIGHTS THROUGH AGILE ANALYTIC PIPELINES."
    },
    {
      id: "LOG_004",
      title: "AI_DEVELOPMENT_UNIT",
      company: "VISWAM_AI",
      duration: "AUG_2025 - SEP_2025",
      logo: viswamLogo,
      description: "ARCHITECTED TELUGU-LLM COMPONENTS. COLLABORATED WITH IIIT HYDERABAD ON OPEN-SOURCE FOUNDATION MODELS."
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-background overflow-hidden border-t border-primary/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mb-24 lg:text-right ml-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-end gap-4 mb-4">
            <span className="text-hud text-xs">Registry_Log_Connected</span>
            <Database className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">DEPLOYMENT_HISTORY</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stark-card group flex flex-col md:flex-row items-center border-l-4 border-l-primary/30"
            >
              <div className="p-8 md:w-1/4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 bg-white/5">
                <div className="w-16 h-16 rounded-sm overflow-hidden bg-white mb-4 p-2 border border-primary/20">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                </div>
                <div className="text-[10px] font-mono text-primary font-bold">{exp.id}</div>
              </div>

              <div className="p-8 flex-grow space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="text-hud text-[11px] opacity-60">ORG: {exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 text-hud text-[10px] bg-primary/10 px-3 py-1 border border-primary/20 rounded-sm">
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-muted-foreground font-mono text-xs leading-relaxed max-w-2xl border-l border-primary/20 pl-4 py-1">
                  {exp.description}
                </p>
              </div>

              {/* HUD Element Right */}
              <div className="hidden lg:flex p-8 flex-col justify-between items-end opacity-20">
                <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center animate-spin-slow">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-[8px] font-mono mt-8">STATUS: VERIFIED</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
