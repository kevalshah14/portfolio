import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Programming",
    skills: ["Python", "C/C++", "MATLAB", "JavaScript/TypeScript"]
  },
  {
    title: "AI/ML Frameworks",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "LangChain", "NumPy/Pandas"]
  },
  {
    title: "Robotics & Systems",
    skills: ["ROS", "NVIDIA Isaac SDK", "Docker", "AWS"]
  },
  {
    title: "Data Management",
    skills: ["PostgreSQL", "MongoDB", "ChromaDB", "Prisma"]
  },
  {
    title: "Web & Automation",
    skills: ["React/Next.js", "FastAPI/Flask", "Selenium", "BeautifulSoup", "Playwright", "GitHub"]
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(selectedCategory === index ? null : index);
    console.log('Skill category clicked:', skillCategories[index].title);
  };

  return (
    <section className="py-24 px-4" data-testid="section-skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`hover-elevate transition-all duration-300 cursor-pointer ${
                selectedCategory === categoryIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handleCategoryClick(categoryIndex)}
              data-testid={`card-skill-category-${categoryIndex}`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm px-3 py-1"
                      data-testid={`badge-skill-${categoryIndex}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Machine Learning", "Computer Vision", "Robotics", "Embedded Systems",
                  "Natural Language Processing", "Deep Learning", "MLOps", "Cloud Computing",
                  "Full-Stack Development", "Data Engineering"
                ].map((competency, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2">
                    {competency}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}