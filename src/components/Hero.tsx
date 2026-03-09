import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <section
      className="relative min-h-screen flex items-center justify-center bg-[var(--gradient-hero)] px-4 py-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image with Ring Effect */}
          <motion.div
            className="lg:w-1/3 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-foreground/20 to-transparent blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden shadow-elegant mx-auto cursor-pointer border-4 border-background relative z-10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={profileImages[currentImageIndex]}
                  alt="Ande Mahendra"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  onClick={handleImageClick}
                  key={currentImageIndex}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content with Layered Entrance */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-foreground/20 tracking-wider uppercase font-medium">
                Available for New Challenges
              </Badge>
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gradient">Ande Mahendra</span>
            </motion.h1>

            <motion.h2
              className="text-2xl lg:text-4xl font-light text-muted-foreground mb-8 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              AI & Machine Learning <span className="text-foreground font-medium">Engineer</span>
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting intelligent solutions through data-driven innovation. Specializing in Deep Learning,
              NLP, and scalable AI infrastructure.
            </motion.p>

            {/* Contact Info Chips */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { icon: Mail, text: "andemahendra26@gmail.com" },
                { icon: Phone, text: "9063064262" },
                { icon: MapPin, text: "Hyderabad, India" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full text-foreground/80 text-sm border border-foreground/10 hover:bg-foreground/10 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="xl"
                className="rounded-full px-10 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-elegant"
                onClick={() => window.open('https://www.linkedin.com/in/ande-mahendra-7a9420235/', '_blank')}
              >
                Let's Connect
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="rounded-full px-10 h-14 text-lg border-foreground/20 hover:bg-foreground/5 transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;