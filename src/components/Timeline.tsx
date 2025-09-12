import { useEffect, useRef, useState } from 'react';
import { 
  FileText, 
  Upload, 
  Users, 
  Code 
} from 'lucide-react';

const timelineData = [
  {
    id: 1,
    title: "Release of Problem Statements",
    description: "Showcase of all 6 Problem Statements",
    icon: FileText,
    date: "November 9, 2025",
    year: "2025"
  },
  {
    id: 2,
    title: "Submission of Ideas",
    description: "Submit your ideas, in the form of pdf, in the given google form",
    icon: Upload,
    date: "December 15, 2025",
    year: "2025"
  },
  {
    id: 3,
    title: "Announcement Of Shortlisted Teams",
    description: "The top 4 teams from each problem statement will be selected for the Grand Finale",
    icon: Users,
    date: "December 20, 2025",
    year: "2025"
  },
  {
    id: 4,
    title: "24 Hour Live Hackathon Starts",
    description: "A 24 Hour offline hackathon will be held determining the winner for each problem statement",
    icon: Code,
    date: "January 17, 2026",
    year: "2026"
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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Event Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Important dates and milestones for Codecratz 2025. Mark your calendar 
            and don't miss any deadlines!
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

                  <div className="mb-2">
                    <span className="text-lg font-bold text-primary">
                      {item.date}
                    </span>
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