import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch with the 
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              CODECRATZ Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions about registration, timelines, rules, or sponsorships? Reach out and we’ll get back within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-gradient border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-white/50 border-white/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-white/50 border-white/20" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input type="email" placeholder="john.doe@example.com" className="bg-white/50 border-white/20" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Team Name (optional)</label>
                    <Input placeholder="The Innovators" className="bg-white/50 border-white/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Topic</label>
                    <Input placeholder="Registration / Rules / Sponsorship" className="bg-white/50 border-white/20" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Ask us anything about CODECRATZ '25..."
                    rows={5}
                    className="bg-white/50 border-white/20"
                  />
                </div>
                
                <Button className="btn-gradient w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Organizer contacts</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Reach out via email for specific queries, or use the form to contact the organizing team.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="card-gradient border-0 group">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">General Support</h4>
                    <p className="text-muted-foreground">support@codecratz.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 group">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Registration Helpdesk</h4>
                    <p className="text-muted-foreground">+91 00000 00000</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 group">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-tertiary to-tertiary-glow rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Event Venue</h4>
                    <p className="text-muted-foreground">To be announced</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;