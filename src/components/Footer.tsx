import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-4 font-orbitron">
              CODECRATZ <span className="text-accent">'25</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              The flagship coding and creativity event. Build, learn, collaborate, and compete across
              prelims, the main hackathon, and finals.
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>What is CODECRATZ</li>
              <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => document.getElementById('timeline')?.scrollIntoView({behavior:'smooth'})}>Event Timeline</li>
              <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Contact</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Rules & FAQs</li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Event Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Registration: Opens Soon</li>
              <li>Venue: To be announced</li>
              <li>Support: <span className="text-foreground">support@codecratz.com</span></li>
              <li>Sponsorships: sponsors@codecratz.com</li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2025 CODECRATZ. All rights reserved.</p>
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