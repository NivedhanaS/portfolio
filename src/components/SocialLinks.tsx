import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "#00D9FF" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0077B5" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#E4405F" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "#FF0000" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "#1DA1F2" },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-card rounded-xl border border-border hover:border-primary transition-all glow-cyan"
          style={{ "--glow-color": social.color } as any}
        >
          <social.icon size={32} className="text-primary" />
        </motion.a>
      ))}
    </div>
  );
};
