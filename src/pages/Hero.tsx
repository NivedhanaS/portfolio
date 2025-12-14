import { motion } from "framer-motion";
import { Scene3D } from "@/components/Scene3D";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Scene3D />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-primary font-rajdhani mb-4"
          >
            Welcome to my portfolio 👋
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6">
              Nivedhana S
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 font-rajdhani"
          >
            Aspiring Software Developer | React.js | Flutter | MERN Stack
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10 px-4"
          >
            Aspiring Software Developer with strong problem-solving skills and hands-on experience in building scalable,
            responsive web applications. Eager to contribute to high-quality software solutions while continuously learning
            and improving performance and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <Button 
              size="lg" 
              className="font-orbitron font-semibold"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-orbitron font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.8 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="mt-12 md:mt-16"
          >
            <button onClick={() => scrollToSection("about")}>
              <ArrowDown className="mx-auto text-primary hover:text-primary/80 transition-colors" size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
