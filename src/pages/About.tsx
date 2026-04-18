import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen py-20 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-semibold mb-4 md:mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            My education, experience, and certifications
          </p>
        </motion.div>

        {/* Three Containers Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Education Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-primary transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-orbitron font-semibold text-foreground">
                Education
              </h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-orbitron font-semibold text-foreground">
                B.E Computer Science
              </h4>
              <p className="text-muted-foreground font-rajdhani">
                Sri Ramakrishna Institute of Technology
              </p>
              <p className="text-primary font-rajdhani font-semibold">
                CGPA: 8.0 / 10.0
              </p>
              <p className="text-muted-foreground font-rajdhani text-sm">
                2020 – 2024
              </p>
            </div>
          </motion.div>

          {/* Experience Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-primary transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/50 rounded-xl">
                <Briefcase className="text-foreground" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-orbitron font-semibold text-foreground">
                Experience
              </h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-orbitron font-semibold text-foreground">
                Software Developer Intern
              </h4>
              <p className="text-primary font-rajdhani font-semibold">
                Blackstone Infomatics
              </p>
              <p className="text-muted-foreground font-rajdhani text-sm leading-relaxed">
                Worked on a real-time taxi booking application with UI features, ride tracking, and location services
              </p>
            </div>
          </motion.div>

          {/* Certificates Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-primary transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/50 rounded-xl">
                <Award className="text-foreground" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-orbitron font-semibold text-foreground">
                Certificates
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground font-rajdhani">MERN Stack Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground font-rajdhani">Dart and Flutter (2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground font-rajdhani">Business English Certificate (Score: 136)</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-10 backdrop-blur-sm text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="text-primary" size={32} />
            <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground">
              Resume
            </h3>
          </div>
          <p className="text-muted-foreground font-rajdhani text-lg mb-8 max-w-md mx-auto">
            View my complete resume or download a copy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="font-orbitron font-semibold w-full sm:w-auto"
                onClick={() => window.open("/Nivedhana_S_MERN.pdf", "_blank")}
              >
                <ExternalLink size={18} className="mr-2" />
                View Online
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="font-orbitron font-semibold w-full sm:w-auto"
                asChild
              >
                <a href="/Nivedhana_S_MERN.pdf" download="Nivedhana_S_MERN.pdf">
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
