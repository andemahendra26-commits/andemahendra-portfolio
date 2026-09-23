import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Languages, MapPin } from "lucide-react";
import aboutArt from "@/assets/ascii/about.png";
import SectionHeading from "@/components/SectionHeading";

const facts = [
  {
    icon: Briefcase,
    label: "Currently",
    value: "GenAI Engineer at Rovix AI"
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech CSE (AI & ML), Siddhartha Institute of Engineering and Technology, 2022–2026"
  },
  {
    icon: Languages,
    label: "Languages",
    value: "English, Hindi, Telugu"
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Hyderabad, India · open to remote"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="About" art={aboutArt} />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-3 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p>
              I'm a <span className="text-foreground font-medium">GenAI Engineer at Rovix AI</span>, promoted from
              Prompt Engineer, where I build multi-agent systems, LLM orchestration pipelines and production
              generative AI tooling.
            </p>
            <p>
              I like building things end to end: from multi-agent deliberation systems and self-hosted voice
              platforms to an NLP library published on PyPI. My focus is AI that is reliable once real users touch it.
            </p>
            <p className="text-sm md:text-base">
              Outside work: mythology books, informative podcasts and sci-fi films. I've also organised college
              fests and volunteered at donation camps.
            </p>
          </motion.div>

          <motion.dl
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            {facts.map((fact) => (
              <div key={fact.label} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <fact.icon className="w-5 h-5 mt-0.5 shrink-0 text-foreground" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{fact.label}</dt>
                  <dd className="text-sm text-foreground mt-0.5">{fact.value}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default About;
