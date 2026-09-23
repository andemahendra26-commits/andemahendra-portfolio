import { Button } from "@/components/ui/button";
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
        <SectionHeading title="Contact" art={contactArt} />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Pitch */}
          <div className="rounded-xl bg-primary text-primary-foreground p-6 sm:p-8 lg:p-10">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/70 mb-3">Open to</p>
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight mb-4">
              GenAI and LLM engineering roles, freelance builds and collaborations.
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Based in {profile.location}, open to remote work. The fastest way to reach me is email.
            </p>
            <Button asChild size="lg" variant="secondary" className="h-12 px-6 w-full sm:w-auto">
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-4 h-4" />
                Email me
              </a>
            </Button>
          </div>

          {/* Links */}
          <ul className="rounded-xl border border-border bg-card divide-y divide-border overflow-hidden">
            {contactLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 p-4 sm:p-5 min-h-[72px] hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
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
      </div>
    </section>
  );
};

export default Contact;
