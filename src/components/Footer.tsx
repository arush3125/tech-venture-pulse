import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              Tech<span className="text-accent">Venture</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Empowering the next generation of entrepreneurs with cutting-edge technology 
              solutions and innovative strategies.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent-glow rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-tertiary to-tertiary-glow rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Mobile Apps</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Cloud Solutions</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Data Analytics</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2024 TechVenture. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;