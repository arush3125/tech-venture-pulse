import { Card, CardContent } from '@/components/ui/card';
import { 
  AlertTriangle, 
  TrendingDown, 
  Clock, 
  Users, 
  Zap, 
  Target 
} from 'lucide-react';

const problemStatements = [
  {
    icon: TrendingDown,
    title: "Declining Market Share",
    description: "Traditional businesses are losing ground to digital-first competitors who leverage technology to deliver superior customer experiences and operational efficiency.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: Clock,
    title: "Slow Time-to-Market",
    description: "Companies struggle with lengthy development cycles and outdated processes, missing critical market opportunities while competitors launch faster.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Poor Customer Engagement",
    description: "Businesses lack the digital tools and insights needed to understand and engage their customers effectively, leading to reduced loyalty and revenue.",
    gradient: "from-yellow-500 to-yellow-600"
  },
  {
    icon: AlertTriangle,
    title: "Legacy System Constraints",
    description: "Outdated technology infrastructure limits scalability, increases maintenance costs, and prevents businesses from adapting to market changes.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Inefficient Operations",
    description: "Manual processes and disconnected systems create bottlenecks, increase errors, and waste valuable resources that could drive growth.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Target,
    title: "Lack of Data-Driven Insights",
    description: "Organizations make decisions based on intuition rather than data, missing opportunities for optimization and strategic advantage.",
    gradient: "from-green-500 to-green-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Problems We 
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Solve
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Critical challenges facing modern businesses that prevent growth and innovation. 
            We transform these problems into competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemStatements.map((problem, index) => {
            const Icon = problem.icon;
            
            return (
              <Card 
                key={index} 
                className="card-gradient border-0 group cursor-pointer overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${problem.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-red-500 transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;