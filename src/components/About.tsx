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
    name: "PARTH NAUKUDKAR",
    role: "Technical Secretary",
    phone: "+91 9876543210",
    email: "parth@techventure.com",
    category: "Technical Team"
  },
  {
    name: "ARUSH WAVHAL",
    role: "Assistant Technical Secretary",
    phone: "+91 9876543211",
    email: "arush@techventure.com",
    category: "Technical Team"
  },
  {
    name: "GAURI DHURI",
    role: "Assistant Technical Secretary",
    phone: "+91 9876543212",
    email: "gauri@techventure.com",
    category: "Technical Team"
  },
  {
    name: "YADNESH UBALE",
    role: "Technical Member",
    phone: "+91 9876543213",
    email: "yadnesh@techventure.com",
    category: "Technical Team"
  },
  {
    name: "SOHAM DHANOKAR",
    role: "OCM Head",
    phone: "+91 9876543214",
    email: "soham@techventure.com",
    category: "Event Team"
  },
  {
    name: "OLIVIAL OJAS",
    role: "General Secretary",
    phone: "+91 9876543215",
    email: "olivial@techventure.com",
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
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed body-text">
            Codecratz 2025 is organized by our prestigious college, fostering innovation 
            and technical excellence among students across the region.
          </p>
        </div>

        {/* College Photo Space */}
        <div className="mb-16">
          <Card className="card-gradient max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="relative mb-8">
                <div className="aspect-[3/2] rounded-xl overflow-hidden border-4 border-gradient-to-r from-primary/30 to-accent/30 shadow-2xl">
                  <img 
                    src="/4.png" 
                    alt="Agnel Polytechnic Campus" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: '400px' }}
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 -z-10"></div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Agnel Polytechnic, Vashi
                </h3>
                <div className="text-left space-y-4 leading-relaxed body-text">
                  <p>
                    The founder of Agnel ashram, Fr. C. Rodrigues was a great visionary. His vision was to foster love and understanding among the various communities in India and to contribute to the development of self-reliance among the youth through education.
                  </p>
                  <p>
                    Agnel Polytechnic in Vashi, Navi Mumbai, was started in 1983 with only one program - Diploma in civil engineering. It has grown since then, and today we have five branches of study in the polytechnic - Diploma in Civil Engineering, Diploma in Mechanical Engineering, Diploma in Automobile engineering, Diploma in Electronics and Computer Engineering and Dip. in Artificial Intelligence & Machine Learning.
                  </p>
                  <p>
                    What makes Agnel Polytechnic a unique institution in Mumbai is its discipline and culture and the dedication of the faculty in imparting knowledge and expertise to the students in a cosmopolitan atmosphere.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Team */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 text-accent mr-3" />
            <h3 className="text-2xl font-bold">Event Team</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTeam.map((member, index) => (
              <Card key={index} className="card-gradient group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center muted-text hover:text-accent transition-colors">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${member.phone}`} className="text-sm">
                            {member.phone}
                          </a>
                        </div>
                        <div className="flex items-center muted-text hover:text-accent transition-colors">
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

        {/* Technical Team */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Target className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold">Technical Team</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalTeam.map((member, index) => (
              <Card key={index} className="card-gradient group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-accent font-medium mb-3">{member.role}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center muted-text hover:text-primary transition-colors">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${member.phone}`} className="text-sm">
                            {member.phone}
                          </a>
                        </div>
                        <div className="flex items-center muted-text hover:text-primary transition-colors">
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
          
          <div className="text-center">
            <p className="text-sm text-subtle">
              © TECHNORATZ 2025, ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
