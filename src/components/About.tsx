import { Card, CardContent } from "@/components/ui/card";
import { Globe, BookOpen, Music } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Objective Statement */}
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Languages</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground bg-accent px-2 py-1 rounded">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hobbies & Interests */}
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Hobbies & Interests</h3>
                <div className="space-y-4">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <hobby.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Extracurricular Activities */}
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Extracurricular Activities</h3>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{activity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Declaration */}
          <Card className="shadow-soft mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Declaration</h3>
              <p className="text-muted-foreground italic">
                I hereby declare that the information provided above is true to the best of my knowledge and belief.
              </p>
              <div className="mt-6">
                <p className="text-foreground font-medium">Ande Mahendra</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;