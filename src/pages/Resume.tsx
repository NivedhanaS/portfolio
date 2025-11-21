import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Download my complete professional resume
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
          
          <div className="relative bg-card border border-primary/30 rounded-2xl p-12 backdrop-blur-xl">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-8"
            >
              <FileText className="text-primary" size={120} strokeWidth={1.5} />
            </motion.div>

            <div className="space-y-6 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-orbitron font-bold text-foreground mb-2">
                  Professional Resume
                </h2>
                <p className="text-muted-foreground font-rajdhani">
                  Comprehensive overview of my skills, experience, and achievements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-background/50 rounded-lg">
                  <h3 className="font-orbitron font-semibold text-primary mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground">B.E CSE @ SRIT (2020-2024)</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h3 className="font-orbitron font-semibold text-primary mb-2">CGPA</h3>
                  <p className="text-sm text-muted-foreground">8.0/10.0</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h3 className="font-orbitron font-semibold text-primary mb-2">Skills</h3>
                  <p className="text-sm text-muted-foreground">React, Flutter, MERN Stack</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h3 className="font-orbitron font-semibold text-primary mb-2">Projects</h3>
                  <p className="text-sm text-muted-foreground">3+ Full-Stack Applications</p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="w-full font-orbitron font-bold transition-all duration-300"
                onClick={() => window.open('/Nivedhana_S_Resume.pdf', '_blank')}
              >
                <Download className="mr-2" size={20} />
                Download Resume PDF
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
