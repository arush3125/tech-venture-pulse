import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

const MapLocation = () => {
  return (
    <section id="location" className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">Event Location</span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Find us at our college campus for Codecratz 2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <Card className="card-gradient">
            <CardContent className="p-8">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-semibold">Google Maps Integration</p>
                  <p className="text-sm text-gray-400">Interactive map will be embedded here</p>
                </div>
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
                    <h4 className="font-semibold text-foreground mb-2">[College Name]</h4>
                    <p className="text-foreground leading-relaxed">
                      [College Address Line 1]<br />
                      [College Address Line 2]<br />
                      [City, State - PIN Code]
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-foreground">[College Phone Number]</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-foreground">[College Email]</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-foreground mb-2">Event Venue</h4>
                <p className="text-foreground text-sm">
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
                  [Bus route information and nearest bus stop details]
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🚗</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">By Car</h4>
                <p className="text-muted-foreground text-sm">
                  [Parking information and driving directions]
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🚊</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">By Train</h4>
                <p className="text-muted-foreground text-sm">
                  [Nearest railway station and distance information]
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
