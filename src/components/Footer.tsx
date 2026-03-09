import { Github, Linkedin, Mail, ArrowUp, Cpu, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 bg-background relative border-t border-primary/10 overflow-hidden">
      {/* HUD Scanner Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-black tracking-widest uppercase">ANDEMA_v2.0</h3>
            </div>
            <p className="text-muted-foreground font-mono text-xs leading-relaxed opacity-60">
              ARCHITECTING THE FUTURE THROUGH ADVANCED NEURAL COMPUTATION AND AGENTIC AI.
              ENGINEERING ROBUST APPLICATIONS FOR THE NEXT GENERATION OF TECHNOLOGY.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="text-hud text-[10px] font-bold opacity-40">NAVIGATION_NODES</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-xs font-mono hover:text-primary transition-colors uppercase">System_Info</a></li>
                <li><a href="#projects" className="text-xs font-mono hover:text-primary transition-colors uppercase">Schematics</a></li>
                <li><a href="#skills" className="text-xs font-mono hover:text-primary transition-colors uppercase">Core_Power</a></li>
                <li><a href="#contact" className="text-xs font-mono hover:text-primary transition-colors uppercase">Comm_Link</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-hud text-[10px] font-bold opacity-40">EXTERNAL_UPLINKS</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/andemahendra26-commits" },
                  { icon: Linkedin, href: "https://linkedin.com/in/ande-mahendra-7a9420235/" },
                  { icon: Mail, href: "mailto:andemahendra26@gmail.com" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noreferrer" className="w-10 h-10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all">
                    <social.icon className="w-4 h-4 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Shield className="w-4 h-4 text-primary opacity-20" />
            <p className="text-[10px] font-mono text-muted-foreground uppercase">
              © {new Date().getFullYear()} // ANDE_MAHENDRA_OS // ALL_RIGHTS_RESERVED
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all">
              <ArrowUp className="w-4 h-4 text-primary group-hover:text-background transition-colors" />
            </div>
            <span className="text-[8px] font-mono opacity-40 group-hover:opacity-100 transition-opacity">SYS_UP</span>
          </button>
        </div>
      </div>

      {/* Decorative Grid footer */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-primary/5 [mask-image:linear-gradient(to_top,black,transparent)]" />
    </footer>
  );
};

export default Footer;
