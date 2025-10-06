import Projects from "@/components/Projects";
import { Helmet } from "react-helmet-async";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI & Robotics Projects - Keval Shah | Portfolio</title>
        <meta name="description" content="Discover Keval Shah's AI and robotics projects including autonomous systems, computer vision, machine learning models, and embedded systems. Hands-on experience with PyTorch, ROS, and real-world robotics applications." />
        <link rel="canonical" href="https://kevalshah.dev/projects" />
        <meta property="og:url" content="https://kevalshah.dev/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI & Robotics Projects - Keval Shah" />
        <meta property="og:description" content="Explore AI and robotics projects featuring autonomous systems, computer vision, and machine learning applications." />
        <meta property="og:image" content="https://kevalshah.dev/attached_assets/Keval.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kevalshah.dev/projects" />
        <meta property="twitter:title" content="AI & Robotics Projects - Keval Shah" />
        <meta property="twitter:image" content="https://kevalshah.dev/attached_assets/Keval.png" />
      </Helmet>
      <Projects />
    </div>
  );
}