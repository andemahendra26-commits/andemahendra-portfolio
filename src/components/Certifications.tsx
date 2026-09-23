import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import certificationsArt from "@/assets/ascii/certifications.png";
import SectionHeading from "@/components/SectionHeading";

import awsLogo from "@/assets/logos/aws-logo.svg";
import oracleLogo from "@/assets/logos/oracle-logo.svg";
import anthropicLogo from "@/assets/logos/anthropic-logo.svg";
import gfgLogo from "@/assets/logos/geeksforgeeks-logo.svg";
import udemyLogo from "@/assets/logos/udemy-logo.svg";
import intelLogo from "@/assets/logos/intel-logo.svg";
import infosysLogo from "@/assets/logos/infosys-logo.svg";
import linkedinLogo from "@/assets/logos/linkedin-logo.svg";
import ibmLogo from "@/assets/logos/ibm-logo.png";
import jpmorganLogo from "@/assets/logos/jpmorgan-logo.svg";
import quantiumLogo from "@/assets/logos/quantium-logo.png";
import tataLogo from "@/assets/logos/tata-logo.png";
import accentureLogo from "@/assets/logos/accenture-logo.svg";
import bcgLogo from "@/assets/logos/bcg-logo.png";
import eaLogo from "@/assets/logos/ea-logo.png";
import deloitteLogo from "@/assets/logos/deloitte-logo.png";

interface Credential {
  title: string;
  issuer: string;
  logo: string;
  date: string;
  skills: string[];
}

