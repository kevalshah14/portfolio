import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Twitter } from "lucide-react";

export default function Footer() {
  const handleContactClick = (type: string, url?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else if (type === 'github') {
      window.open('https://github.com/kevalshah14', '_blank');
    } else if (type === 'linkedin') {
      window.open('https://linkedin.com/in/keval-shah14', '_blank');
    } else if (type === 'email') {
      window.location.href = 'mailto:kshah57@asu.edu';
    } else {
      console.log(`Footer ${type} clicked`);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border" data-testid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Interested in collaborating on AI, robotics, or innovative tech projects?
              </p>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleContactClick('email')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  data-testid="button-footer-email"
                >
                  kshah57@asu.edu
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "Work Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Education", href: "#education" }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => console.log('Footer nav clicked:', link.label)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  data-testid={`button-footer-nav-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleContactClick('github')}
                data-testid="button-footer-github"
                className="hover-elevate"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleContactClick('linkedin')}
                data-testid="button-footer-linkedin"
                className="hover-elevate"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleContactClick('x', 'https://x.com/keval_shah14')}
                data-testid="button-footer-x"
                className="hover-elevate"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleContactClick('email')}
                data-testid="button-footer-email-icon"
                className="hover-elevate"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to opportunities in AI research, robotics engineering, and innovative tech development.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Keval Shah. Built with
            <Heart className="h-4 w-4 text-red-500" />
            using React & TypeScript
          </p>
          <p className="text-sm text-muted-foreground">
            AI Engineer & Robotics Researcher
          </p>
        </div>
      </div>
    </footer>
  );
}