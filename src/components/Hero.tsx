import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ande <span className="bg-gradient-accent bg-clip-text text-transparent">Mahendra</span>
          </motion.h1>

          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI & ML Engineer
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building intelligent solutions with cutting-edge AI technology.
            Transforming ideas into innovative, scalable applications.
          </motion.p>

          {/* Contact Info Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="mailto:andemahendra26@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-glass rounded-full border border-border hover:shadow-glass transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">andemahendra26@gmail.com</span>
            </a>
            <a 
              href="tel:9063064262"
              className="group flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-glass rounded-full border border-border hover:shadow-glass transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">+91 9063064262</span>
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-glass rounded-full border border-border">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Hyderabad, India</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-accent text-white px-8 py-6 text-lg rounded-full hover:shadow-hover transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;