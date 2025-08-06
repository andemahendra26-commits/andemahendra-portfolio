import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.9, 0.7]);

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
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20"
      style={{ opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 15, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-32 right-16 w-32 h-32 bg-accent/30 rounded-full blur-2xl"
        animate={{ 
          y: [0, 40, 0],
          x: [0, -20, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        className="container max-w-6xl mx-auto relative z-10"
        style={{ y }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div 
            className="lg:w-1/3 relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glowing ring */}
              <motion.div 
                className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-primary opacity-30 blur-xl mx-auto"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="w-80 h-80 rounded-full overflow-hidden shadow-neon mx-auto cursor-pointer group relative border-4 border-primary/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ perspective: "1000px" }}
                onClick={handleImageClick}
              >
                <motion.img
                  src={profileImages[currentImageIndex]}
                  alt="Ande Mahendra"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  key={currentImageIndex}
                  initial={{ scale: 1.1, opacity: 0, rotateZ: 5 }}
                  animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:w-2/3 text-center lg:text-left relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ande Mahendra
            </motion.h1>
            <motion.h2 
              className="text-2xl lg:text-3xl font-light text-muted-foreground mb-8 text-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              AI & Machine Learning Engineer
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              A highly motivated B.Tech Computer Science Engineering (AI & ML) student, passionate about 
              contributing to innovative organizations and continuously developing technical skills through 
              real-world challenges.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {[
                { icon: Mail, text: "andemahendra26@gmail.com" },
                { icon: Phone, text: "9063064262" },
                { icon: MapPin, text: "Hyderabad, India" },
                { icon: Instagram, text: "@_nani__26", url: "https://www.instagram.com/_nani__26?igsh=MWp1cXQyMHFlMzk2NA%3D%3D&utm_source=qr" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center gap-3 text-muted-foreground backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 glow-effect ${contact.url ? 'cursor-pointer' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5, backgroundColor: "hsl(234 89% 74% / 0.1)" }}
                  onClick={contact.url ? () => window.open(contact.url, '_blank') : undefined}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.a
                href="https://www.instagram.com/_nani__26?igsh=MWp1cXQyMHFlMzk2NA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10 glow-effect cursor-pointer hover:text-primary transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">Follow me on Instagram</span>
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-20 rounded-lg blur-lg transition-opacity duration-300"></div>
                <Button 
                  size="lg" 
                  className="shadow-neon bg-gradient-primary hover:shadow-glow relative z-10 px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://www.linkedin.com/in/ande-mahendra-7a9420235/', '_blank')}
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;