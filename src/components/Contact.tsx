import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, User, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Have questions about Codecratz 2025? Need help with registration? 
            Get in touch with our organizing team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                <Card className="card-gradient group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground">[Event Email Address]</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-tertiary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground">[Contact Phone Number]</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-tertiary to-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Event Coordinator</h4>
                        <p className="text-muted-foreground">[Coordinator Name & Contact]</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Event Date</h4>
                        <p className="text-muted-foreground">[Event Date & Time]</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up">
            <Card className="card-gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name" 
                        className="bg-background/50 border-muted focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name" 
                        className="bg-background/50 border-muted focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-background/50 border-muted focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      College/Institution
                    </label>
                    <Input 
                      placeholder="Your college name" 
                      className="bg-background/50 border-muted focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      placeholder="Registration Query / Technical Support / General Inquiry" 
                      className="bg-background/50 border-muted focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Your message or query about Codecratz 2025..." 
                      rows={5}
                      className="bg-background/50 border-muted focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button className="btn-gradient w-full group">
                    <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;