import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import heroNameArt from "@/assets/ascii/hero-name.png";

const profileImages = [
  "/lovable-uploads/0ddc5395-b1db-4be8-b996-668ab74deb63.png",
  "/lovable-uploads/c9f90667-aade-465e-82b3-26cd4a408b6f.png",
  "/lovable-uploads/6589dcfe-6867-43f5-9664-58e4511b3c35.png",
  "/lovable-uploads/8261518c-1509-4343-934d-887c1fb2e8ca.png",
  "/lovable-uploads/b18f4ba4-80c7-496b-937b-cecb3bd12d2f.png",
  "/lovable-uploads/3b7b64ab-00ab-4f56-ade4-0dee07b67324.png"
];

const Hero = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
  };

  // Slideshow: advance every few seconds; a click restarts the timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  // Preload the photos so each slide fades in without a flash
  useEffect(() => {
    profileImages.forEach((src) => {
      new Image().src = src;
    });
  }, []);

  const currentImage = profileImages[currentImageIndex];

  return (
    <MotionConfig reducedMotion="user">
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Blurred extension of the photo, filling the whole section */}
      <AnimatePresence initial={false}>
        <motion.img
          key={`bg-${currentImageIndex}`}
          src={currentImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover grayscale blur-2xl scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      {/* Tint so the text stays readable in both themes */}
      <div className="absolute inset-0 bg-background/60" aria-hidden="true" />

      <div className="relative flex flex-col lg:flex-row min-h-screen">
        {/* Sharp photo on the left, fading into the blur */}
        <motion.button
          type="button"
          aria-label={`Show next photo (${currentImageIndex + 1} of ${profileImages.length})`}
          className="relative block h-[60vh] lg:h-auto lg:w-5/12 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset [mask-image:linear-gradient(to_bottom,black_70%,transparent)] lg:[mask-image:linear-gradient(to_right,black_65%,transparent)]"
          onClick={handleImageClick}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.44, ease: "easeOut" }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={currentImage}
              alt="Mahendra Ande"
              className="absolute inset-0 w-full h-full object-cover grayscale"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </motion.button>

        {/* Photo position indicator */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[calc(60vh-2.5rem)] lg:top-auto lg:bottom-8 lg:left-8 lg:translate-x-0 flex gap-2"
          aria-hidden="true"
        >
          {profileImages.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center px-6 pb-16 lg:py-24 lg:pl-4 lg:pr-16 text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.44, ease: "easeOut", delay: 0.11 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.44, delay: 0.22 }}
          >
            <h1 className="sr-only">Mahendra Ande</h1>
            <img
              src={heroNameArt}
              alt=""
              aria-hidden="true"
              className="block dark:invert h-16 sm:h-24 md:h-28 lg:h-32 w-auto max-w-full mx-auto lg:mx-0"
            />
          </motion.div>
          <motion.h2
            className="text-2xl lg:text-3xl font-light text-foreground/80 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.33, delay: 0.33 }}
          >
            GenAI Engineer
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.33, delay: 0.44 }}
          >
            I build AI that builds things.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-8 items-center justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.33, delay: 0.55 }}
          >
            {[
              { icon: Mail, text: "andemahendra26@gmail.com" },
              { icon: Phone, text: "8328592182" },
              { icon: MapPin, text: "Hyderabad, India" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-foreground/80"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: 0.66 + index * 0.055 }}
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
            transition={{ duration: 0.33, delay: 0.825 }}
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
    </section>
    </MotionConfig>
  );
};

export default Hero;
