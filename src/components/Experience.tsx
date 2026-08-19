import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import experienceArt from "@/assets/ascii/experience.png";

import technohacksLogo from "@/assets/logos/technohacks-logo.jpg";
import developersArenaLogo from "@/assets/logos/developers-arena-logo.jpg";
import viswamLogo from "@/assets/logos/viswam-logo.jpg";
import switch2itjobsLogo from "@/assets/logos/switch2itjobs-logo.jpg";
import rovixAiLogo from "@/assets/logos/rovix-ai-logo.png";

const Experience = () => {

  const experienceGroups = [
    {
      company: "Rovix AI",
      logo: rovixAiLogo,
      roles: [
        {
          title: "GenAI Engineer",
          duration: "June 2026 - Present",
          type: "Full-time",
          description: "Promoted from Prompt Engineer to GenAI Engineer at Rovix AI. Now building end-to-end generative AI systems — multi-agent architectures, LLM orchestration, and production-grade AI pipelines — beyond prompt design alone, working across the full stack of model integration, agent tooling, and system reliability."
        },
        {
          title: "Prompt Engineer",
          duration: "January 2026 - June 2026",
          type: "Full-time",
          description: "At Rovix AI, I work on shaping how humans interact with artificial intelligence. As a Prompt Engineer, my role focuses on designing, testing, and refining prompts that help AI models think better, respond smarter, and perform consistently in real-world use cases. I collaborate closely with product and development teams to translate business goals into effective AI instructions. From building structured prompt systems to optimizing responses for accuracy, tone, and performance, I ensure that AI outputs are not just correct — but useful, scalable, and production-ready."
        }
      ]
    },
    {
      company: "TechnoHacks EduTech",
      logo: technohacksLogo,
      roles: [
        {
          title: "Prompt Engineer Intern",
          duration: "November 2025 - December 2025",
          type: "Internship",
          description: "Working on AI prompt engineering and optimization at an ISO certified tech company. Developing effective prompts for various AI models, analyzing prompt performance metrics, and creating documentation for prompt best practices. Contributing to AI-powered solutions while gaining hands-on experience with cutting-edge language models and practical AI applications."
        }
      ]
    },
    {
      company: "The Developers Arena",
      logo: developersArenaLogo,
      roles: [
        {
          title: "Data Science Intern",
          duration: "November 2025 - December 2025",
          type: "Internship",
          description: "Working on real-world data science projects under experienced mentors. Applying machine learning techniques for data analysis, building predictive models, and extracting actionable insights from datasets. Collaborating in teams using Agile methodologies while developing problem-solving skills through practical, industry-relevant challenges."
        }
      ]
    },
    {
      company: "Viswam.AI – Summer of AI 2025",
      logo: viswamLogo,
      roles: [
        {
          title: "AI Developer Intern",
          duration: "August 2025 - September 2025",
          type: "Internship",
          description: "Selected for the world's largest AI internship program, a collaborative initiative by Viswam.AI, Swecha, IIIT Hyderabad, Meta, TASK, and HYSEA. Completed a 4-week intensive program focused on practical AI software development, model fine-tuning, and open-source projects. Gained hands-on experience in Python for AI applications, data curation for culturally relevant AI models, and contributed to the foundational Telugu LLM project."
        }
      ]
    },
    {
      company: "Switch2ITjobs.com",
      logo: switch2itjobsLogo,
      roles: [
        {
          title: "Web Manager",
          duration: "June 2022 - September 2022",
          type: "Full-time",
          description: "Managed web operations and maintained the company's digital presence."
        },
        {
          title: "Marketing Head",
          duration: "April 2022 - June 2022",
          type: "Full-time",
          description: "Led marketing initiatives and strategic campaigns to drive business growth."
        }
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.44 }}
          viewport={{ once: true }}
        >
          <h2 className="sr-only">Experience</h2>
          <img src={experienceArt} alt="" aria-hidden="true" className="dark:invert h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key responsibilities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01, y: -3 }}
              transition={{ duration: 0.275, delay: index * 0.11 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-background flex items-center justify-center border border-border">
                        <img src={group.logo} alt={`${group.company} logo`} className="w-14 h-14 object-contain" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {group.company}
                      </h3>
                      {group.roles.length > 1 && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {group.roles.length} roles · {group.roles[group.roles.length - 1].duration.split(" - ")[0]} - {group.roles[0].duration.split(" - ")[1]}
                        </p>
                      )}

                      <div className={group.roles.length > 1 ? "relative pl-6 space-y-8 mt-4" : ""}>
                        {group.roles.length > 1 && (
                          <span className="absolute left-[5px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
                        )}
                        {group.roles.map((role, roleIndex) => (
                          <div key={roleIndex} className="relative">
                            {group.roles.length > 1 && (
                              <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" aria-hidden="true" />
                            )}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                              <h4 className="text-xl text-primary font-medium">
                                {role.title}
                                {roleIndex === 0 && group.roles.length > 1 && (
                                  <span className="ml-2 align-middle inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                    Promoted
                                  </span>
                                )}
                              </h4>
                              <div className="lg:text-right">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground">
                                  {role.type}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <Calendar className="w-4 h-4" />
                              <span>{role.duration}</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                              {role.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;