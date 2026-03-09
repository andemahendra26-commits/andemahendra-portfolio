import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-[0_0_20px_rgba(0,242,255,0.1)]" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Stark-style Logo */}
          <motion.div
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 border-2 border-primary/50 flex items-center justify-center relative bg-primary/5 rounded-sm">
              <Cpu className="w-6 h-6 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full shadow-[0_0_5px_#00f2ff]" />
            </div>
            <div className="hidden sm:block">
              <div className="text-hud text-[10px] leading-none opacity-50">Authorized User</div>
              <div className="text-white font-bold tracking-tighter text-xl">STARK_OS</div>
            </div>
          </motion.div>

          {/* HUD Navigation */}
          <div className="hidden lg:flex items-center space-x-1 border-x border-primary/20 px-8 py-2 bg-primary/5 rounded-sm">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className="text-hud text-[11px] font-bold px-4 py-2 hover:bg-primary hover:text-background transition-all duration-300 relative group"
              >
                <span>{item.name}</span>
                <span className="absolute -top-1 left-0 w-full h-[1px] bg-primary/0 group-hover:bg-primary/50 transition-all" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="text-hud text-[9px] text-right opacity-50">Status</div>
              <div className="text-primary text-[10px] uppercase font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                Live Feed Active
              </div>
            </div>
            <div className="flex items-center gap-2 border-l border-primary/20 pl-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-primary hover:bg-primary/20"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile HUD Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden border-t border-primary/20 bg-background/95 backdrop-blur-2xl"
            >
              <div className="p-8 space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex justify-between items-center group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-hud text-lg font-bold group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="h-[1px] flex-grow mx-4 bg-primary/10 group-hover:bg-primary/50 transition-all" />
                    <span className="text-hud text-[10px] opacity-30">INIT_#{item.name.toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
