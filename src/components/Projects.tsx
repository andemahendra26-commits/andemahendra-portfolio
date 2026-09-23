import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Smartphone,
  Bot,
  MessageSquare,
  Network,
  Phone,
  Mic,
  Globe,
  Library,
  Sparkles,
  Home,
  Github,
  ExternalLink,
  Package,
  ChevronDown,
  type LucideIcon
} from "lucide-react";
import { motion } from "framer-motion";
import projectsArt from "@/assets/ascii/projects.png";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/profile";

interface ProjectLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface Project {
  title: string;
  type: string;
  icon: LucideIcon;
  summary: string;
  built?: string;
  stat?: string;
  technologies: string[];
  links?: ProjectLink[];
}

const featuredProjects: Project[] = [
  {
    title: "Alfredo Council",
    type: "Multi-Agent System",
    icon: Network,
    stat: "14 models · 11 protocols",
    summary: "A multi-agent deliberation system where 14 AI models from the NVIDIA NIM catalog debate a question through 11 real coordination protocols (swarm, blackboard, hierarchical, debate and more) with a live HUD streaming every model's reasoning.",
    built: "The protocol engine, streaming HUD, and fault-tolerant orchestration layer for real-time multi-model deliberation.",
    technologies: ["FastAPI", "Python", "NVIDIA NIM", "Multi-Agent Systems", "NDJSON Streaming"],
    links: [
      { label: "Code", href: `${profile.github}/Ai_council`, icon: Github }
    ]
  },
  {
    title: "Alfredo NLP Library",
    type: "Open-source Python Library",
    icon: Library,
    stat: "pip install alfredo-ai",
    summary: "A self-contained, offline NLP toolkit implementing TF-IDF, TextRank and sentiment scoring from scratch, with no LLM API calls and no network latency.",
    built: "Authored and published a NumPy-vectorized library for summarization, sentiment analysis, classification and keyword extraction.",
    technologies: ["Python", "NumPy", "NLP", "TF-IDF", "PyPI"],
    links: [
      { label: "Code", href: `${profile.github}/alredo_py-NLP-lib`, icon: Github },
      { label: "PyPI", href: "https://pypi.org/project/alfredo-ai/", icon: Package }
    ]
  },
  {
    title: "Rovix Hermes Agent",
    type: "Self-improving Agent",
    icon: Sparkles,
    stat: "Telegram · Discord · Slack · CLI",
    summary: "A self-improving AI agent platform with a persistent learning loop. It creates and refines its own skills, retains memory across sessions, and runs across four channels from a single gateway.",
    built: "Deployed and customized a self-hosted autonomous agent with scheduled automations and cross-platform delivery for Rovix AI.",
    technologies: ["Python", "LLM Orchestration", "Agent Memory", "Automation"]
  }
];

