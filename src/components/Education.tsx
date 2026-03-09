import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "B.TECH_CS_AI_ML",
      institution: "SIET_HYDERABAD",
      location: "HYD_IN",
      duration: "2022_2026",
      grade: "CGPA: 7.0",
      type: "BACHELOR"
    },
    {
      degree: "INTERMEDIATE_MPC",
      institution: "SRI_GAYATRI",
      location: "HYD_IN",
      duration: "2019_2021",
      grade: "63%",
      type: "SECONDARY"
    },
    {
      degree: "SSC_STANDARD",
      institution: "NAGARJUNA_MODEL",
      location: "HYD_IN",
      duration: "2018_2019",
      grade: "92%",
      type: "FOUNDATION"
    }
  ];

  return (
    <section id="education" className="py-32 bg-background relative border-t border-primary/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Database className="w-5 h-5 text-primary" />
            <span className="text-hud text-xs">Knowledge_Base_Archive</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8">ACADEMIC_MATRIX</h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-mono leading-relaxed">
            CORE FOUNDATIONAL DATA AND SPECIALIZED RESEARCH TRACKS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stark-card p-10 flex flex-col group h-full border-primary/10"
            >
              <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mb-10 group-hover:bg-primary transition-all">
                <GraduationCap className="w-6 h-6 group-hover:text-background" />
              </div>

              <div className="flex-grow space-y-6">
                <div>
                  <h3 className="text-xl font-black mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                  <div className="text-hud text-[10px] opacity-60 uppercase tracking-widest">{edu.institution}</div>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-mono opacity-50">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono opacity-50">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-primary/10 flex items-center justify-between">
                <div className="text-lg font-black text-primary font-mono">{edu.grade}</div>
                <div className="text-[9px] font-mono py-1 px-3 border border-primary/20 rounded-full">{edu.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
