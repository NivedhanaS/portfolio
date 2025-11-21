import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "3D Portfolio Experience",
    description: "An immersive portfolio built with Three.js and React",
    tech: ["React", "Three.js", "Framer Motion"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping experience with real-time updates",
    tech: ["Next.js", "Node.js", "MongoDB"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights",
    tech: ["React", "Python", "TensorFlow"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Mobile Game",
    description: "WebGL-based mobile game with multiplayer support",
    tech: ["WebGL", "Socket.io", "Express"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Design System",
    description: "Comprehensive component library for enterprise apps",
    tech: ["React", "Storybook", "TypeScript"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Video Streaming App",
    description: "Netflix-like streaming platform with custom player",
    tech: ["React", "FFmpeg", "AWS"],
    color: "from-pink-500 to-rose-500",
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
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 text-glow-cyan">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Showcasing my best work and creative experiments
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
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 rounded-2xl blur-xl transition-opacity" 
                   style={{ backgroundImage: `linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))` }} />
              
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
                  <Button size="sm" className="flex-1 glow-cyan">
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
