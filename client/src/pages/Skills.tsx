import Skills from "@/components/Skills";
import { Helmet } from "react-helmet-async";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Technical Skills - Keval Shah | AI & Robotics Expertise</title>
        <meta name="description" content="Keval Shah's technical skills in AI and robotics: Python, PyTorch, TensorFlow, ROS, C++, Computer Vision, Machine Learning, Embedded Systems, and autonomous robotics development." />
        <meta name="keywords" content="Keval Shah Skills, AI Skills, Robotics Skills, Python Expert, PyTorch, Machine Learning Expert, Computer Vision" />
        <meta name="author" content="Keval Shah" />
        <link rel="canonical" href="https://kevalshah.dev/skills" />
        <meta property="og:url" content="https://kevalshah.dev/skills" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Technical Skills - Keval Shah" />
        <meta property="og:description" content="Expert skills in Python, PyTorch, ROS, Computer Vision, Machine Learning, and autonomous systems development." />
        <meta property="og:image" content="https://kevalshah.dev/attached_assets/Keval.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kevalshah.dev/skills" />
        <meta property="twitter:title" content="Technical Skills - Keval Shah" />
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
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Skills",
              "item": "https://kevalshah.dev/skills"
            }]
          })}
        </script>
      </Helmet>
      <Skills />
    </div>
  );
}