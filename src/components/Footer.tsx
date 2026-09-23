import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/profile";

const footerLinks = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", href: profile.github, external: true },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, external: true }
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <ul className="flex items-center gap-1">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={link.label}
                className="grid place-items-center w-11 h-11 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <link.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
