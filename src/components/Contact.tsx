import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "andemahendra26@gmail.com",
      href: "mailto:andemahendra26@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9063064262",
      href: "tel:+919063064262"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ande-mahendra-7a9420235",
      href: "https://www.linkedin.com/in/ande-mahendra-7a9420235/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start my professional journey. Let's connect and explore opportunities together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <a 
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2">🚀 Ready to Contribute</h4>
                      <p className="text-sm text-muted-foreground">
                        Eager to bring fresh perspectives and dedication to your team
                      </p>
                    </div>
                    <Button className="w-full flex items-center gap-2 shadow-soft">
                      <Github className="w-4 h-4" />
                      View My Work & Projects
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Status */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-8">Current Status</h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold text-accent-foreground mb-2">🎓 Academic Status</h4>
                    <p className="text-accent-foreground/80">
                      Final year B.Tech student (AI & ML) - Graduating May 2026
                    </p>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">💼 Career Objective</h4>
                    <p className="text-muted-foreground">
                      Seeking entry-level opportunities in AI/ML, Software Development, or Data Analytics
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-muted-foreground mb-2">🚀 Availability</h4>
                    <p className="text-muted-foreground">
                      Available for internships and full-time positions
                    </p>
                  </div>

                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold text-secondary-foreground mb-2">📍 Preferred Locations</h4>
                    <p className="text-secondary-foreground/80">
                      Hyderabad, Bangalore, Chennai, or Remote
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;