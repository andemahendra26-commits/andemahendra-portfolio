import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {

  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering (AI & ML)",
      institution: "Siddhartha Institute of Engineering and Technology",
      location: "Hyderabad",
      duration: "May 2022 – May 2026",
      grade: "CGPA: 7.0",
      type: "Bachelor's"
    },
    {
      degree: "Intermediate (Class 12)",
      institution: "Sri Gayatri Junior College",
      location: "RK Puram, Hyderabad",
      duration: "March 2019 – February 2021",
      grade: "Percentage: 63%",
      type: "Higher Secondary"
    },
    {
      degree: "SSC (Class 10)",
      institution: "Nagarjuna Model School",
      location: "Hasthinapuram, Hyderabad",
      duration: "February 2018 – March 2019",
      grade: "Percentage: 92%",
      type: "Secondary"
    }
  ];

  return (
    <section
      id="education"
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl text-primary font-medium mb-2">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="lg:text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground">
                          {edu.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div className="text-lg font-medium text-primary">
                      {edu.grade}
                    </div>
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

export default Education;