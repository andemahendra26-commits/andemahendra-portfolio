import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";
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
import quantiumLogo from "@/assets/logos/quantium-logo.png";
import udemyLogo from "@/assets/logos/udemy-logo.png";
import awsLogo from "@/assets/logos/aws-logo.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      date: "September 2024",
      type: "AI/ML",
      logo: ibmLogo
    },
    {
      title: "Software Engineering Simulation",
      issuer: "Electronic Arts (FORAGE)",
      date: "February 2025",
      type: "Software Engineering",
      logo: eaLogo
    },
    {
      title: "Data Visualisation Insights",
      issuer: "TATA Group (FORAGE)",
      date: "May 2025",
      type: "Data Analytics",
      logo: tataLogo
    },
    {
      title: "Python Essential Training",
      issuer: "LinkedIn Learning",
      date: "May 2025",
      type: "Programming",
      logo: linkedinLogo
    },
    {
      title: "Data Analytics Simulation",
      issuer: "Deloitte (FORAGE)",
      date: "May 2025",
      type: "Data Analytics",
      logo: deloitteLogo
    },
    {
      title: "GenAI Job Simulation",
      issuer: "BCG (FORAGE)",
      date: "May 2025",
      type: "AI/ML",
      logo: bcgLogo
    },
    {
      title: "Software Engineering Simulation",
      issuer: "Accenture (FORAGE)",
      date: "May 2025",
      type: "Software Engineering",
      logo: accentureLogo
    },
    {
      title: "Prompt Engineering ChatGPT",
      issuer: "LinkedIn Learning",
      date: "May 2025",
      type: "AI/ML",
      logo: linkedinLogo
    },
    {
      title: "Vibe Coding Fundamentals",
      issuer: "LinkedIn Learning",
      date: "May 2025",
      type: "Programming",
      logo: linkedinLogo
    },
    {
      title: "Natural Language Processing",
      issuer: "Udemy",
      date: "June 2025",
      type: "AI/ML",
      logo: udemyLogo
    },
    {
      title: "Prompt Engineering",
      issuer: "Infosys",
      date: "June 2025",
      type: "AI/ML",
      logo: infosysLogo
    },
    {
      title: "AI Foundations Associate",
      issuer: "Oracle University",
      date: "June 2025",
      type: "AI/ML",
      logo: oracleLogo
    }
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">Validation</Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-gradient">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A comprehensive list of professional credentials validating expertise in AI, Data, and Software Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col h-full group hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Award className="w-6 h-6" />
                </div>
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="h-10 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                )}
              </div>

              <div className="flex-grow space-y-4">
                <Badge variant="secondary" className="bg-foreground/5 text-xs uppercase tracking-widest">{cert.type}</Badge>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">{cert.title}</h3>

                <div className="space-y-2 pt-4 border-t border-foreground/5">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <span className="text-primary">•</span>
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-all group/btn">
                  Verify Credentials
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">
            Total Certifications Obtained: <span className="text-foreground font-bold">{certifications.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;