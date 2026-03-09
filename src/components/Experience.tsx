import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

import technohacksLogo from "@/assets/logos/technohacks-logo.jpg";
import developersArenaLogo from "@/assets/logos/developers-arena-logo.jpg";
import viswamLogo from "@/assets/logos/viswam-logo.jpg";
import switch2itjobsLogo from "@/assets/logos/switch2itjobs-logo.jpg";
import rovixAiLogo from "@/assets/logos/rovix-ai-logo.png";

const Experience = () => {
  const experiences = [
    {
      title: "Prompt Engineer",
      company: "Rovix AI",
      duration: "Jan 2026 - Present",
      type: "Full-time",
      logo: rovixAiLogo,
      description: "Shaping human-AI interaction by designing and refining prompt systems. Collaborating with product teams to optimize AI models for tone, accuracy, and production readiness."
    },
    {
      title: "Prompt Engineer Intern",
      company: "TechnoHacks EduTech",
      duration: "Nov 2025 - Dec 2025",
      type: "Internship",
      logo: technohacksLogo,
      description: "Developed structured prompt libraries and optimized query performance for varied LLM use cases at an ISO certified company."
    },
    {
      title: "Data Science Intern",
      company: "The Developers Arena",
      duration: "Nov 2025 - Dec 2025",
      type: "Internship",
      logo: developersArenaLogo,
      description: "Built predictive models and derived insights using ML techniques in an Agile team environment."
    },
    {
      title: "AI Developer Intern",
      company: "Viswam.AI – Summer of AI 2025",
      duration: "Aug 2025 - Sep 2025",
      type: "Internship",
      logo: viswamLogo,
      description: "Contributed to Telugu-LLM foundation and open-source AI projects in a collaborative initiative with IIIT Hyderabad and Meta."
    }
  ];

  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mb-24 lg:text-right ml-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">Career Path</Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-gradient">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl ml-auto leading-relaxed">
            A track record of leveraging AI and data science to solve complex problems across internships and professional roles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-foreground/10" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex-1 w-full">
                  <div className="glass-card p-8 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/50 p-2 flex items-center justify-center border border-white/20 shrink-0">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-xs font-bold text-foreground/50">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <Badge variant="secondary" className="opacity-50">{exp.type}</Badge>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-20 flex items-center justify-center w-12 h-12">
                  <div className="w-4 h-4 rounded-full bg-foreground shadow-elegant ring-8 ring-foreground/5" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;