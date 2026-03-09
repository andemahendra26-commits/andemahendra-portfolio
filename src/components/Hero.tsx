import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Brain, Cpu, Shield, Zap, Power, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const profileImages = [
    "/lovable-uploads/0ddc5395-b1db-4be8-b996-668ab74deb63.png",
    "/lovable-uploads/c9f90667-aade-465e-82b3-26cd4a408b6f.png",
    "/lovable-uploads/6589dcfe-6867-43f5-9664-58e4511b3c35.png",
    "/lovable-uploads/8261518c-1509-4343-934d-887c1fb2e8ca.png",
    "/lovable-uploads/b18f4ba4-80c7-496b-937b-cecb3bd12d2f.png",
    "/lovable-uploads/3b7b64ab-00ab-4f56-ade4-0dee07b67324.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20 px-4">
      {/* HUD Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-primary/5 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full animate-reverse-spin" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-primary/20 rounded-full blur-[2px]" />

        {/* Arc Reactor Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20 animate-pulse" />
      </div>

      {/* Grid Pattern with HUD Scan Lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-primary/40 shadow-[0_0_15px_rgba(0,242,255,0.5)]"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* HUD Profile Display */}
          <motion.div
            className="relative lg:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto cursor-pointer group" onClick={handleImageClick}>
              {/* Spinning HUD Rings */}
              <div className="absolute -inset-8 border border-primary/20 rounded-full animate-spin-slow" />
              <div className="absolute -inset-4 border-2 border-primary/40 rounded-full border-t-transparent border-b-transparent animate-reverse-spin" />

              {/* Corner Brackets */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 glass-panel">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={profileImages[currentImageIndex]}
                    alt="Ande Mahendra"
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Data Overlay */}
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full animate-ping" />
                  USER_AUTH: VERIFIED
                </div>
                <div>SCANNING: COMPLETE</div>
              </div>
            </div>
          </motion.div>

          {/* Content Block */}
          <div className="lg:w-2/3 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="text-hud text-xs border-primary/30 py-1 bg-primary/5">
                Stark_System_Online_v4.2
              </Badge>
              <div className="h-[1px] flex-grow max-w-[100px] bg-primary/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
                <span className="text-white">ANDE</span>
                <br />
                <span className="text-primary glow-primary italic">MAHENDRA</span>
              </h1>
              <div className="h-1 w-32 bg-primary mb-8 mx-auto lg:ml-0" />
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-mono leading-relaxed max-w-2xl mx-auto lg:ml-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              [SR. ENGINEER] — DESIGNING AUTONOMOUS SYSTEMS, NEURAL ARCHITECTURES, AND ADVANCED AI INTERFACES.
            </motion.p>

            {/* Contact Data Chips */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: Mail, text: "andemahendra26@gmail.com" },
                { icon: Phone, text: "9063064262" },
                { icon: MapPin, text: "Hyderabad" }
              ].map((contact, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-2 border border-primary/10 bg-primary/5 rounded-sm font-mono text-xs text-primary/80 hover:bg-primary/20 transition-all cursor-crosshair">
                  <contact.icon className="w-3 h-3" />
                  {contact.text}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <button className="btn-stark group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="flex items-center gap-3">
                  <Power className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                  Initialize Works
                </span>
              </button>
              <button className="text-hud text-sm font-bold hover:text-white transition-colors flex items-center gap-2 group">
                Download PDF Schematics
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side HUD Decorations */}
      <div className="hidden xl:block">
        <motion.div
          className="absolute left-8 top-1/2 -translate-y-1/2 space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="rotate-90 origin-left text-hud text-[8px] opacity-30 mt-20">SYSTEM_METRICS_001_ACTIVE</div>
          <div className="rotate-90 origin-left text-hud text-[8px] opacity-30">ENCRYPTION_LAYER_SECURE</div>
          <div className="rotate-90 origin-left text-hud text-[8px] opacity-30">DATA_RECOVERY_PROTOCOL_READY</div>
        </motion.div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-4 w-full px-8 flex justify-between items-end border-t border-primary/5 pt-4">
        <div className="flex gap-12 font-mono text-[8px] text-primary/30">
          <div>LOC: 17.3850 N, 78.4867 E</div>
          <div>POWER: 100% [ARC_REACTOR]</div>
          <div>TEMP: 32.4 °C</div>
        </div>
        <div className="text-hud text-[10px] animate-pulse">DEPLOY_STATUS: SUCCESSFUL</div>
      </div>
    </section>
  );
};

export default Hero;
