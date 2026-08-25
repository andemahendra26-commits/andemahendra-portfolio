import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import contactArt from "@/assets/ascii/contact.png";

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
      value: "+91 8328592182",
      href: "tel:+918328592182"
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
          <h2 className="sr-only">Contact</h2>
          <img src={contactArt} alt="" aria-hidden="true" className="dark:invert h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Let's build something great together.
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
                          className="text-foreground font-medium hover:text-primary hover:shadow-soft px-2 py-1 rounded transition-all duration-300"
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
                      <h4 className="font-semibold text-primary mb-2">Let's Build Something</h4>
                      <p className="text-sm text-muted-foreground">
                        Bringing production AI experience to your team's next challenge
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
                    <h4 className="font-semibold text-accent-foreground mb-2">Currently</h4>
                    <p className="text-accent-foreground/80">
                      GenAI Engineer @ Rovix AI
                    </p>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Open To</h4>
                    <p className="text-muted-foreground">
                      Senior AI roles, consulting, and collaboration
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-muted-foreground mb-2">Based In</h4>
                    <p className="text-muted-foreground">
                      Hyderabad, India
                    </p>
                  </div>

                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold text-secondary-foreground mb-2">Remote</h4>
                    <p className="text-secondary-foreground/80">
                      Open to remote work worldwide
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