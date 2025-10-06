import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, GraduationCap, Heart, Rocket, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import profileImage from '@assets/Keval.png';

export default function Home() {
  const handleSocialClick = (type: string, url?: string) => {
    // Track social clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'social_click', {
        social_platform: type,
        event_category: 'engagement'
      });
    }
    
    if (url) {
      window.open(url, '_blank');
    } else if (type === 'email') {
      window.location.href = 'mailto:kshah57@asu.edu';
    } else if (type === 'github') {
      window.open('https://github.com/kevalshah14', '_blank');
    } else if (type === 'linkedin') {
      window.open('https://linkedin.com/in/keval-shah14', '_blank');
    }
  };

  const handleDownloadResume = () => {
    // Track resume download
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'file_download', {
        file_name: 'resume.pdf',
        file_type: 'PDF',
        event_category: 'engagement',
        event_label: 'Home Page Resume Download'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Keval Shah - AI Engineer & Robotics Researcher | Portfolio</title>
        <meta name="description" content="Keval Shah: AI Engineer and Robotics Researcher specializing in machine learning, computer vision, and autonomous systems. Former founding engineer with expertise in Python, PyTorch, ROS, and embedded systems." />
        <meta name="keywords" content="Keval Shah, AI Engineer, Robotics Researcher, Machine Learning, Computer Vision, Autonomous Systems, Python, PyTorch, ROS, Arizona State University" />
        <meta name="author" content="Keval Shah" />
        <link rel="canonical" href="https://kevalshah.dev/" />
        <meta property="og:url" content="https://kevalshah.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Keval Shah - AI Engineer & Robotics Researcher" />
        <meta property="og:description" content="AI Engineer and Robotics Researcher specializing in machine learning, computer vision, and autonomous systems." />
        <meta property="og:image" content="https://kevalshah.dev/attached_assets/Keval.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kevalshah.dev/" />
        <meta property="twitter:title" content="Keval Shah - AI Engineer & Robotics Researcher" />
        <meta property="twitter:description" content="AI Engineer and Robotics Researcher specializing in machine learning, computer vision, and autonomous systems." />
        <meta property="twitter:image" content="https://kevalshah.dev/attached_assets/Keval.png" />
        <meta property="twitter:creator" content="@keval_shah14" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://kevalshah.dev/"
            }]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-in fade-in-0 duration-700">
              <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Hi, I'm
              </span>
              {' '}
              <span className="text-primary drop-shadow-sm">
                Keval
              </span>
            </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold">
                  AI Engineer • Robotics Researcher 
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I'm passionate about building the future through artificial intelligence and robotics. 
                  I've led technical teams and I'm currently finishing my master's degree.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  As a former founding engineer at a VC-backed startup, I experienced the excitement of scaling 
                  cutting-edge technology from concept to reality. My love for robotics and AI drives 
                  everything I do.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleSocialClick('github')}
                  data-testid="button-home-github"
                  className="hover-elevate hover:scale-110 transition-transform"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleSocialClick('linkedin')}
                  data-testid="button-home-linkedin"
                  className="hover-elevate hover:scale-110 transition-transform"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleSocialClick('x', 'https://x.com/keval_shah14')}
                  data-testid="button-home-x"
                  className="hover-elevate hover:scale-110 transition-transform"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleSocialClick('email')}
                  data-testid="button-home-email"
                  className="hover-elevate hover:scale-110 transition-transform"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" data-testid="button-download-resume" className="hover:scale-105 transition-transform">
                  <a href="/resume.pdf" download onClick={handleDownloadResume}>
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" data-testid="button-view-projects" className="hover:scale-105 transition-transform">
                  <Link href="/projects">
                    <Rocket className="h-5 w-5 mr-2" />
                    See Projects
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl shadow-neon overflow-hidden tilt-on-hover border-glowing">
                  <picture>
                    <source srcSet="/attached_assets/Keval.webp" type="image/webp" />
                    <img
                      src={profileImage}
                      alt="Keval Shah - AI Engineer and Robotics Researcher at Arizona State University"
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      width="800"
                      height="800"
                    />
                  </picture>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full pulse-glow"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/30 rounded-full rotate-slow"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/40 rounded-full shadow-magical"></div>
                <div className="absolute bottom-1/4 -left-6 w-3 h-3 bg-primary/50 rounded-full shadow-neon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 interactive-card border-gradient shadow-layered" data-testid="card-philosophy">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary wiggle" />
                  <h3 className="text-xl font-semibold">My Approach</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in learning by building. Whether it's diving deep into research papers or 
                  prototyping new algorithms, I'm constantly experimenting and pushing boundaries. 
                  My approach combines academic rigor with practical implementation, always asking 
                  "how can this make a real difference?"
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 interactive-card border-gradient shadow-layered" data-testid="card-vision">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="h-6 w-6 text-primary wiggle" />
                  <h3 className="text-xl font-semibold">Looking Ahead</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm fascinated by the convergence of AI and robotics in creating truly autonomous systems. 
                  From neural networks that can adapt in real-time to robots that understand context, 
                  I'm working toward a future where intelligent machines become genuine partners in solving 
                  humanity's biggest challenges.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 p-8 bg-primary/5 interactive-card shadow-magical border-gradient" data-testid="card-curiosity">
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-primary pulse-glow" />
                <h3 className="text-xl font-semibold">What Drives Me</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I’ve been building robots since I was 9, taking things apart, wiring them back
                together, and learning how intelligence can live in the real world. With today’s
                breakthroughs in AI, we’re at a rare inflection point for robotics: models are
                getting smarter, sensors cheaper, and the gap between simulation and reality is
                shrinking fast. What we build now will become the foundation for the next decade
                of physical AI, systems that can see, reason, and act reliably.
                
                I’m obsessed with that frontier: turning research into robust, embodied products,
                shipping iteratively, and learning from every failure in the field. My goal is to
                help create the primitives (tools, platforms, and techniques) that others can build
                on, and to do it responsibly with safety, transparency, and real-world impact at
                the core. I want to ride this wave and contribute something truly foundational to
                the future of robotics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-in fade-in-0 duration-1000 delay-200">
            Let's Build the Future Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in-0 duration-1000 delay-400">
            I'm always excited to connect with fellow innovators, researchers, and builders. 
            Whether you want to collaborate on a project or just chat about the latest in AI and robotics.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in-0 duration-1000 delay-600">
            <Button asChild size="lg" data-testid="button-view-experience" className="hover:scale-105 transition-transform">
              <Link href="/experience">
                View My Experience
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" data-testid="button-see-skills" className="hover:scale-105 transition-transform">
              <Link href="/skills">
                See My Skills
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}