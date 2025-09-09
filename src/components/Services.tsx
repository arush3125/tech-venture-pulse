import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  BarChart3 
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built with modern technologies to meet your unique business requirements.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    gradient: "from-accent to-accent-glow"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive, fast, and SEO-optimized websites that convert visitors into customers.",
    gradient: "from-tertiary to-tertiary-glow"
  },
  {
    icon: Database,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services to support your growing business needs.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and customer data.",
    gradient: "from-accent to-tertiary"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and AI solutions.",
    gradient: "from-tertiary to-primary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our 
            <span className="bg-gradient-to-r from-accent via-tertiary to-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <Card 
                key={index} 
                className="card-gradient border-0 group cursor-pointer overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
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