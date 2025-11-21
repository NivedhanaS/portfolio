import { motion } from "framer-motion";
import { ExternalLink, Code, Terminal } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "@nivedhanasakthivel",
    description: "Open source contributions and personal projects",
    icon: Code,
    stats: "Check out my repositories",
    link: "https://github.com/nivedhanasakthivel",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "LeetCode",
    username: "nivedhana_s",
    description: "Competitive programming and algorithm practice",
    icon: Terminal,
    stats: "Problem solving and DSA practice",
    link: "https://leetcode.com",
    color: "from-orange-500 to-yellow-500",
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
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Coding Profiles
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Check out my coding journey across platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 rounded-2xl blur-xl transition-opacity" />
              
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

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-card border border-border rounded-2xl p-8"
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background/50 rounded-lg border border-border">
              <h3 className="text-xl font-orbitron font-semibold text-primary mb-2">MERN Stack Development</h3>
              <p className="text-muted-foreground font-rajdhani mb-2">Udemy</p>
              <p className="text-sm text-muted-foreground">Ongoing</p>
            </div>
            <div className="p-6 bg-background/50 rounded-lg border border-border">
              <h3 className="text-xl font-orbitron font-semibold text-primary mb-2">Dart and Flutter</h3>
              <p className="text-muted-foreground font-rajdhani mb-2">Udemy</p>
              <p className="text-sm text-muted-foreground">Completed (2024)</p>
            </div>
            <div className="p-6 bg-background/50 rounded-lg border border-border">
              <h3 className="text-xl font-orbitron font-semibold text-primary mb-2">Business English Certificate</h3>
              <p className="text-muted-foreground font-rajdhani mb-2">Cambridge Assessment</p>
              <p className="text-sm text-muted-foreground">Score: 136 (Preliminary)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profiles;