const moreProjects: Project[] = [
  {
    title: "AI Voice Outbound Agent",
    type: "Voice AI",
    icon: Phone,
    summary: "Real-time voice agent that places outbound phone calls, holds live conversations and triggers actions, with LiveKit for streaming audio and Vobiz for SIP telephony.",
    technologies: ["LiveKit", "Vobiz", "Groq", "Sarvam AI", "Python"]
  },
  {
    title: "Realtor Voice Widget",
    type: "Voice AI",
    icon: Home,
    summary: "Embeddable voice assistant for real-estate sites: one script tag adds a mic button for spoken conversations about listings, rentals, leads and bookings.",
    technologies: ["LiveKit", "Next.js", "WebRTC", "Deepgram", "Sarvam AI"]
  },
  {
    title: "Voice AI Platform",
    type: "Voice AI",
    icon: Mic,
    summary: "Self-hosted replacement for ElevenLabs, Twilio and Whisper: one microservice backend for speech-to-text, text-to-speech and telephony.",
    technologies: ["Docker", "FastAPI", "Whisper", "WebSocket", "Microservices"]
  },
  {
    title: "Alfredo.AI RAG Chatbot",
    type: "RAG",
    icon: MessageSquare,
    summary: "Upload documents and ask questions in natural language, with answers grounded only in your data through a semantic-search retrieval pipeline.",
    technologies: ["FastAPI", "Python", "RAG", "Vector Embeddings", "OpenAI API"]
  },
  {
    title: "Alfredo AI Agent",
    type: "AI Agent",
    icon: Bot,
    summary: "Personal AI assistant on AgentX.so, routing across multiple model providers for broader, more reliable answers.",
    technologies: ["AgentX.so", "OpenAI API", "Anthropic", "Llama", "DeepSeek"],
    links: [
      { label: "Live demo", href: "https://app.agentx.so/shared-chat/?agent=688a1e4a42b87b91d3bab664", icon: ExternalLink }
    ]
  },
  {
    title: "AI Website Agent",
    type: "Web",
    icon: Globe,
    summary: "CodeIgniter 4 web application extending a traditional PHP stack with agent-driven website functionality.",
    technologies: ["PHP", "CodeIgniter 4", "MySQL"]
  },
  {
    title: "Apparel Shopping App",
    type: "Application",
    icon: Smartphone,
    summary: "Online apparel shopping application modelled on the Engel-Kollat-Blackwell consumer decision model.",
    technologies: ["Python", "MongoDB"],
    links: [
      { label: "Code", href: `${profile.github}/Apearal-App`, icon: Github }
    ]
  },
  {
    title: "Clothing E-Commerce Website",
    type: "Web",
    icon: ShoppingCart,
    summary: "Clothing storefront with category browsing, search and checkout.",
    technologies: ["WordPress", "JDBC"]
  }
];

const INITIAL_MORE = 4;

const ProjectLinks = ({ links, title }: { links?: ProjectLink[]; title: string }) => {
  if (!links?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title}: ${link.label}`}
          className="inline-flex items-center gap-1.5 min-h-11 px-3 rounded-md border border-border text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <link.icon className="w-4 h-4" aria-hidden="true" />
          {link.label}
        </a>
      ))}
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleMore = showAll ? moreProjects : moreProjects.slice(0, INITIAL_MORE);

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Projects"
          art={projectsArt}
          subtitle="Agents, voice AI and NLP systems I've designed and shipped"
        />

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              {/* Visual header */}
              <div className="relative h-40 bg-primary text-primary-foreground overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:14px_14px]"
                  aria-hidden="true"
                />
                <project.icon
                  className="absolute -right-4 -bottom-6 w-36 h-36 opacity-15 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  aria-hidden="true"
                />
                <div className="relative h-full flex flex-col justify-between p-5">
                  <span className="self-start text-xs font-medium uppercase tracking-wider px-2 py-1 rounded border border-primary-foreground/30">
                    Featured
                  </span>
                  <p className="font-mono text-sm sm:text-base">{project.stat}</p>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                    {project.type}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
                {project.built && (
                  <p className="text-sm text-foreground/80 leading-relaxed border-l-2 border-foreground/20 pl-3">
                    <span className="font-medium text-foreground">Built: </span>
                    {project.built}
                  </p>
                )}
                <ul className="flex flex-wrap gap-1.5 mt-auto" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge variant="secondary" className="font-normal text-[13px]">{tech}</Badge>
                    </li>
                  ))}
                </ul>
                <ProjectLinks links={project.links} title={project.title} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* More projects */}
        <div className="max-w-7xl mx-auto mt-16">
          <h3 className="text-lg font-semibold text-foreground mb-6">More projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleMore.map((project) => (
              <article
                key={project.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:border-foreground/30 transition-colors"
              >
                <div className="shrink-0 grid place-items-center w-11 h-11 rounded-lg bg-secondary text-secondary-foreground">
                  <project.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                    <span className="text-xs text-muted-foreground">{project.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
                  <p className="text-[13px] text-foreground/70">
                    {project.technologies.join(" · ")}
                  </p>
                  <ProjectLinks links={project.links} title={project.title} />
                </div>
              </article>
            ))}
          </div>

          {moreProjects.length > INITIAL_MORE && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                size="lg"
                className="h-12"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
              >
                {showAll ? "Show fewer" : `Show all ${moreProjects.length} projects`}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
