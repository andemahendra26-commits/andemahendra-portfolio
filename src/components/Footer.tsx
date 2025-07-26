import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Ande Mahendra</h3>
            <p className="text-primary-foreground/80">
              AI & Machine Learning Engineer | B.Tech CSE Student
            </p>
          </div>

          <Separator className="bg-primary-foreground/20 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Education</h4>
              <p className="text-primary-foreground/80 text-sm">
                B.Tech CSE (AI & ML)<br />
                Siddhartha Institute of Engineering and Technology
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Specialization</h4>
              <p className="text-primary-foreground/80 text-sm">
                Artificial Intelligence<br />
                Machine Learning & Data Analytics
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-primary-foreground/80 text-sm">
                andemahendra26@gmail.com<br />
                +91 9063064262
              </p>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20 mb-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© 2025 Ande Mahendra. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Built with passion and dedication</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;