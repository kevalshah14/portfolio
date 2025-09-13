import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "EgoTransfer",
    description: "Pipeline for egocentric video imitation learning, tracking human hand motion and converting trajectories into robot joint angles for dexterous retargeting.",
    details: [
      "Built a pipeline for egocentric video imitation learning, tracking human hand motion and converting trajectories into robot joint angles for dexterous retargeting.",
      "Implemented a retargeting module that maps hand pose estimations to robot kinematics, enabling transfer of fine motor skills from human demonstrations.",
      "Integrated the retargeted trajectories with GR00T-Dreams to fine-tune an ACT model, producing control policies conditioned on classes of egocentric video demonstrations."
    ],
    technologies: ["Computer Vision", "Robotics", "Hand Tracking", "GR00T-Dreams", "ACT", "Imitation Learning"]
  },
  {
    title: "RoboLLVM",
    description: "Vision-Language-Action model for robotics control, combining natural language input with video stream processing to generate executable robot actions.",
    details: [
      "Implemented a VLA for robotics control, combining natural language input with video stream processing to generate executable robot actions.",
      "Designed modular components: segmentation (SA-1B), object classification, reasoning, and action planning, integrated with YOLOv8 for low-latency object detection in dynamic environments."
    ],
    technologies: ["VLA", "Computer Vision", "NLP", "YOLOv8", "SA-1B", "Robotics Control", "Real-time Processing"]
  },
  {
    title: "Autonomous Chess-Playing Robotic System",
    description: "Complete robotic system that can play chess autonomously using computer vision and motion planning algorithms.",
    details: [
      "Developed a computer vision pipeline with OpenCV and a Gemini-2.0 VLM classifier for board localization, chess piece detection, and state estimation in real time.",
      "Implemented motion planning algorithms (trajectory optimization and collision avoidance) for a collaborative robotic arm, enabling accurate pick-and-place execution of chess moves."
    ],
    technologies: ["OpenCV", "Gemini-2.0", "Computer Vision", "Motion Planning", "Robotics", "Trajectory Optimization"]
  },
  {
    title: "Reinforcement Learning from AI Feedback",
    description: "Scalable RL framework that leverages large language models to autonomously generate and refine control policies across diverse robotics challenges.",
    details: [
      "Developed a scalable reinforcement learning (RL) framework that leverages large language models (LLMs) to autonomously generate and refine control policies across diverse robotics challenges.",
      "Engineered robust memory architectures and policy tables to discretize continuous state spaces, enabling dynamic decision-making in various simulation environments."
    ],
    technologies: ["Reinforcement Learning", "LLMs", "Policy Learning", "State Space Discretization", "Simulation", "Control Systems"]
  }
];

export default function Projects() {

  return (
    <section className="py-24 px-4 bg-muted/30 bg-dots" data-testid="section-projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Innovative research and development in AI, robotics, and computer vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 h-full" data-testid={`card-project-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm leading-relaxed flex">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
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