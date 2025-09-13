import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBackground from '@assets/generated_images/Tech_portfolio_hero_background_79a7577e.png';

export default function Hero() {
  const handleContactClick = (type: string) => {
    console.log(`${type} contact clicked`);
  };

  const handleDownloadResume = () => {
    console.log('Download resume clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Keval Shah
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-primary font-semibold">
                AI Engineer & Robotics Researcher
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Building intelligent systems that bridge the gap between artificial intelligence 
                and autonomous robotics. Specializing in machine learning, embedded systems, 
                and cutting-edge robotics research.
              </p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleContactClick('phone')}
              data-testid="button-contact-phone"
              className="hover-elevate"
            >
              <Phone className="h-4 w-4 mr-2" />
              602-813-7978
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleContactClick('email')}
              data-testid="button-contact-email"
              className="hover-elevate"
            >
              <Mail className="h-4 w-4 mr-2" />
              kshah57@asu.edu
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleContactClick('github')}
              data-testid="button-contact-github"
              className="hover-elevate"
            >
              <Github className="h-4 w-4 mr-2" />
              kevalshah14
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleContactClick('linkedin')}
              data-testid="button-contact-linkedin"
              className="hover-elevate"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              keval-shah14
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={handleDownloadResume}
              data-testid="button-download-resume"
              className="px-8"
            >
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => handleContactClick('portfolio')}
              data-testid="button-view-work"
              className="px-8 hover-elevate"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}