import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:nivedhanasakthivel@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-20 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4 md:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 md:mb-8 text-foreground">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm font-rajdhani font-medium mb-2 text-muted-foreground">
                    Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-rajdhani font-medium mb-2 text-muted-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-rajdhani font-medium mb-2 text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    className="w-full font-orbitron font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 md:mb-8 text-foreground">
                Contact Info
              </h3>

              <div className="space-y-5 md:space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground text-sm">Email</p>
                    <p className="font-rajdhani font-semibold text-foreground text-sm md:text-base break-all">
                      nivedhanasakthivel@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-secondary/50 rounded-xl">
                    <Phone className="text-foreground" size={24} />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground text-sm">Phone</p>
                    <p className="font-rajdhani font-semibold text-foreground">+91 8680814368</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-accent/50 rounded-xl">
                    <MapPin className="text-foreground" size={24} />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground text-sm">Location</p>
                    <p className="font-rajdhani font-semibold text-foreground">Coimbatore, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 md:mb-8 text-foreground text-center">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://github.com/NivedhanaS"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-muted rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <Github size={28} className="text-foreground" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nivedhanas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-muted rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <Linkedin size={28} className="text-foreground" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
