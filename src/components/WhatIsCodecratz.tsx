import { Card, CardContent } from '@/components/ui/card';
import { Code, Trophy, Users, Clock } from 'lucide-react';

const WhatIsCodecratz = () => {
  return (
    <section id="what-is-codecratz" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">What is Codecratz?</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Codecratz is a 24-hour hackathon designed for college students across the region, 
            focusing on real-world problems. The event features an elimination round followed by 
            a final round, with each problem statement culminating in a winner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="card-gradient text-center group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">24 Hours</h3>
              <p className="text-muted-foreground">Intensive coding marathon to build innovative solutions</p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Real Problems</h3>
              <p className="text-muted-foreground">Solve actual challenges faced by industries and society</p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Team Work</h3>
              <p className="text-muted-foreground">Collaborate with fellow students and learn together</p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Win Prizes</h3>
              <p className="text-muted-foreground">Compete for exciting prizes and recognition</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Event Objectives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Innovation & Creativity</h4>
                  <p className="text-muted-foreground">
                    Participants will innovate and collaborate to develop solutions that address 
                    pressing challenges in various fields including technology, healthcare, 
                    education, and sustainability.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Skill Development</h4>
                  <p className="text-muted-foreground">
                    Our hackathon aims to bring together innovative minds from various colleges 
                    to showcase creativity and technical skills while fostering community 
                    engagement and networking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCodecratz;
