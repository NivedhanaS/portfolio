import { motion } from "framer-motion";
import { Scene3D } from "@/components/Scene3D";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Scene3D />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6">
              Nivedhana S
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-rajdhani"
          >
            Aspiring Software Developer | React.js | Flutter | MERN Stack
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-semibold mb-6">
              About Me
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Aspiring Software Developer with strong problem-solving skills and hands-on experience in building scalable,
              responsive web applications. Eager to contribute to high-quality software solutions while continuously learning
              and improving performance and user experience.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <h3 className="text-4xl font-orbitron font-bold text-primary mb-2">8.0</h3>
                <p className="text-muted-foreground">CGPA</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <h3 className="text-4xl font-orbitron font-bold text-primary mb-2">3+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <h3 className="text-4xl font-orbitron font-bold text-primary mb-2">136</h3>
                <p className="text-muted-foreground">BEC Score</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link to="/projects">
              <Button size="lg" className="font-orbitron font-semibold">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-orbitron font-semibold">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.8 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="mt-16"
          >
            <ArrowDown className="mx-auto text-primary" size={32} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
