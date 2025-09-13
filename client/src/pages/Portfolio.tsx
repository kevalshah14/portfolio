import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useTheme } from "@/providers/ThemeProvider";

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation isDark={theme === "dark"} toggleTheme={toggleTheme} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="experience">
          <WorkExperience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="education">
          <Education />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}