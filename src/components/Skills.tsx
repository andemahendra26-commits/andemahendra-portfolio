import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Wrench, 
  Globe, 
  Database, 
  Users, 
  Clock, 
  MessageCircle, 
  Lightbulb,
  Target 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: Brain,
      skills: ["Prompt Engineering", "RAGs", "LLMs", "NLP"],
      color: "bg-primary"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "OOPS Concepts", "Java", "Python"],
      color: "bg-accent"
    },
    {
      title: "Tools & IDEs",
      icon: Wrench,
      skills: ["Visual Studio", "Notepad++"],
      color: "bg-muted"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-secondary"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["SQL", "MongoDB"],
      color: "bg-primary/80"
    }
  ];

  const softSkills = [
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Team collaboration", icon: Users },
    { name: "Time management", icon: Clock },
    { name: "Communication skills", icon: MessageCircle },
    { name: "Quick learner", icon: Target }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical competencies and soft skills that drive my professional growth
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <skill.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;