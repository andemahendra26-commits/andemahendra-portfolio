import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Manager",
      company: "Switch2ITjobs.com",
      duration: "June 2022 - September 2022",
      type: "Full-time",
      description: "Managed web operations and maintained the company's digital presence."
    },
    {
      title: "Marketing Head",
      company: "Switch2ITjobs.com",
      duration: "April 2022 - June 2022",
      type: "Full-time",
      description: "Led marketing initiatives and strategic campaigns to drive business growth."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key responsibilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-primary font-medium mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="lg:text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;