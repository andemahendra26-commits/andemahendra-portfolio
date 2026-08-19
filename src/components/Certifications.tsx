import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";
import eaLogo from "@/assets/logos/ea-logo.png";
import ibmLogo from "@/assets/logos/ibm-logo.png";
import tataLogo from "@/assets/logos/tata-logo.png";
import linkedinLogo from "@/assets/logos/linkedin-logo.png";
import deloitteLogo from "@/assets/logos/deloitte-logo.png";
import bcgLogo from "@/assets/logos/bcg-logo.png";
import accentureLogo from "@/assets/logos/accenture-logo.png";
import oracleLogo from "@/assets/logos/oracle-logo.png";
import infosysLogo from "@/assets/logos/infosys-logo.png";
import quantiumLogo from "@/assets/logos/quantium-logo.png";
import udemyLogo from "@/assets/logos/udemy-logo.png";
import awsLogo from "@/assets/logos/aws-logo.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      date: "September 2024",
      type: "AI/ML",
      logo: ibmLogo
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Electronic Arts (FORAGE)",
      date: "February 2025",
      type: "Software Engineering",
      logo: eaLogo
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "TATA Group (FORAGE)",
      date: "May 2025",
      type: "Data Analytics",
      logo: tataLogo
    },
    {
      title: "Python Essential Training",
      issuer: "LinkedIn Learning",
      date: "May 2025",
      type: "Programming",
      logo: linkedinLogo
    },
    {
      title: "Product Management Job Simulation",
      issuer: "Electronic Arts (FORAGE)",
      date: "May 2025",
      type: "Product Management",
      logo: eaLogo
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (FORAGE)",
      date: "May 2025",
      type: "Data Analytics",
      logo: deloitteLogo
    },
    {
      title: "GenAI Job Simulation",
      issuer: "BCG (FORAGE)",
      date: "May 2025",
      type: "AI/ML",
      logo: bcgLogo
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Accenture (FORAGE)",
      date: "May 2025",
      type: "Software Engineering",
      logo: accentureLogo
    },
    {
      title: "Prompt Engineering Using ChatGPT",
      issuer: "LinkedIn Learning",
      date: "May 2025",
      type: "AI/ML",
      logo: linkedinLogo
    },
    {
      title: "Sales Strategy: Using AI and Automation to Sell More",
      issuer: "LinkedIn Learning",
      date: "May 2025",
      type: "Business",
      logo: linkedinLogo
    },
    {
      title: "Vibe Coding Fundamentals: Tools and Best Practices",
      issuer: "LinkedIn Learning",
      date: "May 2025",
      type: "Programming",
      logo: linkedinLogo
    },
    {
      title: "Natural Language Processing",
      issuer: "Udemy",
      date: "June 2025",
      type: "AI/ML",
      logo: udemyLogo
    },
    {
      title: "GenAI-Powered Data Analytics Job Simulation",
      issuer: "TATA Group (FORAGE)",
      date: "June 2025",
      type: "Data Analytics",
      logo: tataLogo
    },
    {
      title: "Generative AI: Working with Large Language Models",
      issuer: "LinkedIn Learning",
      date: "June 2025",
      type: "AI/ML",
      logo: linkedinLogo
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Quantium (FORAGE)",
      date: "June 2025",
      type: "Data Analytics",
      logo: quantiumLogo
    },
    {
      title: "Prompt Engineering",
      issuer: "Infosys",
      date: "June 2025",
      type: "AI/ML",
      logo: infosysLogo
    },
    {
      title: "AI Foundations Associate",
      issuer: "Oracle University",
      date: "June 2025",
      type: "AI/ML",
      logo: oracleLogo
    },
    {
      title: "AI Aware",
      issuer: "Intel & Digital India",
      date: "June 2025",
      type: "AI/ML",
      logo: null
    },
    {
      title: "Certified Machine Learning Specialty",
      issuer: "AWS",
      date: "August 2025",
      type: "AI/ML",
      logo: awsLogo
    },
    {
      title: "Certified Artificial Intelligence Practitioner",
      issuer: "AWS",
      date: "August 2025",
      type: "AI/ML",
      logo: awsLogo
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="sr-only">Certifications</h2>
          <pre
            aria-hidden="true"
            className="ascii-art font-mono leading-none whitespace-pre text-foreground inline-block mb-4 text-[5px] sm:text-[7px] md:text-[10px] lg:text-xs"
          >
{` .d8888b.  8888888888 8888888b. 88888888888 8888888 8888888888 8888888 .d8888b.        d8888 88888888888 8888888 .d88888b.  888b    888  .d8888b.
d88P  Y88b 888        888   Y88b    888       888   888          888  d88P  Y88b      d88888     888       888  d88P" "Y88b 8888b   888 d88P  Y88b
888    888 888        888    888    888       888   888          888  888    888     d88P888     888       888  888     888 88888b  888 Y88b.
888        8888888    888   d88P    888       888   8888888      888  888           d88P 888     888       888  888     888 888Y88b 888  "Y888b.
888        888        8888888P"     888       888   888          888  888          d88P  888     888       888  888     888 888 Y88b888     "Y88b.
888    888 888        888 T88b      888       888   888          888  888    888  d88P   888     888       888  888     888 888  Y88888       "888
Y88b  d88P 888        888  T88b     888       888   888          888  Y88b  d88P d8888888888     888       888  Y88b. .d88P 888   Y8888 Y88b  d88P
 "Y8888P"  8888888888 888   T88b    888     8888888 888        8888888 "Y8888P" d88P     888     888     8888888 "Y88888P"  888    Y888  "Y8888P"`}
          </pre>
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