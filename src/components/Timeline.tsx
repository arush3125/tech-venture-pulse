import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Calendar, Clock, Trophy, Users, CheckCircle } from 'lucide-react';

const Timeline = () => {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const timelineSection = document.getElementById('timeline');
      
      if (timelineSection) {
        const sectionTop = timelineSection.offsetTop;
        const sectionHeight = timelineSection.offsetHeight;
        const relativeScroll = scrollPosition - sectionTop + windowHeight * 0.5;
        
        // Calculate which events should be visible based on scroll position
        const eventHeight = sectionHeight / 5; // 5 events total
        const newVisibleEvents: number[] = [];
        
        for (let i = 0; i < 5; i++) {
          if (relativeScroll > i * eventHeight * 0.8) {
            newVisibleEvents.push(i);
          }
        }
        
        setVisibleEvents(newVisibleEvents);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineEvents = [
    {
      date: "January 15, 2025",
      title: "Registration Opens",
      description: "Team registration begins. Form your teams and register for the hackathon.",
      icon: Users,
      status: "upcoming"
    },
    {
      date: "February 1, 2025", 
      title: "Problem Statements Release",
      description: "Official problem statements will be released to all registered teams.",
      icon: CheckCircle,
      status: "upcoming"
    },
    {
      date: "February 15, 2025",
      title: "Registration Closes", 
      description: "Last date for team registration. No new registrations after this date.",
      icon: Clock,
      status: "upcoming"
    },
    {
      date: "March 1-2, 2025",
      title: "Main Hackathon Event",
      description: "48-hour coding marathon begins. Teams work on their innovative solutions.",
      icon: Trophy,
      status: "upcoming"
    },
    {
      date: "March 3, 2025",
      title: "Final Presentations & Results",
      description: "Teams present their solutions. Winners announced and prizes distributed.",
      icon: Trophy,
      status: "upcoming"
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">Event Timeline</span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Important dates and milestones for Codecratz 2025. Mark your calendar and don't miss any deadlines!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-tertiary"></div>
            
            {timelineEvents.map((event, index) => {
              const isVisible = visibleEvents.includes(index);
              return (
                <div 
                  key={index} 
                  className={`relative flex items-start mb-12 transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-8 relative z-10 shadow-lg transition-all duration-700 ease-out ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                  >
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <Card 
                    className={`flex-1 card-gradient group cursor-pointer hover:scale-105 transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                  >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Calendar className="w-5 h-5 text-primary mr-2" />
                          <span className="text-primary font-semibold">{event.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;