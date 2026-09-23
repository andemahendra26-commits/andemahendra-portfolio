import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";
import contactArt from "@/assets/ascii/contact.png";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/profile";

const contactLinks = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: "LinkedIn", value: "mahendra-ande", href: profile.linkedin, external: true },
  { icon: Github, label: "GitHub", value: "andemahendra26-commits", href: profile.github, external: true }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact"
          art={contactArt}
          subtitle="Have a question, an idea, or want to talk AI agents? My inbox is open."
        />

        <ul className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contactLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 h-full p-4 sm:p-5 min-h-[72px] rounded-xl border border-border bg-card hover:border-foreground/40 hover:shadow-soft transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="shrink-0 grid place-items-center w-11 h-11 rounded-lg bg-primary text-primary-foreground">
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-muted-foreground">{item.label}</span>
                  <span className="block font-medium text-foreground [overflow-wrap:anywhere]">{item.value}</span>
                </span>
                <ArrowUpRight
                  className="w-5 h-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
