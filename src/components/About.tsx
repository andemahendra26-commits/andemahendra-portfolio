import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, Music, Shield, Cpu, Activity } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const languages = [
    { name: "ENGLISH", level: "C2_FLUID" },
    { name: "HINDI", level: "NATIVE" },
    { name: "TELUGU", level: "NATIVE" }
  ];

  const hobbies = [
    { name: "Mythology_Analytics", icon: BookOpen },
    { name: "Knowledge_Feeds", icon: Activity },
    { name: "Sci_Fi_Simulation", icon: Globe }
  ];

  return (
    <section id="about" className="py-32 relative bg-background overflow-hidden border-t border-primary/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-hud text-xs">Unit_Profile_v1.0</span>
            <div className="h-[1px] w-24 bg-primary/20" />
            <Shield className="w-5 h-5 text-primary" />
            <div className="h-[1px] w-24 bg-primary/20" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-center mb-12">BIOMETRIC_DATA</h2>

          <div className="stark-card p-12 relative group bg-primary/5">
            <div className="absolute top-4 right-8 font-mono text-[8px] opacity-20">ENCRYPTION: AES-X</div>
            <h3 className="text-hud text-sm font-bold mb-8">MISSION_STATEMENT</h3>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono leading-relaxed border-l-4 border-primary pl-8 italic">
              "NEUROMORPHIC ENGINEER FOCUSED ON BRIDGING THE GAP BETWEEN HUMAN INTUITION AND MACHINE INTELLIGENCE. DRIVEN BY THE ARCHITECTURE OF TOMORROW."
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Languages HUD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="stark-card p-8"
          >
            <div className="text-hud text-[10px] mb-6 flex justify-between items-center">
              <span>LEXICON_MODULE</span>
              <Cpu className="w-4 h-4 opacity-40" />
            </div>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-white font-bold">{lang.name}</span>
                    <span className="text-primary">{lang.level}</span>
                  </div>
                  <div className="h-[1px] w-full bg-primary/10 group-hover:bg-primary/40 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests HUD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="stark-card p-8"
          >
            <div className="text-hud text-[10px] mb-6 flex justify-between items-center">
              <span>INTEREST_NODES</span>
              <Activity className="w-4 h-4 opacity-40" />
            </div>
            <div className="space-y-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-sm bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <hobby.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground group-hover:text-white transition-colors">
                    {hobby.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Logistics HUD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="stark-card p-8"
          >
            <div className="text-hud text-[10px] mb-6 flex justify-between items-center">
              <span>EXTRACURRICULAR_LOGS</span>
              <Shield className="w-4 h-4 opacity-40" />
            </div>
            <div className="space-y-6">
              {[
                "EVENT_ORG_SYMPOSIUM",
                "SOCIAL_SERVICE_UNIT#42",
                "PHILANTHROPIC_OPS_ACTIVE"
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-primary/20 group-hover:bg-primary transition-all animate-pulse" />
                  <span className="text-[11px] font-mono text-muted-foreground group-hover:text-white transition-colors">
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
