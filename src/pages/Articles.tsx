import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building 3D Experiences with React Three Fiber",
    excerpt: "Learn how to create immersive 3D web experiences using React Three Fiber and modern web technologies.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Tutorial",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "The Future of Web Animations",
    excerpt: "Exploring the latest trends in web animations and how Framer Motion is changing the game.",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Opinion",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Best practices for building high-performance React applications at scale.",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Guide",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "TypeScript Tips for Beginners",
    excerpt: "Essential TypeScript patterns every developer should know.",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Tutorial",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Designing for Dark Mode",
    excerpt: "Creating beautiful and accessible dark mode interfaces.",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Design",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "Advanced CSS features that will improve your workflow.",
    date: "2023-12-15",
    readTime: "10 min read",
    category: "Tutorial",
    color: "from-pink-500 to-rose-500",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Featured Articles
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani">
            Technical articles and learning resources (Coming Soon)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center`}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-white text-6xl font-orbitron font-bold"
                >
                  {article.category.charAt(0)}
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-rajdhani">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-rajdhani font-medium mb-3">
                  {article.category}
                </span>

                <h3 className="text-xl font-orbitron font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 font-rajdhani">
                  {article.excerpt}
                </p>

                <Button variant="ghost" className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all">
                  Read More
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
