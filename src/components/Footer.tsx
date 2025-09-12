import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-r from-background to-card relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                TECHNORATZ'25
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Empowering entrepreneurs and innovators with cutting-edge technology solutions 
              that transform ideas into reality. Join the future of tech innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/techventurepulse" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com/techventurepulse" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com/company/techventurepulse" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://twitter.com/techventurepulse" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-accent to-accent-glow rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Twitter className="w-5 h-5 text-white" />
              </a>
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
          <p>&copy; TECHNORATZ 2025, ALL RIGHTS RESERVED</p>
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