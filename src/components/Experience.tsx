import { motion } from "framer-motion";
import experienceArt from "@/assets/ascii/experience.png";
import SectionHeading from "@/components/SectionHeading";

import technohacksLogo from "@/assets/logos/technohacks-logo.jpg";
import developersArenaLogo from "@/assets/logos/developers-arena-logo.jpg";
import viswamLogo from "@/assets/logos/viswam-logo.jpg";
import rovixAiLogo from "@/assets/logos/rovix-ai-logo.png";

interface Role {
  title: string;
  duration: string;
  type: string;
  highlights: string[];
}

interface ExperienceGroup {
  company: string;
  logo: string;
  roles: Role[];
}

const experienceGroups: ExperienceGroup[] = [
  {
    company: "Rovix AI",
    logo: rovixAiLogo,
    roles: [
      {
        title: "GenAI Engineer",
        duration: "Jun 2026 – Present",
        type: "Full-time",
        highlights: [
          "Promoted from Prompt Engineer after five months",
          "Build end-to-end generative AI systems: multi-agent architectures, LLM orchestration and production AI pipelines",
          "Own model integration, agent tooling and system reliability across the stack"
        ]
      },
      {
        title: "Prompt Engineer",
        duration: "Jan 2026 – Jun 2026",
        type: "Full-time",
        highlights: [
          "Designed, tested and refined structured prompt systems for production use cases",
          "Tuned model responses for accuracy, tone and performance",
          "Worked with product and engineering teams to turn business goals into AI instructions"
        ]
      }
    ]
  },
  {
    company: "TechnoHacks EduTech",
    logo: technohacksLogo,
    roles: [
      {
        title: "Prompt Engineer Intern",
        duration: "Nov 2025 – Dec 2025",
        type: "Internship",
        highlights: [
          "Developed and optimized prompts across multiple AI models",
          "Analyzed prompt performance metrics and documented prompt best practices"
        ]
      }
    ]
  },
  {
    company: "The Developers Arena",
    logo: developersArenaLogo,
    roles: [
      {
        title: "Data Science Intern",
        duration: "Nov 2025 – Dec 2025",
        type: "Internship",
        highlights: [
          "Built predictive models and ML-driven analyses on real-world datasets",
          "Worked in an Agile team under experienced mentors"
        ]
      }
    ]
  },
  {
    company: "Viswam.AI · Summer of AI 2025",
    logo: viswamLogo,
    roles: [
      {
        title: "AI Developer Intern",
        duration: "Aug 2025 – Sep 2025",
        type: "Internship",
        highlights: [
          "Selected for a program run by Viswam.AI, Swecha, IIIT Hyderabad, Meta, TASK and HYSEA",
          "Contributed data curation to the foundational Telugu LLM project",
          "Covered model fine-tuning and open-source AI development in a 4-week intensive"
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Experience"
          art={experienceArt}
          subtitle="From prompt engineering to building production GenAI systems"
        />

        <ol className="max-w-4xl mx-auto space-y-6">
          {experienceGroups.map((group, index) => (
            <motion.li
              key={group.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-xl border border-border bg-card shadow-soft p-5 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-white border border-border grid place-items-center p-1">
                  <img src={group.logo} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{group.company}</h3>
                  {group.roles.length > 1 && (
                    <p className="text-sm text-muted-foreground">
                      {group.roles.length} roles · {group.roles[group.roles.length - 1].duration.split(" – ")[0]} – {group.roles[0].duration.split(" – ")[1]}
                    </p>
                  )}
                </div>
              </div>

              <div className={group.roles.length > 1 ? "relative pl-5 sm:pl-6 space-y-6" : ""}>
                {group.roles.length > 1 && (
                  <span className="absolute left-[4px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
                )}
                {group.roles.map((role, roleIndex) => (
                  <div key={role.title} className="relative">
                    {group.roles.length > 1 && (
                      <span
                        className={`absolute -left-5 sm:-left-6 top-2 w-2.5 h-2.5 rounded-full ring-4 ring-card ${roleIndex === 0 ? "bg-foreground" : "bg-muted-foreground/50"}`}
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground">{role.title}</h4>
                      {roleIndex === 0 && group.roles.length > 1 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-foreground text-background">
                          Promoted
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {role.duration} · {role.type}
                    </p>
                    <ul className="space-y-1.5">
                      {role.highlights.map((point) => (
                        <li key={point} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="mt-2.5 w-1 h-1 rounded-full bg-foreground/50 shrink-0" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>

        <p className="max-w-4xl mx-auto mt-6 text-sm text-muted-foreground text-center sm:text-left">
          Earlier: Web Manager and Marketing Head at Switch2ITjobs.com (Apr–Sep 2022).
        </p>
      </div>
    </section>
  );
};

export default Experience;
