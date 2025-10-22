import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import { useRef } from "react";
import awsCert from "@/assets/logos/aws-cert.png";
import ibmCert from "@/assets/logos/ibm-cert.png";
import googleCloudCert from "@/assets/logos/google-cloud-cert.png";
import oracleCert from "@/assets/logos/oracle-cert.png";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "December 2024",
    type: "Professional",
    logo: oracleCert,
  },
  {
    title: "Oracle Cloud Data Management 2024 Foundations Associate",
    issuer: "Oracle",
    date: "December 2024",
    type: "Foundations",
    logo: oracleCert,
  },
  {
    title: "Oracle Cloud Infrastructure 2024 AI Foundations Associate",
    issuer: "Oracle",
    date: "December 2024",
    type: "Foundations",
    logo: oracleCert,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "June 2024",
    type: "Foundations",
    logo: awsCert,
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    date: "December 2024",
    type: "Foundations",
    logo: ibmCert,
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "June 2024",
    type: "Foundations",
    logo: ibmCert,
  },
  {
    title: "Getting Started with AI using IBM Watson",
    issuer: "IBM",
    date: "May 2024",
    type: "Foundations",
    logo: ibmCert,
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "December 2024",
    type: "Foundations",
    logo: googleCloudCert,
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "December 2024",
    type: "Foundations",
    logo: googleCloudCert,
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "December 2024",
    type: "Foundations",
    logo: googleCloudCert,
  },
];

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "professional":
      return "bg-accent text-accent-foreground";
    case "foundations":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Certifications = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section
      ref={containerRef}
      id="certifications"
      className="py-32 px-6 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuously expanding expertise through industry-recognized certifications from leading tech companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-hover transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-glass group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-card shadow-glass flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <Badge className={`${getTypeColor(cert.type)} rounded-full px-3 py-1`}>
                      {cert.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{cert.date}</span>
                      <a
                        href="#"
                        className="flex items-center gap-1 text-accent hover:underline"
                      >
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-glass rounded-full border border-border shadow-glass">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-lg font-semibold">
              {certifications.length} Certifications Completed
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;