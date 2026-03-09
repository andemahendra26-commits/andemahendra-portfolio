import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 bg-background relative border-t border-foreground/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-sm">
            <h3 className="text-3xl font-bold mb-6 text-gradient italic tracking-tighter">Ande Mahendra</h3>
            <p className="text-muted-foreground leading-relaxed">
              Engineering the future through the lens of Artificial Intelligence and Machine Learning. Building robust, data-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Links</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Social</h4>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ande-mahendra-7a9420235/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:andemahendra26@gmail.com" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Made with <span className="text-primary mx-1">✦</span> by Ande Mahendra
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-foreground/5 flex items-center justify-center group-hover:border-primary/30 transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;