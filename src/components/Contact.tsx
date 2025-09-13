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
            Let's Build Something
            <span className="block bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help you bring your vision to life. Reach out to us through 
                any of the channels below, and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="card-gradient group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">codecratz@agnelpolytechnic.edu</p>
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
                      <p className="text-muted-foreground">+91 98765 43210</p>
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
                      <p className="text-muted-foreground">Prof. John Doe - +91 98765 43211</p>
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
                      <p className="text-muted-foreground">March 15-16, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Venue</h4>
                      <p className="text-muted-foreground">Agnel Polytechnic, Vashi, Navi Mumbai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                      placeholder="john.doe@example.com" 
                      className="bg-background/50 border-muted focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      placeholder="Inquiry about CODECRATZ '25" 
                      className="bg-background/50 border-muted focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your inquiry or questions about the hackathon..."
                      rows={5}
                      className="bg-background/50 border-muted focus:border-primary"
                    />
                  </div>
                  
                  <Button className="btn-gradient w-full group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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