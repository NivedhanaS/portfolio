import { motion } from "framer-motion";
import { Code, Palette, Database, Smartphone, Globe, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 78 },
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Responsive Design", level: 92 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Web Services",
    icon: Globe,
    skills: [
      { name: "RESTful APIs", level: 88 },
      { name: "Axios", level: 85 },
      { name: "Firebase APIs", level: 80 },
      { name: "Google Maps API", level: 75 },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Tools & Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Android Studio", level: 80 },
      { name: "Debugging", level: 85 },
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Other Skills",
    icon: Palette,
    skills: [
      { name: "State Management", level: 88 },
      { name: "Problem Solving", level: 92 },
      { name: "Cross-browser Compatibility", level: 85 },
      { name: "UI/UX Design", level: 80 },
    ],
    color: "from-pink-500 to-rose-500",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm hover:border-primary transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-orbitron font-bold text-foreground">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-rajdhani font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-rajdhani">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, duration: 0.8 }}
                        className={`h-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
