import { Button } from "@/components/ui/button";
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
      className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 py-20"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden shadow-elegant mx-auto cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.img
                  src={profileImages[currentImageIndex]}
                  alt="Ande Mahendra"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onClick={handleImageClick}
                  key={currentImageIndex}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:w-2/3 text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ande Mahendra
            </motion.h1>
            <motion.h2
              className="text-2xl lg:text-3xl font-light text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              AI & Machine Learning Engineer
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed"
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
                { icon: MapPin, text: "Hyderabad, India" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <contact.icon className="w-5 h-5" />
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="shadow-soft"
                  onClick={() => window.open('https://www.linkedin.com/in/ande-mahendra-7a9420235/', '_blank')}
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;