// Proctored certification exams
const certifications: Credential[] = [
  { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", logo: awsLogo, date: "Aug 2025", skills: ["Generative AI", "AI Agents", "Amazon Bedrock"] },
  { title: "Oracle Fusion AI Agent Studio Foundations Associate", issuer: "Oracle", logo: oracleLogo, date: "Aug 2025", skills: ["AI Agents", "Oracle Fusion Cloud", "AI Productivity"] },
  { title: "AWS Certified Machine Learning – Specialty", issuer: "Amazon Web Services", logo: awsLogo, date: "Jul 2025", skills: ["Machine Learning", "Amazon SageMaker", "Amazon Bedrock"] },
  { title: "OCI 2025 Certified AI Foundations Associate", issuer: "Oracle", logo: oracleLogo, date: "Jun 2025", skills: ["LLMs", "RAG", "OCI Generative AI"] }
];

const courses: Credential[] = [
  { title: "Claude Code 101", issuer: "Anthropic", logo: anthropicLogo, date: "May 2026", skills: ["Agentic Coding", "Claude Code", "Context Management"] },
  { title: "Claude 101", issuer: "Anthropic", logo: anthropicLogo, date: "May 2026", skills: ["Generative AI", "AI Productivity"] },
  { title: "Agentic AI – Skill Up", issuer: "GeeksforGeeks", logo: gfgLogo, date: "Mar 2026", skills: ["AI Agents", "AI System Design", "LLM Integration"] },
  { title: "Generative AI Architectures with LLM, Prompt, RAG, Vector DB", issuer: "Udemy", logo: udemyLogo, date: "Oct 2025", skills: ["LLMs", "RAG", "Vector Databases"] },
  { title: "AI Aware · AI For All", issuer: "Intel", logo: intelLogo, date: "Jul 2025", skills: ["Artificial Intelligence", "AI Productivity"] },
  { title: "Prompt Engineering", issuer: "Infosys", logo: infosysLogo, date: "Jun 2025", skills: ["Prompt Engineering", "Generative AI"] },
  { title: "Generative AI: Working with Large Language Models", issuer: "LinkedIn Learning", logo: linkedinLogo, date: "Jun 2025", skills: ["Generative AI", "LLMs"] },
  { title: "NLP – Natural Language Processing with Python", issuer: "Udemy", logo: udemyLogo, date: "May 2025", skills: ["NLP", "Deep Learning", "Python"] },
  { title: "Vibe Coding Fundamentals: Tools and Best Practices", issuer: "LinkedIn Learning", logo: linkedinLogo, date: "May 2025", skills: ["Vibe Coding", "Generative AI Tools"] },
  { title: "Prompt Engineering with ChatGPT", issuer: "LinkedIn Learning", logo: linkedinLogo, date: "May 2025", skills: ["Prompt Engineering", "LLMs", "ChatGPT"] },
  { title: "Sales Strategy: Using AI and Automation to Sell More", issuer: "LinkedIn Learning", logo: linkedinLogo, date: "May 2025", skills: ["Sales Automation", "Lead Generation", "Sales Forecasting"] },
  { title: "Python Essential Training", issuer: "LinkedIn Learning", logo: linkedinLogo, date: "May 2025", skills: ["Python", "Object-Oriented Programming"] },
  { title: "Introduction to Artificial Intelligence", issuer: "IBM", logo: ibmLogo, date: "Sep 2024", skills: ["Artificial Intelligence", "Machine Learning"] }
];

// Forage virtual job simulations
const simulations: Credential[] = [
  { title: "Software Engineering Job Simulation", issuer: "J.P. Morgan", logo: jpmorganLogo, date: "Oct 2025", skills: ["Java", "Spring Boot", "Kafka"] },
  { title: "Data Analytics Job Simulation", issuer: "Quantium", logo: quantiumLogo, date: "Jun 2025", skills: ["Data Analysis", "Customer Analytics"] },
  { title: "GenAI Powered Data Analytics Job Simulation", issuer: "Tata Group", logo: tataLogo, date: "Jun 2025", skills: ["Generative AI", "Data Analytics"] },
  { title: "Software Engineering Job Simulation", issuer: "Accenture", logo: accentureLogo, date: "May 2025", skills: ["Software Development", "Agile"] },
  { title: "GenAI Job Simulation", issuer: "Boston Consulting Group", logo: bcgLogo, date: "May 2025", skills: ["Generative AI", "Python", "Chatbots"] },
  { title: "Product Management Job Simulation", issuer: "Electronic Arts", logo: eaLogo, date: "May 2025", skills: ["Product Management", "Product Development"] },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte Australia", logo: deloitteLogo, date: "May 2025", skills: ["Data Analysis", "Data Mining"] },
  { title: "Data Visualisation: Empowering Business with Effective Insights", issuer: "Tata Group", logo: tataLogo, date: "May 2025", skills: ["Data Visualisation", "Data Analysis"] },
  { title: "Software Engineering Job Simulation", issuer: "Electronic Arts", logo: eaLogo, date: "Feb 2025", skills: ["Software Development", "SDLC"] }
];

const INITIAL_VISIBLE = 6;

const LogoTile = ({ src, issuer, size = "md" }: { src: string; issuer: string; size?: "md" | "lg" }) => (
  <div
    className={`shrink-0 rounded-lg bg-white border border-border grid place-items-center ${size === "lg" ? "w-28 h-14 px-3 py-2.5" : "w-16 h-11 px-2 py-2"
      }`}
  >
    <img src={src} alt="" title={issuer} loading="lazy" className="w-full h-full object-contain" />
  </div>
);

const SkillTags = ({ skills }: { skills: string[] }) => {
  if (!skills.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5 mt-2" aria-label="Key skills">
      {skills.map((skill) => (
        <li key={skill} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
          {skill}
        </li>
      ))}
    </ul>
  );
};

const CredentialList = ({ items }: { items: Credential[] }) => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, INITIAL_VISIBLE);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {visible.map((item) => (
          <li
            key={`${item.issuer}-${item.title}`}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
          >
            <LogoTile src={item.logo} issuer={item.issuer} />
            <div className="min-w-0">
              <h4 className="text-sm md:text-base font-medium text-foreground leading-snug">
                {item.title}
                <span className="sr-only">, {item.issuer}</span>
              </h4>
              <p className="text-sm text-muted-foreground mt-0.5">{item.date}</p>
              <SkillTags skills={item.skills} />
            </div>
          </li>
        ))}
      </ul>
      {items.length > INITIAL_VISIBLE && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            size="lg"
            className="h-12"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
          >
            {showAll ? "Show fewer" : `Show all ${items.length}`}
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </Button>
        </div>
      )}
    </>
  );
};

const Certifications = () => {
  const total = certifications.length + courses.length + simulations.length;

  return (
    <section id="certifications" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Certifications"
          art={certificationsArt}
          subtitle={`${total} certifications, courses and job simulations`}
        />

        {/* Certification exams */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.li
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-center gap-4 sm:flex-col sm:items-start rounded-xl border border-border bg-card p-5 shadow-soft"
            >
              <LogoTile src={cert.logo} issuer={cert.issuer} size="lg" />
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground leading-snug">
                  {cert.title}
                  <span className="sr-only">, {cert.issuer}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                <SkillTags skills={cert.skills} />
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Courses and simulations */}
        <Tabs defaultValue="courses" className="max-w-6xl mx-auto mt-12">
          <TabsList className="h-auto p-1 mb-6 w-full sm:w-auto grid grid-cols-2 sm:inline-flex">
            <TabsTrigger value="courses" className="min-h-10 px-4">
              Courses <span className="ml-1.5 text-muted-foreground">{courses.length}</span>
            </TabsTrigger>
            <TabsTrigger value="simulations" className="min-h-10 px-4">
              Job simulations <span className="ml-1.5 text-muted-foreground">{simulations.length}</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <CredentialList items={courses} />
          </TabsContent>
          <TabsContent value="simulations">
            <p className="text-sm text-muted-foreground mb-4">Virtual work experience programs completed on Forage.</p>
            <CredentialList items={simulations} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Certifications;
