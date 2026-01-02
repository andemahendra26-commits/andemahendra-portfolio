import { Card, CardContent } from "@/components/ui/card";
import { Globe, BookOpen, Music } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Telugu", level: "Fluent" }
  ];

  const hobbies = [
    { name: "Reading Mythology Books", icon: BookOpen },
    { name: "Listening to informative podcasts", icon: Music },
    { name: "Watching Sci-Fi movies", icon: Globe }
  ];

  const activities = [
    "Event Organizing: Organizing college fests, technical symposiums, or cultural events",
    "Social Services: Joining government philanthropy events and donation camps"
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-muted/30"
    >
      <motion.div 
        className="container mx-auto px-4"
        style={{ y }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get to know more about my background, interests, and what drives me
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Objective Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-soft mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Objective</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A highly motivated and passionate B.Tech Computer Science Engineering (Artificial Intelligence & Machine Learning) 
                  student, nearing graduation, with a strong desire to begin my professional journey. Eager to contribute to an 
                  innovative organization where I can apply and enhance my technical knowledge, gain hands-on experience, and 
                  continuously develop my skills. I am driven to work with dedication, learn from real-world challenges, and grow 
                  into a skilled and reliable professional.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Globe className="w-5 h-5 text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground">Languages</h3>
                  </div>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <motion.div 
                        key={index} 
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-foreground font-medium">{lang.name}</span>
                        <span className="text-sm text-muted-foreground bg-accent px-2 py-1 rounded">
                          {lang.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hobbies & Interests */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Hobbies & Interests</h3>
                  <div className="space-y-4">
                    {hobbies.map((hobby, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <hobby.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{hobby.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Extracurricular Activities */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Extracurricular Activities</h3>
                  <div className="space-y-4">
                    {activities.map((activity, index) => (
                      <motion.div 
                        key={index} 
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;