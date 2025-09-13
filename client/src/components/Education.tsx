import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy } from "lucide-react";

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
  gpa?: string;
  honors?: string[];
}

interface Achievement {
  title: string;
  description: string;
  icon: any;
}

const education: EducationItem[] = [
  {
    degree: "Master of Science in Robotics and Autonomous Systems",
    school: "Arizona State University",
    period: "August 2024 – December 2025",
    location: "Tempe, AZ"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Arizona State University", 
    period: "August 2021 – May 2024",
    location: "Tempe, AZ",
    honors: ["Summa Cum Laude", "Dean's List (All Semesters)"]
  }
];

const achievements: Achievement[] = [
  {
    title: "Moeur Award",
    description: "Arizona State University's highest academic distinction",
    icon: Trophy
  },
  {
    title: "8 Hackathon Wins",
    description: "Multiple first-place finishes in competitive programming and innovation challenges",
    icon: Award
  },
  {
    title: "Dean's List Recognition",
    description: "Achieved Dean's List for all undergraduate semesters (Fall 2021 – Spring 2024)",
    icon: GraduationCap
  }
];

export default function Education() {
  const handleEducationClick = (degree: string) => {
    console.log('Education clicked:', degree);
  };

  const handleAchievementClick = (achievement: string) => {
    console.log('Achievement clicked:', achievement);
  };

  return (
    <section className="py-24 px-4 bg-muted/30" data-testid="section-education">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Academic excellence and recognition in computer science and robotics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center lg:text-left">Education</h3>
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 cursor-pointer"
                onClick={() => handleEducationClick(edu.degree)}
                data-testid={`card-education-${index}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {edu.school}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.honors && (
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, honorIndex) => (
                          <Badge key={honorIndex} variant="secondary" className="text-xs">
                            {honor}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center lg:text-left">Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 cursor-pointer"
                onClick={() => handleAchievementClick(achievement.title)}
                data-testid={`card-achievement-${index}`}
              >
                <CardContent className="py-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}