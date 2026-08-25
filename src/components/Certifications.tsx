import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";
import tataLogo from "@/assets/logos/tata-logo.png";
import bcgLogo from "@/assets/logos/bcg-logo.png";
import oracleLogo from "@/assets/logos/oracle-logo.png";
import awsLogo from "@/assets/logos/aws-logo.png";
import certificationsArt from "@/assets/ascii/certifications.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Artificial Intelligence Practitioner",
      issuer: "AWS",
      date: "August 2025",
      type: "AI/ML",
      logo: awsLogo
    },
    {
      title: "Certified Machine Learning Specialty",
      issuer: "AWS",
      date: "August 2025",
      type: "AI/ML",
      logo: awsLogo
    },
    {
      title: "AI Foundations Associate",
      issuer: "Oracle University",
      date: "June 2025",
      type: "AI/ML",
      logo: oracleLogo
    },
    {
      title: "GenAI Job Simulation",
      issuer: "BCG (FORAGE)",
      date: "May 2025",
      type: "AI/ML",
      logo: bcgLogo
    },
    {
      title: "GenAI-Powered Data Analytics Job Simulation",
      issuer: "TATA Group (FORAGE)",
      date: "June 2025",
      type: "Data Analytics",
      logo: tataLogo
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="sr-only">Certifications</h2>
          <img src={certificationsArt} alt="" aria-hidden="true" className="dark:invert h-7 sm:h-9 md:h-11 lg:h-12 w-auto max-w-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <Badge variant="outline" className="mb-3">
                      {cert.type}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  {cert.logo && (
                    <div className="flex-shrink-0 ml-3">
                      <img
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        className="w-12 h-12 object-contain grayscale opacity-70"
                      />
                    </div>
                  )}
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 text-primary font-medium mb-3">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold">{certifications.length}</span> professional certifications completed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;