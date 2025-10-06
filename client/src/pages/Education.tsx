import Education from "@/components/Education";
import { Helmet } from "react-helmet-async";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Education - Keval Shah | Arizona State University</title>
        <meta name="description" content="Keval Shah's education: Master's in Computer Science at Arizona State University, specializing in AI, robotics, machine learning, and autonomous systems. Academic background and achievements." />
        <meta name="keywords" content="Keval Shah Education, Arizona State University, ASU Computer Science, Masters in AI, Robotics Education" />
        <meta name="author" content="Keval Shah" />
        <link rel="canonical" href="https://kevalshah.dev/education" />
        <meta property="og:url" content="https://kevalshah.dev/education" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Education - Keval Shah | Arizona State University" />
        <meta property="og:description" content="Master's in Computer Science at Arizona State University, specializing in AI, robotics, and autonomous systems." />
        <meta property="og:image" content="https://kevalshah.dev/attached_assets/Keval.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kevalshah.dev/education" />
        <meta property="twitter:title" content="Education - Keval Shah" />
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
              "name": "Education",
              "item": "https://kevalshah.dev/education"
            }]
          })}
        </script>
      </Helmet>
      <Education />
    </div>
  );
}