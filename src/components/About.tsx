import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  Github,
  Users,
  Award,
  Target
} from 'lucide-react';

const teamMembers = [
  {
    name: "ARUSH SHARMA",
    role: "Technical Lead",
    phone: "+91 9876543210",
    email: "arush@techventure.com",
    category: "Technical Team"
  },
  {
    name: "PRIYA PATEL",
    role: "Project Manager",
    phone: "+91 9876543211",
    email: "priya@techventure.com",
    category: "Technical Team"
  },
  {
    name: "RAHUL KUMAR",
    role: "Full Stack Developer",
    phone: "+91 9876543212",
    email: "rahul@techventure.com",
    category: "Technical Team"
  },
  {
    name: "SNEHA GUPTA",
    role: "UI/UX Designer",
    phone: "+91 9876543213",
    email: "sneha@techventure.com",
    category: "Technical Team"
  },
  {
    name: "VIKRAM SINGH",
    role: "Event Coordinator",
    phone: "+91 9876543214",
    email: "vikram@techventure.com",
    category: "Event Team"
  },
  {
    name: "ANITA REDDY",
    role: "Marketing Head",
    phone: "+91 9876543215",
    email: "anita@techventure.com",
    category: "Event Team"
  }
];

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/techventurepulse",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/techventurepulse",
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/techventurepulse",
    color: "from-gray-700 to-gray-900"
  }
];

const About = () => {
  const technicalTeam = teamMembers.filter(member => member.category === "Technical Team");
  const eventTeam = teamMembers.filter(member => member.category === "Event Team");

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-primary mr-3" />
            <span className="text-primary font-medium text-lg">About Our College</span>
            <Award className="w-8 h-8 text-accent ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              About Our Institution
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Codecratz 2025 is organized by our prestigious college, fostering innovation 
            and technical excellence among students across the region.
          </p>
        </div>

        {/* College Photo Space */}
        <div className="mb-16">
          <Card className="card-gradient max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">College Photo</span>
                  </div>
                  <p className="text-gray-500">College Image Placeholder</p>
                  <p className="text-sm text-gray-400">Upload college photo here</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">[College Name]</h3>
                <p className="text-foreground leading-relaxed">
                  [College description will be added here. This space is reserved for detailed 
                  information about the college, its history, achievements, and commitment to 
                  technical education and innovation.]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Team */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Target className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-white">Technical Team</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalTeam.map((member, index) => (
              <Card key={index} className="card-gradient group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-accent font-medium mb-3">{member.role}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${member.phone}`} className="text-sm">
                            {member.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-4 h-4 mr-2" />
                          <a href={`mailto:${member.email}`} className="text-sm">
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Team */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 text-accent mr-3" />
            <h3 className="text-2xl font-bold text-white">Event Team</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTeam.map((member, index) => (
              <Card key={index} className="card-gradient group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-tertiary font-medium mb-3">{member.role}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground hover:text-accent transition-colors">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${member.phone}`} className="text-sm">
                            {member.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-muted-foreground hover:text-accent transition-colors">
                          <Mail className="w-4 h-4 mr-2" />
                          <a href={`mailto:${member.email}`} className="text-sm">
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-tertiary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">Connect With Us</span>
          </h3>
          
          <div className="flex justify-center items-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="group border-2 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <div className={`w-8 h-8 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mr-2 group-hover:animate-pulse`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    {social.name}
                  </a>
                </Button>
              );
            })}
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © TECHNORATZ 2025, ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
