import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
      style={{ 
        background: 'linear-gradient(180deg, hsl(var(--grey-5)) 0%, hsl(var(--grey-10)) 50%, hsl(var(--grey-15)) 100%)'
      }}
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-radial opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-radial opacity-30 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="container max-w-7xl mx-auto relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image with Glass Effect */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-radial opacity-50 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden mx-auto cursor-pointer group"
                style={{
                  boxShadow: 'var(--shadow-elegant)',
                  backdropFilter: 'var(--blur-glass)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.img
                  src={profileImages[currentImageIndex]}
                  alt="Ande Mahendra - AI & ML Engineer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  onClick={handleImageClick}
                  key={currentImageIndex}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Click Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/80 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Click to change
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content with Enhanced Typography */}
          <motion.div 
            className="lg:w-3/5 text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h1 
                className="text-6xl lg:text-8xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--grey-225)) 0%, hsl(var(--grey-175)) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em'
                }}
              >
                Ande Mahendra
              </motion.h1>
            </motion.div>

            <motion.h2 
              className="text-3xl lg:text-4xl font-light tracking-wide"
              style={{ color: 'hsl(var(--grey-150))' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              AI & Machine Learning Engineer
            </motion.h2>

            <motion.p 
              className="text-lg lg:text-xl leading-relaxed max-w-3xl"
              style={{ color: 'hsl(var(--grey-140))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              A highly motivated B.Tech Computer Science Engineering (AI & ML) student, passionate about 
              contributing to innovative organizations and continuously developing technical skills through 
              real-world challenges. Selected for world's largest AI internship program by Viswam.AI.
            </motion.p>

            {/* Contact Info with Glass Morphism */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                { icon: Mail, text: "andemahendra26@gmail.com", label: "Email" },
                { icon: Phone, text: "9063064262", label: "Phone" },
                { icon: MapPin, text: "Hyderabad, India", label: "Location" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="group flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-sm transition-all duration-300"
                  style={{
                    background: 'hsl(var(--grey-0) / 0.6)',
                    border: '1px solid hsl(var(--grey-50) / 0.2)',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: 'var(--shadow-elegant)'
                  }}
                >
                  <contact.icon className="w-5 h-5" style={{ color: 'hsl(var(--grey-180))' }} />
                  <div className="flex flex-col">
                    <span className="text-xs" style={{ color: 'hsl(var(--grey-120))' }}>{contact.label}</span>
                    <span className="text-sm font-medium" style={{ color: 'hsl(var(--grey-200))' }}>{contact.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg rounded-2xl font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--grey-200)) 0%, hsl(var(--grey-225)) 100%)',
                    boxShadow: '0 10px 40px -10px hsl(var(--grey-225) / 0.4)',
                  }}
                  onClick={() => window.open('https://www.linkedin.com/in/ande-mahendra-7a9420235/', '_blank')}
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;