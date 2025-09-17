import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

const MapLocation = () => {
  return (
    <section id="location" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">Event Location</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Find us at our college campus for Codecratz 2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <Card className="card-gradient">
            <CardContent className="p-8">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.1588529295855!2d72.99127510000001!3d19.075538999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c135baaaaaab%3A0x931cf32f3e166f1f!2sFr.%20Agnel%20Polytechnic!5e1!3m2!1sen!2sin!4v1757835817571!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fr. Agnel Polytechnic Location"
                />
              </div>
              <div className="flex items-center justify-center">
                <Navigation className="w-5 h-5 text-primary mr-2" />
                <span className="text-foreground font-medium">Get Directions</span>
              </div>
            </CardContent>
          </Card>

          {/* Address & Contact Info */}
          <Card className="card-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">College Address</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Fr. Agnel Polytechnic</h4>
                    <p className="text-foreground leading-relaxed">
                      Sector 9A, Vashi<br />
                      Navi Mumbai, Maharashtra<br />
                      400703, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-foreground">+91 22 2789 5291</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-foreground">info@agnelpolytechnic.edu.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-black mb-2">Event Venue</h4>
                <p className="text-white text-sm">
                  The hackathon will be conducted in [Specific Building/Hall Name]. 
                  Participants should report to the main reception for registration and further instructions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transportation Info */}
        <Card className="card-gradient max-w-4xl mx-auto mt-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">How to Reach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🚌</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">By Bus</h4>
                <p className="text-muted-foreground text-sm">
                  Nearest bus stop: Vashi Bus Depot. Multiple bus routes available from major areas of Mumbai and Navi Mumbai.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🚗</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">By Car</h4>
                <p className="text-muted-foreground text-sm">
                  Parking available at college premises. Navigate via Noor Masjid as landmark for easy directions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🚊</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">By Train</h4>
                <p className="text-muted-foreground text-sm">
                  Nearest station: Vashi Railway Station. Approximately 10-15 minutes walk from the college campus.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MapLocation;
