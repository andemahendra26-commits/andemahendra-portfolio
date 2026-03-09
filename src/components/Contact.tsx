import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Zap, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Secure_Email",
      value: "andemahendra26@gmail.com",
      href: "mailto:andemahendra26@gmail.com"
    },
    {
      icon: Phone,
      label: "Comms_Line",
      value: "+91 9063064262",
      href: "tel:+919063064262"
    },
    {
      icon: Linkedin,
      label: "Network_Node",
      value: "Ande Mahendra",
      href: "https://www.linkedin.com/in/ande-mahendra-7a9420235/"
    },
    {
      icon: MapPin,
      label: "Geo_Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-32 relative bg-background overflow-hidden border-t border-primary/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-hud text-xs">Establish_Handshake_Initial_Phase...</span>
          </div>
          <h2 className="text-5xl lg:text-8xl font-black mb-8">SECURE_CHANNEL</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            INITIATING ENCRYPTED COMMUNICATIONS. STANDING BY FOR INPUT.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Direct HUD Links */}
          <div className="space-y-4">
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
                className="stark-card p-6 flex items-center gap-6 group hover:bg-primary/5"
              >
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-hud text-[9px] opacity-40 mb-1">{item.label}</p>
                  <p className="text-lg font-mono font-bold group-hover:text-primary transition-colors">{item.value}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" />
              </motion.a>
            ))}
          </div>

          {/* Right Column - Status & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="stark-card p-12 bg-primary/5 flex flex-col justify-between border-primary/10"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-hud text-sm font-bold">SYSTEM_VITALITY</h3>
                <Shield className="w-5 h-5 text-primary opacity-30" />
              </div>

              <div className="space-y-12">
                <div className="group">
                  <h4 className="text-hud text-[10px] mb-3 opacity-40">Deployment_Target</h4>
                  <p className="text-xl font-mono text-white">MAY_2026 // FINAL_B.TECH_AI_ML</p>
                  <div className="h-[1px] w-full bg-primary/10 mt-2 group-hover:bg-primary/50 transition-all" />
                </div>

                <div className="group">
                  <h4 className="text-hud text-[10px] mb-3 opacity-40">Relocation_Protocol</h4>
                  <p className="text-xl font-mono text-white">HYD | BLR | CHN | REMOTE</p>
                  <div className="h-[1px] w-full bg-primary/10 mt-2 group-hover:bg-primary/50 transition-all" />
                </div>
              </div>
            </div>

            <div className="mt-16">
              <button className="btn-stark w-full flex items-center justify-center gap-4 group" onClick={() => window.open('https://github.com/andemahendra26-commits', '_blank')}>
                <Github className="w-5 h-5" />
                <span>Access_Source_Code</span>
                <Cpu className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
