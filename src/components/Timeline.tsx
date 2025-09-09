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
    title: "Ideation Phase",
    description: "Transform brilliant ideas into viable business concepts with our ideation workshops and strategic planning sessions.",
    icon: Lightbulb,
    year: "Phase 1"
  },
  {
    id: 2,
    title: "Product Development",
    description: "Build robust, scalable solutions using cutting-edge technologies and best practices in software development.",
    icon: Rocket,
    year: "Phase 2"
  },
  {
    id: 3,
    title: "Market Strategy",
    description: "Develop comprehensive go-to-market strategies tailored to your target audience and industry dynamics.",
    icon: Target,
    year: "Phase 3"
  },
  {
    id: 4,
    title: "Team Building",
    description: "Assemble world-class teams of experts who share your vision and drive for innovation.",
    icon: Users,
    year: "Phase 4"
  },
  {
    id: 5,
    title: "Growth & Scaling",
    description: "Scale your operations efficiently while maintaining quality and fostering sustainable growth.",
    icon: TrendingUp,
    year: "Phase 5"
  },
  {
    id: 6,
    title: "Market Leadership",
    description: "Establish your brand as an industry leader through continuous innovation and strategic partnerships.",
    icon: Award,
    year: "Phase 6"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Journey to 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our proven methodology that has helped hundreds of startups 
            transform their ideas into successful businesses.
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