import { motion } from "framer-motion";
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Three.js", level: 85 },
      { name: "Framer Motion", level: 90 },
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    category: "Design",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 80 },
      { name: "3D Modeling", level: 75 },
      { name: "Animation", level: 90 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 78 },
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 82 },
      { name: "PWA", level: 88 },
      { name: "Responsive Design", level: 95 },
      { name: "Performance", level: 90 },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Tools & DevOps",
    icon: Globe,
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "AWS", level: 78 },
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    category: "Soft Skills",
    icon: Zap,
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Team Work", level: 92 },
      { name: "Creativity", level: 98 },
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
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 text-glow-cyan">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Technologies and tools I work with daily
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
                  <category.icon className="text-white" size={32} />
                </div>
                <h2 className="text-2xl font-orbitron font-bold text-foreground">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-rajdhani font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-orbitron font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut" 
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
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
