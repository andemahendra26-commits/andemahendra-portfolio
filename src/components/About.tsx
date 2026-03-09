import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, Music } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Telugu", level: "Fluent" }
  ];

  const hobbies = [
    { name: "Reading Mythology Books", icon: BookOpen },
    { name: "Listening to Informative Podcasts", icon: Music },
    { name: "Watching Sci-Fi Movies", icon: Globe }
  ];

  const activities = [
    "Event Organizing: College fests & symposiums",
    "Social Services: Philanthropy & donation camps"
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6">The Story</Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-gradient">About Me</h2>

          <div className="glass-card p-10 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-bl-full group-hover:bg-foreground/10 transition-colors" />
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              Professional <span className="text-muted-foreground font-light">Vision</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "A highly motivated B.Tech Computer Science Engineering (AI & ML) student, passionate about
              contributing to innovative organizations and continuously developing technical skills through
              real-world challenges."
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center group/lang">
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{lang.name}</span>
                  <Badge variant="secondary" className="opacity-50 group-hover:opacity-100">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-6">Interests</h3>
            <div className="space-y-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-start gap-4 group/hobby">
                  <hobby.icon className="w-5 h-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                    {hobby.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Extracurricular */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6">
              <Music className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-6">Extra Activities</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 group/activity">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 group-hover:bg-foreground transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;