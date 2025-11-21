import { motion } from "framer-motion";
import { ExternalLink, Code, Award, Terminal, BookOpen } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "@developer",
    description: "Open source contributions and personal projects",
    icon: Code,
    stats: "250+ repos, 1.5k+ contributions",
    link: "https://github.com",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "LeetCode",
    username: "coder_pro",
    description: "Competitive programming and algorithm practice",
    icon: Terminal,
    stats: "500+ problems solved, Top 5%",
    link: "https://leetcode.com",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "SkillRack",
    username: "skillmaster",
    description: "Programming challenges and skill assessments",
    icon: Award,
    stats: "1000+ points, Expert level",
    link: "https://skillrack.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dev.to",
    username: "@techwriter",
    description: "Technical articles and tutorials",
    icon: BookOpen,
    stats: "50+ articles, 10k+ views",
    link: "https://dev.to",
    color: "from-purple-500 to-pink-500",
  },
];

const Profiles = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 text-glow-cyan">
            Coding Profiles
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Check out my coding journey across platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative block"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 rounded-2xl blur-xl transition-opacity" 
                   style={{ backgroundImage: `linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))` }} />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm hover:border-primary transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${profile.color}`}>
                    <profile.icon className="text-white" size={32} />
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                </div>

                <h2 className="text-3xl font-orbitron font-bold mb-2 text-foreground">
                  {profile.name}
                </h2>

                <p className="text-primary font-rajdhani font-medium mb-4">
                  {profile.username}
                </p>

                <p className="text-muted-foreground mb-4 font-rajdhani">
                  {profile.description}
                </p>

                <div className="p-4 bg-background/50 rounded-lg border border-border">
                  <p className="text-sm font-orbitron font-semibold text-foreground">
                    {profile.stats}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-rajdhani text-muted-foreground mb-4">
            Want to collaborate or compete?
          </p>
          <p className="text-lg font-rajdhani text-foreground">
            Connect with me on any of these platforms!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profiles;
