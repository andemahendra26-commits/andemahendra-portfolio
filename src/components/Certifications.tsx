import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink, Shield, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";

import eaLogo from "@/assets/logos/ea-logo.png";
import ibmLogo from "@/assets/logos/ibm-logo.png";
import tataLogo from "@/assets/logos/tata-logo.png";
import linkedinLogo from "@/assets/logos/linkedin-logo.png";
import deloitteLogo from "@/assets/logos/deloitte-logo.png";
import bcgLogo from "@/assets/logos/bcg-logo.png";
import accentureLogo from "@/assets/logos/accenture-logo.png";
import oracleLogo from "@/assets/logos/oracle-logo.png";
import infosysLogo from "@/assets/logos/infosys-logo.png";
import udemyLogo from "@/assets/logos/udemy-logo.png";

const Certifications = () => {
  const certifications = [
    {
      title: "ARTIFICIAL_INTELLIGENCE_FOUNDATION",
      issuer: "IBM_SKILLSBUILD",
      date: "SEP_2024",
      type: "AI/ML",
      logo: ibmLogo
    },
    {
      title: "SOFTWARE_ENGINEERING_SIMULATION",
      issuer: "EA_FORAGE",
      date: "FEB_2025",
      type: "SWE",
      logo: eaLogo
    },
    {
      title: "DATA_VISUALISATION_INSIGHTS",
      issuer: "TATA_GROUP",
      date: "MAY_2025",
      type: "ANALYTICS",
      logo: tataLogo
    },
    {
      title: "PYTHON_ESSENTIAL_PHASE",
      issuer: "LINKEDIN_LEARNING",
      date: "MAY_2025",
      type: "CODE",
      logo: linkedinLogo
    },
    {
      title: "DATA_ANALYTICS_PROTOCOL",
      issuer: "DELOITTE_FORAGE",
      date: "MAY_2025",
      type: "ANALYTICS",
      logo: deloitteLogo
    },
    {
      title: "GEN_AI_JOB_SIMULATION",
      issuer: "BCG_FORAGE",
      date: "MAY_2025",
      type: "AI/ML",
      logo: bcgLogo
    },
    {
      title: "PROMPT_ENGINEERING_GPT",
      issuer: "INFOSYS_CERT",
      date: "JUN_2025",
      type: "AI/ML",
      logo: infosysLogo
    },
    {
      title: "AI_FOUNDATIONS_ASSOCIATE",
      issuer: "ORACLE_UNI",
      date: "JUN_2025",
      type: "AI/ML",
      logo: oracleLogo
    }
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-background border-t border-primary/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-hud text-xs">Auth_Module_v3.2_Active</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8">VALIDATED_LOGS</h2>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed border-l-2 border-primary/20 pl-6">
            CRYPTOGRAPHICALLY VERIFIED CREDENTIALS. STATUS: AUTHENTICATED.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="stark-card p-6 flex flex-col group border-primary/10"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all">
                  <Award className="w-5 h-5 group-hover:text-background" />
                </div>
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="h-8 w-auto grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
                )}
              </div>

              <div className="flex-grow space-y-4">
                <h3 className="text-sm font-black leading-tight group-hover:text-primary transition-colors line-clamp-2 font-mono">
                  {cert.title}
                </h3>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase opacity-60">
                    ISSUER: {cert.issuer}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[9px] font-mono text-primary bg-primary/10 px-2 py-0.5 border border-primary/20 rounded-sm">
                      {cert.date}
                    </div>
                    <div className="text-[8px] font-mono opacity-20">TYPE_::{cert.type}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-tighter border border-primary/10 py-2 hover:bg-primary/5 transition-all">
                  VERIFY_LOG
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex items-center justify-center gap-8 opacity-20 group">
          <div className="h-[1px] flex-grow bg-primary/20" />
          <div className="text-[10px] font-mono">TOTAL_RECORDS: {certifications.length}</div>
          <div className="h-[1px] flex-grow bg-primary/20" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
