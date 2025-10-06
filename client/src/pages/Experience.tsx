import WorkExperience from "@/components/WorkExperience";
import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Work Experience - Keval Shah | AI Engineer & Robotics</title>
        <meta name="description" content="Explore Keval Shah's professional experience as an AI Engineer and Robotics Researcher. Former founding engineer at VC-backed startup, with expertise in autonomous systems, computer vision, and embedded systems." />
        <link rel="canonical" href="https://kevalshah.dev/experience" />
        <meta property="og:url" content="https://kevalshah.dev/experience" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Work Experience - Keval Shah" />
        <meta property="og:description" content="Professional experience as an AI Engineer and Robotics Researcher with expertise in autonomous systems and computer vision." />
        <meta property="og:image" content="https://kevalshah.dev/attached_assets/Keval.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kevalshah.dev/experience" />
        <meta property="twitter:title" content="Work Experience - Keval Shah" />
        <meta property="twitter:image" content="https://kevalshah.dev/attached_assets/Keval.png" />
      </Helmet>
      <WorkExperience />
    </div>
  );
}