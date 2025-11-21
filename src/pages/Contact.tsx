import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-orbitron font-bold mb-8 text-foreground">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-rajdhani font-medium mb-2 text-muted-foreground">
                    Your Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-rajdhani font-medium mb-2 text-muted-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-rajdhani font-medium mb-2 text-muted-foreground">
                    Your Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full font-orbitron font-bold">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-orbitron font-bold mb-8 text-foreground">
                Contact Info
              </h2>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground">Email</p>
                    <p className="font-orbitron font-semibold">nivedhanasakthivel@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground">Phone</p>
                    <p className="font-orbitron font-semibold">+91 8680814368</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground">Location</p>
                    <p className="font-orbitron font-semibold">Coimbatore, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-orbitron font-bold mb-8 text-foreground text-center">
                Connect With Me
              </h2>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
