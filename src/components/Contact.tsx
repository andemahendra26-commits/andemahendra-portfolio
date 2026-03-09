import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
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
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ande Mahendra",
      href: "https://www.linkedin.com/in/ande-mahendra-7a9420235/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6">Connect</Badge>
          <h2 className="text-5xl lg:text-8xl font-bold mb-8 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
            "Ready to start my professional journey. Let's connect and explore opportunities together."
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Direct Contact */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-center gap-6 group hover:bg-foreground/5 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-soft">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-lg font-bold truncate group-hover:text-primary transition-colors">{item.value}</p>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-30 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* Right Column - Status & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-foreground/10 transition-colors" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 tracking-tighter uppercase">Current Status</h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">🎓 Graduation</h4>
                  <p className="text-xl font-medium text-foreground/80">Final year B.Tech (AI & ML) — May 2026</p>
                </div>

                <div className="pt-8 border-t border-foreground/5">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">📍 Relocation</h4>
                  <p className="text-xl font-medium text-foreground/80">Open to Hyderabad, Bangalore, Chennai, or Remote work.</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 py-8 text-lg font-bold uppercase tracking-widest rounded-2xl shadow-elegant group">
                <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                View GitHub Repositories
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;