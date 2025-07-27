import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant mx-auto">
                <img
                  src="/lovable-uploads/f1d1d374-f9c9-468d-a22f-842c58f1dfdb.png"
                  alt="Ande Mahendra"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Ande Mahendra
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light text-muted-foreground mb-8">
              AI & Machine Learning Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              A highly motivated B.Tech Computer Science Engineering (AI & ML) student, passionate about 
              contributing to innovative organizations and continuously developing technical skills through 
              real-world challenges.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>andemahendra26@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>9063064262</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="shadow-soft"
                onClick={() => window.open('https://www.linkedin.com/in/ande-mahendra-7a9420235/', '_blank')}
              >
                Let's Connect
              </Button>
              <Button variant="outline" size="lg" className="shadow-soft">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;