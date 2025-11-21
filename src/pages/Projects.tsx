import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Daily Expense Log",
    description: "A responsive expense tracking application with state management and RESTful APIs for CRUD operations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Taxi Booking App",
    description: "Real-time ride tracking, fare estimation, and secure payments with Google Maps API integration.",
    tech: ["Flutter", "Firebase", "Google Maps API", "Dart"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Habit Tracker",
    description: "Full-stack habit tracking web app with data validation, API error handling, and responsive UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    color: "from-purple-500 to-pink-500",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Showcasing my development work and technical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 rounded-2xl blur-xl transition-opacity" />
              
              <div className="relative bg-card border border-border rounded-2xl p-6 h-full backdrop-blur-sm hover:border-primary transition-all">
                <div className={`h-40 rounded-xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-6xl font-orbitron font-bold"
                  >
                    {project.title.charAt(0)}
                  </motion.div>
                </div>

                <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 font-rajdhani">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-rajdhani"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 font-rajdhani">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 font-rajdhani">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internship Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-card border border-border rounded-2xl p-8"
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6">Internship Experience</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-orbitron font-semibold text-primary">Blackstone Infomatics</h3>
                <p className="text-lg text-muted-foreground font-rajdhani">Software Developer Intern (Onsite)</p>
              </div>
            </div>
            <ul className="space-y-2 text-foreground/80 font-rajdhani">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Worked on a real-time taxi booking application, implementing UI features, ride tracking, and location services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Collaborated with cross-functional teams to enhance application functionality and optimize performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Gained hands-on experience in debugging, testing, and improving user interface design</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
