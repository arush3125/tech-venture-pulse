import { useEffect, useRef, useState } from 'react';
import { 
  Lightbulb, 
  Rocket, 
  Target, 
  Users, 
  TrendingUp, 
  Award 
} from 'lucide-react';

const timelineData = [
  {
    id: 1,
    title: "Registrations Open",
    description: "Sign up for CODECRATZ '25 and secure your spot. Limited seats available for teams and solo participants.",
    icon: Lightbulb,
    year: "Step 1"
  },
  {
    id: 2,
    title: "Preliminary Rounds",
    description: "Compete in online challenges to qualify for the main hackathon. Show your problem-solving and creativity.",
    icon: Rocket,
    year: "Step 2"
  },
  {
    id: 3,
    title: "Hackathon",
    description: "Build innovative solutions with your team under time pressure. Mentors and workshops will guide you.",
    icon: Target,
    year: "Step 3"
  },
  {
    id: 4,
    title: "Finals",
    description: "Top teams present to a panel of judges. Demos, Q&A, and scoring based on impact, innovation, and execution.",
    icon: Users,
    year: "Step 4"
  },
  {
    id: 5,
    title: "Prize Distribution",
    description: "Winners are announced and prizes awarded. Celebrate excellence and network with sponsors and peers.",
    icon: Award,
    year: "Step 5"
  }
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Event 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track the key milestones of CODECRATZ '25 from registrations to the grand prize distribution.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 timeline-line transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                data-index={index}
                className={`timeline-item relative flex items-center mb-16 ${
                  isLeft ? 'justify-end pr-8' : 'justify-start pl-8'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 timeline-dot transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Icon className="w-3 h-3 text-white" />
                </div>

                {/* Content card */}
                <div className={`card-gradient p-6 rounded-2xl max-w-md transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } ${isLeft ? 'text-right' : 'text-left'}`}>
                  
                  <div className={`flex items-center mb-4 ${
                    isLeft ? 'justify-end' : 'justify-start'
                  }`}>
                    <div className={`flex items-center ${
                      isLeft ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;