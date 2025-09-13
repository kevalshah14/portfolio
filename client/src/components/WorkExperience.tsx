import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  url?: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "The Good Drone Company",
    position: "Machine Learning & Embedded Systems Intern",
    period: "June 2025 – August 2025",
    location: "Remote",
    url: "https://thegooddronecompany.com/",
    achievements: [
      "Built servo degradation ML model using current/voltage time-series data; designed Arduino Nano test rig with PWM generation, current sensing, and circular buffer pipeline for failure event capture and supervised training.",
      "Developed Python MAVLink parser for flight log analysis, implementing FFT spectral analysis on IMU vibration data and GPS telemetry processing for geospatial flight path reconstruction.",
      "Implemented bare-metal C firmware for distributed PIC32 microcontroller network, featuring custom I²C protocols, interrupt handling, ADC sampling, and real-time task scheduling across multiple control boards.",
      "Engineered UART telemetry bridge with packet multiplexing and integrated React.js dashboard for real-time visualization of system states across embedded nodes.",
      "Integrated RockBLOCK Iridium satellite communication with flight stack using MAVLink/MAVProxy protocols, enabling remote ground control station connectivity through Mission Planner."
    ],
    technologies: ["Python", "C", "Arduino", "React.js", "MAVLink", "FFT Analysis", "PIC32", "I²C", "UART"]
  },
  {
    company: "BeHuman(e)",
    position: "Founding AI Engineer",
    period: "Mar 2023 - June 2025",
    location: "Remote",
    url: "https://www.behumane.ai/",
    achievements: [
      "Architected and deployed production AI systems including a multi-modal RAG pipeline for context-aware therapeutic dialogue, agentic workflow orchestration for multi-step reasoning, and dynamic model routing infrastructure to optimize performance across multiple LLMs (GPT-4, Claude, open-source models).",
      "Fine-tuned and aligned large language models for therapeutic parenting applications using supervised fine-tuning and reinforcement learning from human feedback (RLHF), improving empathy metrics by 35% and safety alignment scores, while implementing NER-based PII detection pipelines to ensure HIPAA-compliant data processing.",
      "Built end-to-end ML infrastructure with FastAPI microservices, PostgreSQL vector databases, and real-time recommendation engines using collaborative filtering and neural embeddings, serving 10,000 active users with sub-200ms response times and personalized therapeutic insights."
    ],
    technologies: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "GPT-4", "Claude", "RLHF", "RAG", "NER", "HIPAA"]
  }
];

export default function WorkExperience() {
  const handleCompanyClick = (url: string) => {
    console.log('Company link clicked:', url);
  };

  return (
    <section className="py-24 px-4 bg-dots" data-testid="section-work-experience">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Work</span> Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building cutting-edge AI systems and embedded solutions across diverse domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-experience-${index}`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      {exp.url ? (
                        <button 
                          onClick={() => handleCompanyClick(exp.url!)}
                          className="text-primary hover:underline flex items-center gap-2"
                          data-testid={`button-company-${index}`}
                        >
                          {exp.company}
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      ) : (
                        exp.company
                      )}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">
                      {exp.position}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm leading-relaxed flex">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}