import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/nivedhanasakthivel", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/nivedhana-s", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
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
          className="p-4 bg-card rounded-xl border border-border hover:border-primary transition-all"
        >
          <social.icon size={32} className="text-primary" />
        </motion.a>
      ))}
    </div>
  );
};
