import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in CS Engineering (AI & ML)",
      institution: "SIET Hyderabad",
      location: "Hyderabad",
      duration: "May 2022 – May 2026",
      grade: "CGPA: 7.0",
      type: "Bachelor's"
    },
    {
      degree: "Intermediate (Class 12)",
      institution: "Sri Gayatri Junior College",
      location: "RK Puram, Hyderabad",
      duration: "2019 – 2021",
      grade: "Percentage: 63%",
      type: "Higher Secondary"
    },
    {
      degree: "SSC (Class 10)",
      institution: "Nagarjuna Model School",
      location: "Hasthinapuram, Hyderabad",
      duration: "2018 – 2019",
      grade: "Percentage: 92%",
      type: "Secondary"
    }
  ];

  return (
    <section
      id="education"
      className="py-32 bg-background relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">Academic Foundation</Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-gradient text-left">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed text-left">
            Foundational knowledge in Computer Science and specialized training in AI/ML mechanisms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col group h-full"
            >
              <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mb-8 shadow-soft group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{edu.degree}</h3>
                <p className="text-lg font-medium text-foreground/80">{edu.institution}</p>

                <div className="space-y-2 pt-4 border-t border-foreground/5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-foreground/5 flex items-center justify-between">
                <div className="text-xl font-bold text-gradient">{edu.grade}</div>
                <Badge variant="secondary" className="bg-foreground/5">{edu.type}</Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;