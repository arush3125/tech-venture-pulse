import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Shield, 
  Users, 
  Clock, 
  Trophy,
  CheckCircle,
  AlertCircle,
  FileText,
  Download,
  MessageCircle
} from 'lucide-react';
import CountdownCard from './CountdownCard';
import { useCountdown } from '../hooks/useCountdown';

const Rules = () => {
  // Calculate target dates from current date
  const now = new Date();
  const registrationDeadline = new Date(now.getTime() + (2 * 30 * 24 * 60 * 60 * 1000)); // 2 months
  const eventStart = new Date(now.getTime() + (3 * 30 * 24 * 60 * 60 * 1000)); // 3 months
  const resultsDate = new Date(now.getTime() + (3 * 30 * 24 * 60 * 60 * 1000) + (2 * 24 * 60 * 60 * 1000)); // 3 months 2 days

  // Get countdown values
  const registrationCountdown = useCountdown(registrationDeadline);
  const eventCountdown = useCountdown(eventStart);
  const resultsCountdown = useCountdown(resultsDate);

  return (
    <section id="rules" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Rules & <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">Guidelines</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Please read the following rules and guidelines carefully before participating in Codecratz 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* General Rules */}
          <Card className="card-gradient">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">General Rules</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">1st year students are not allowed to participate in CodeCratz</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">Diploma students from all over Maharashtra are welcome to participate</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">All the members of your team should be of the same college</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">Teams should have a team leader along with 3 other members for a total of 4 participants</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">Meals and accommodation will be provided for all participants throughout the 24-hour finals</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competition Rules */}
          <Card className="card-gradient">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Trophy className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Competition Rules</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">The top 4 teams from each problem statement shall be chosen for the 24 hr Grand Finale which is set to be held on 17th and 18th January 2025</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">Teams are required to carry the following documents: College ID, Government ID and Consent Form</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">After the 24 hr Grand Finale, teams are expected to present a working model of their solution to the judges for evaluation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">Any solution prototypes created by the finalists will be the intellectual property of the organizers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* PPT Template */}
          <Card className="card-gradient group cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">PPT Template</h3>
              <p className="text-muted-foreground mb-6">
                Download the official presentation template for your final submission
              </p>
              <Button className="btn-gradient group w-full">
                <Download className="mr-2 w-4 h-4" />
                Download Template
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Group */}
          <Card className="card-gradient group cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">WhatsApp Group</h3>
              <p className="text-muted-foreground mb-6">
                Join our official WhatsApp group for updates and announcements
              </p>
              <Button className="btn-gradient group w-full">
                <Users className="mr-2 w-4 h-4" />
                Join Group
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Info */}
        <Card className="card-gradient max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Important Deadlines</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CountdownCard 
                  days={registrationCountdown.days}
                  hours={registrationCountdown.hours}
                  minutes={registrationCountdown.minutes}
                />
                <div className="mt-4">
                  <div className="text-foreground font-semibold">Registration Deadline</div>
                  <div className="text-muted-foreground text-sm">Last date to register</div>
                </div>
              </div>
              <div className="text-center">
                <CountdownCard 
                  days={eventCountdown.days}
                  hours={eventCountdown.hours}
                  minutes={eventCountdown.minutes}
                />
                <div className="mt-4">
                  <div className="text-foreground font-semibold">Event Start</div>
                  <div className="text-muted-foreground text-sm">Competition begins</div>
                </div>
              </div>
              <div className="text-center">
                <CountdownCard 
                  days={resultsCountdown.days}
                  hours={resultsCountdown.hours}
                  minutes={resultsCountdown.minutes}
                />
                <div className="mt-4">
                  <div className="text-foreground font-semibold">Final Presentation</div>
                  <div className="text-muted-foreground text-sm">Results announcement</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Rules;
