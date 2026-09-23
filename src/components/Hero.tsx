import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import heroNameArt from "@/assets/ascii/hero-name.png";
import { profile } from "@/lib/profile";

const profileImages = [
  "/lovable-uploads/0ddc5395-b1db-4be8-b996-668ab74deb63.png",
  "/lovable-uploads/b18f4ba4-80c7-496b-937b-cecb3bd12d2f.png",
  "/lovable-uploads/6589dcfe-6867-43f5-9664-58e4511b3c35.png"
];

const heroLinks = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", href: profile.github, external: true },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, external: true }
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
    }, 5000);
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
      <section id="top" className="relative min-h-[100svh] overflow-hidden bg-background">
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

        <div className="relative flex flex-col lg:flex-row min-h-[100svh]">
          {/* Sharp photo on the left, fading into the blur */}
          <motion.button
            type="button"
            aria-label={`Show next photo (${currentImageIndex + 1} of ${profileImages.length})`}
            className="relative block h-[46svh] lg:h-auto lg:w-5/12 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset [mask-image:linear-gradient(to_bottom,black_70%,transparent)] lg:[mask-image:linear-gradient(to_right,black_65%,transparent)]"
            onClick={handleImageClick}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.44, ease: "easeOut" }}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={currentImage}
                alt="Mahendra Ande"
                className="absolute inset-0 w-full h-full object-cover object-[50%_35%] grayscale"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </motion.button>

          {/* Photo position indicator */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[calc(46svh-2rem)] lg:top-auto lg:bottom-10 lg:left-8 lg:translate-x-0 flex gap-2"
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
            className="flex-1 flex flex-col justify-center px-6 pt-2 pb-20 lg:py-24 lg:pl-4 lg:pr-16 text-center lg:text-left"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.44, ease: "easeOut", delay: 0.11 }}
          >
            <h1 className="sr-only">Mahendra Ande, GenAI Engineer</h1>
            <img
              src={heroNameArt}
              alt=""
              aria-hidden="true"
              className="block self-center lg:self-start dark:invert h-14 sm:h-24 md:h-28 lg:h-32 w-auto max-w-full object-contain lg:object-left mb-4 lg:mb-6"
            />
            <p className="text-xl lg:text-3xl font-light text-foreground mb-2 lg:mb-4">
              GenAI Engineer <span className="text-foreground/60">at Rovix AI</span>
            </p>
            <p className="text-base lg:text-lg text-foreground/75 mb-6 lg:mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
              I build AI that builds things: multi-agent systems, voice agents and RAG pipelines, shipped to production.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 lg:mb-8">
              <Button asChild size="lg" className="h-12 px-6 shadow-soft">
                <a href="#projects">
                  View projects
                  <ArrowDown className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 bg-background/50 backdrop-blur-sm">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  Let's connect
                </a>
              </Button>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
              {heroLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 min-h-11 px-3 rounded-md text-sm text-foreground/80 hover:text-foreground hover:bg-background/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <link.icon className="w-4 h-4" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
              <span className="inline-flex items-center gap-2 min-h-11 px-3 text-sm text-foreground/60">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Soft hand-off into the next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none"
          aria-hidden="true"
        />
      </section>
    </MotionConfig>
  );
};

export default Hero;
