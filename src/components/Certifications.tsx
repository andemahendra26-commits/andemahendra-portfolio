import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award } from "lucide-react";
import awsCert from "@/assets/logos/aws-cert.png";
import ibmCert from "@/assets/logos/ibm-cert.png";
import googleCloudCert from "@/assets/logos/google-cloud-cert.png";
import oracleCert from "@/assets/logos/oracle-cert.png";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "AWS Academy Graduate",
      issuer: "Amazon Web Services",
      date: "August 2024",
      description: "AWS Academy Cloud Foundations - Foundational understanding of AWS Cloud services, infrastructure, and best practices",
      skills: ["Cloud Computing", "AWS Services", "Security", "Cloud Architecture"],
      logo: awsCert,
    },
    {
      title: "Oracle Cloud Infrastructure",
      issuer: "Oracle",
      date: "July 2024",
      description: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      skills: ["OCI", "Generative AI", "Cloud Services", "AI/ML"],
      logo: oracleCert,
    },
    {
      title: "Google Cloud Computing",
      issuer: "Google Cloud",
      date: "June 2024",
      description: "Foundations of Cloud Computing through Google Cloud Skills Boost",
      skills: ["GCP", "Cloud Architecture", "DevOps", "Cloud Storage"],
      logo: googleCloudCert,
    },
    {
      title: "IBM AI Developer",
      issuer: "IBM",
      date: "May 2024",
      description: "Professional Certificate in AI Developer from IBM via Coursera",
      skills: ["Artificial Intelligence", "Machine Learning", "Python", "AI Development"],
      logo: ibmCert,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      id="certifications" 
      className="py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(var(--grey-10)) 0%, hsl(var(--grey-5)) 100%)'
      }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-radial opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-radial opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--grey-225)) 0%, hsl(var(--grey-175)) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em'
            }}
          >
            Professional Certifications
          </h2>
          <p className="text-xl" style={{ color: 'hsl(var(--grey-140))' }}>
            Industry-recognized credentials in Cloud Computing and AI
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                className="h-full backdrop-blur-sm transition-all duration-500 border-0 overflow-hidden group"
                style={{
                  background: 'hsl(var(--grey-0) / 0.8)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                {/* Logo Header */}
                <div 
                  className="h-32 flex items-center justify-center relative overflow-hidden"
                  style={{ background: 'hsl(var(--grey-10))' }}
                >
                  <motion.img 
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="h-20 w-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5" style={{ color: 'hsl(var(--grey-180))' }} />
                    <CardTitle 
                      className="text-2xl"
                      style={{ color: 'hsl(var(--grey-220))' }}
                    >
                      {cert.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span style={{ color: 'hsl(var(--grey-140))' }}>
                      {cert.issuer} • {cert.date}
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'hsl(var(--grey-160))' }}
                  >
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs font-medium px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
