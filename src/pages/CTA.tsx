import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse" />
          
          <div className="relative bg-card/50 backdrop-blur-xl border border-primary/30 rounded-3xl p-12 md:p-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-8"
            >
              <Sparkles className="text-primary" size={64} />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
              Let's Create Something Amazing
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-rajdhani max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's build 
              innovative software solutions together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="font-orbitron font-bold text-lg px-12 py-6 transition-all duration-300"
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </Link>

              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="font-orbitron font-bold text-lg px-12 py-6"
                  >
                    View Portfolio
                  </Button>
                </motion.div>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-muted-foreground font-rajdhani"
            >
              <p className="text-lg">Open to opportunities and collaborations</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
