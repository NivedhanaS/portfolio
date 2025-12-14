import { motion } from "framer-motion";
import { Code, Database, Smartphone, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "TypeScript", "Framer Motion"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "MySQL", "Firebase"],
    gradient: "from-green-500 to-teal-500",
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Firebase", "Google Maps API", "State Management"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git/GitHub", "VS Code", "Postman", "Debugging", "Agile/Scrum", "CI/CD"],
    gradient: "from-orange-500 to-red-500",
  },
];

// Duplicate for seamless loop
const duplicatedCategories = [...skillCategories, ...skillCategories];

const Skills = () => {
  return (
    <div className="min-h-screen py-20 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4 md:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Horizontal Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedCategories.map((category, index) => (
              <div
                key={`${category.category}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px]"
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-orbitron font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-muted text-foreground rounded-lg text-sm font-rajdhani font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
