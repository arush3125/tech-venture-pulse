import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  Car, 
  Calendar, 
  Smartphone,
  Shield,
  Gamepad2,
  Eye,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const problemStatements = [
  {
    id: "PS-1",
    icon: Wallet,
    title: "Finance Tracker",
    subtitle: "A new and innovative way of keeping account of all your finances",
    description: "Individuals often struggle with effective financial management due to a lack of accessible tools. Traditional methods are time-consuming and lead to poor decisions. Develop a user-friendly finance tracking app that provides real-time insights, automates expense categorization, offers personalized financial advice, and ensures robust security.",
    features: [
      "Easy to use interface for non-tech-savvy users",
      "Accurate tracking of income and expenses",
      "Budgeting tools for different categories",
      "Savings goals tracking and management",
      "Insights and reports on spending habits"
    ],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "PS-2",
    icon: Car,
    title: "Smart Parking",
    subtitle: "A solution for Effortless Parking Management",
    description: "With the rapid increase in urban population and vehicle ownership, finding an available parking spot has become one of the most significant challenges in cities worldwide. This app should help drivers find available parking spots in real time, reduce congestion, and optimize parking space usage.",
    features: [
      "User-friendly mobile app with intuitive interface",
      "Real-time parking spot location and reservation",
      "Integration with GPS and navigation systems",
      "Smart sensors for vehicle presence detection",
      "Turn-by-turn directions to reserved spots"
    ],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "PS-3",
    icon: Calendar,
    title: "Event Handling",
    subtitle: "College Event Management System",
    description: "Colleges and universities host numerous events throughout the academic year, including cultural festivals, technical symposiums, sports meet, workshops, and guest lectures. Managing these events efficiently can be challenging due to coordination needs among various stakeholders.",
    features: [
      "Event creation and management tools",
      "Online registration with payment processing",
      "Communication tools for notifications",
      "Attendance tracking system",
      "Automated e-certificate generation"
    ],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: "PS-4",
    icon: Smartphone,
    title: "Mobile Attendance System",
    subtitle: "Modern attendance management for educational institutions",
    description: "In many educational institutions, tracking student attendance is often done manually or through outdated systems, leading to inefficiencies, inaccuracies, and a lack of real-time data. A more streamlined and reliable system is crucial for improving the educational experience.",
    features: [
      "Mobile-based attendance marking",
      "Real-time attendance tracking",
      "Automated report generation",
      "Student engagement analytics",
      "Integration with existing systems"
    ],
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: "PS-5",
    icon: Shield,
    title: "Cybersecurity Awareness Platform",
    subtitle: "Educational platform for digital security awareness",
    description: "With increasing cyber threats and digital vulnerabilities, there's a growing need for comprehensive cybersecurity education. Develop an interactive platform that educates users about cybersecurity best practices, threat identification, and safe digital habits through engaging content and practical exercises.",
    features: [
      "Interactive cybersecurity training modules",
      "Real-time threat simulation exercises",
      "Personalized learning paths and assessments",
      "Gamified learning with badges and rewards",
      "Regular updates on latest security threats"
    ],
    gradient: "from-red-500 to-pink-600"
  },
  {
    id: "PS-6",
    icon: Gamepad2,
    title: "Educational Gaming Platform",
    subtitle: "Gamified learning experience for students",
    description: "Traditional learning methods often fail to engage students effectively, leading to reduced retention and interest. Create an educational gaming platform that transforms learning into an interactive, enjoyable experience while maintaining educational value and tracking progress.",
    features: [
      "Subject-specific educational games",
      "Progress tracking and analytics",
      "Multiplayer collaborative learning modes",
      "Adaptive difficulty based on performance",
      "Teacher dashboard for monitoring student progress"
    ],
    gradient: "from-indigo-500 to-purple-600"
  }
];

const Services = () => {
  return (
    <section id="problem-statements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              PROBLEM STATEMENTS
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Innovative technology solutions addressing real-world challenges. 
            Choose your problem statement and build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemStatements.map((problem, index) => {
            const Icon = problem.icon;
            
            return (
              <Card 
                key={index} 
                className="card-gradient border-0 group cursor-pointer overflow-hidden h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${problem.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-accent mb-1">{problem.id}</div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {problem.title}
                        </h3>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all">
                      <Eye className="w-4 h-4 mr-1" />
                      VIEW MORE
                    </Button>
                  </div>
                  
                  <p className="text-accent font-medium mb-4 text-sm">
                    {problem.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {problem.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-foreground mb-3">Desired Solution:</h4>
                    <div className="space-y-2">
                      {problem.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <Button className="w-full btn-gradient group">
                      Choose This Challenge
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
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