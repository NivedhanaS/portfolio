import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const scrollToProjects = () => {
    const projectsContent = document.getElementById("projects-content");
    if (projectsContent) {
      projectsContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen py-20 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4 md:mb-6">
            Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani mb-8">
            Showcasing my development work and technical skills
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="font-orbitron font-semibold"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowDown size={18} className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Projects Content */}
        <div id="projects-content" className="pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-10 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4 text-foreground">
              Coming Soon
            </h3>
            <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
              Project cards will be added here featuring Daily Expense Log, Taxi Booking App, and Habit Tracker projects from my resume.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
